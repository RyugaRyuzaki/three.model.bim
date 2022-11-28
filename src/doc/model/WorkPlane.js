import { BufferAttribute, BufferGeometry, EdgesGeometry, Line, LineSegments, Mesh, Plane, Vector3 } from "three";
import { MeshBVH } from "three-mesh-bvh";
import { customMaterial, dimMaterial, PlaneModelMaterial } from "../material";
import { SNAP, getLocalVectorOnFace, CSS } from "../modeling";
import { createPoint } from "../modeling/Location";

export class WorkPlane {
	listWorkPlanes = [];
	width = 10;
	constructor(view, unit) {
		this.view = view;
		this.unit = unit;
		this.initListWorkPlanes();
		this.initWorkPlane();
		this.show = false;
	}

	initItemWorkPlane(name, type, normal, point) {
		this.listWorkPlanes.push({
			name: name,
			type: type,
			normal: normal,
			point: point,
		});
	}
	initListWorkPlanes() {
		this.initItemWorkPlane("XZ", 0, new Vector3(0, 1, 0), new Vector3(0, 0, 0));
		this.initItemWorkPlane("XY", 1, new Vector3(0, 0, 1), new Vector3(0, 0, 0));
		this.initItemWorkPlane("YZ", 2, new Vector3(1, 0, 0), new Vector3(0, 0, 0));
		this.initItemWorkPlane("Pick a Plane", 3, new Vector3(0, 0, 0), new Vector3(0, 0, 0));
	}
	initWorkPlane() {
		const { point, normal } = this.listWorkPlanes[0];
		this.origin = point;
		var plane = new Plane(new Vector3(0, 1, 0), 0);
		this.plane = plane.setFromNormalAndCoplanarPoint(normal, point);
		this.planeMesh = this.initPlaneMesh();
	}
	initPlaneMesh() {
		var { points, gx, gz, snaps } = this.getAllPoints();
		var geometry = new BufferGeometry().setFromPoints(points);
		const mesh = new Mesh(geometry, PlaneModelMaterial.normalPlane);
		const edges = new EdgesGeometry(geometry);
		const line = new LineSegments(edges, customMaterial.normalLine);
		mesh.userData.OutLine = line;
		const { gridX, gridZ } = this.initGird(gx, gz);
		var snapPoint = createPoint(this.origin, CSS.intersect);
		var _this = this;
		mesh.userData.Grid = {
			gridX: gridX,
			gridZ: gridZ,
			snaps: snaps,
			snapPoint: snapPoint,
			visibility: (visible) => {
				for (let i = 0; i < mesh.userData.Grid.gridX.length; i++) {
					if (visible) {
						_this.view.scene.add(mesh.userData.Grid.gridX[i]);
						_this.view.scene.add(mesh.userData.Grid.gridZ[i]);
					} else {
						mesh.userData.Grid.gridX[i].removeFromParent();
						mesh.userData.Grid.gridZ[i].removeFromParent();
					}
				}
			},
			setGrid: (gx, gz, snaps) => {
				for (let i = 0; i < mesh.userData.Grid.gridX.length; i++) {
					mesh.userData.Grid.gridX[i].geometry = new BufferGeometry().setFromPoints([gx[i].start, gx[i].end]);
					mesh.userData.Grid.gridZ[i].geometry = new BufferGeometry().setFromPoints([gz[i].start, gz[i].end]);
				}
				mesh.userData.Grid.snaps = snaps;
			},
			snapGrid: (p) => {
				return mesh.userData.Grid.snaps.filter((s) => p.distanceTo(s) <= SNAP);
			},
			visibilitySnap: (p) => {
				var snap = mesh.userData.Grid.snapGrid(p)[0];
				mesh.userData.Grid.snapPoint.userData.visibility(_this.view.scene, snap != null);
				if (snap) {
					mesh.userData.Grid.snapPoint.userData.setPosition(snap);
				}
				return snap;
			},
			refreshSnap: () => {
				mesh.userData.Grid.snapPoint.userData.visibility(_this.view.scene, false);
			},
			refreshGrid: () => {
				mesh.userData.Grid.snapPoint.removeFromParent();
				for (let i = 0; i < mesh.userData.Grid.gridX.length; i++) {
					mesh.userData.Grid.gridX[i].removeFromParent();
					mesh.userData.Grid.gridZ[i].removeFromParent();
				}
				mesh.userData.OutLine.removeFromParent();
				mesh.removeFromParent();
			},
		};
		mesh.geometry.computeBoundingBox();
		mesh.geometry.computeBoundingSphere();
		mesh.geometry.computeVertexNormals();
		mesh.geometry.boundsTree = new MeshBVH(mesh.geometry);
		return mesh;
	}
	initGird(gx, gz) {
		var gridX = [];
		var gridZ = [];
		for (let i = 0; i < gx.length; i++) {
			var geoX = new BufferGeometry().setFromPoints([gx[i].start, gx[i].end]);
			var lx = new Line(geoX, dimMaterial.dotSnap);
			lx.computeLineDistances();
			gridX.push(lx);
			var geoZ = new BufferGeometry().setFromPoints([gz[i].start, gz[i].end]);
			var lz = new Line(geoZ, dimMaterial.dotSnap);
			lz.computeLineDistances();
			gridZ.push(lz);
		}
		return { gridX: gridX, gridZ: gridZ };
	}
	getAllPoints() {
		var local = getLocalVectorOnFace(this.plane.normal);
		var x = local.x.normalize();
		var nx = x.clone().negate();
		var z = local.z.normalize();
		var nz = z.clone().negate();
		var x1 = this.origin.clone().add(x.clone().multiplyScalar(this.width / 2));
		var x2 = this.origin.clone().add(nx.clone().multiplyScalar(this.width / 2));
		var z1 = this.origin.clone().add(z.clone().multiplyScalar(this.width / 2));
		var z2 = this.origin.clone().add(nz.clone().multiplyScalar(this.width / 2));
		var v1 = x2.clone().add(nz.clone().multiplyScalar(this.width / 2));
		var v2 = x2.clone().add(z.clone().multiplyScalar(this.width / 2));
		var v3 = x1.clone().add(z.clone().multiplyScalar(this.width / 2));
		var v4 = x1.clone().add(nz.clone().multiplyScalar(this.width / 2));
		var points = [];
		var gx = [];
		var gz = [];
		var snaps = [];
		points.push(v1);
		points.push(v2);
		points.push(v3);
		points.push(v1);
		points.push(v3);
		points.push(v4);
		gx.push({ start: x1, end: x2 });
		gz.push({ start: z1, end: z2 });
		for (let i = 1; i <= 5; i++) {
			var x1S = x1.clone().add(z.clone().multiplyScalar((i * this.width) / 10));
			var x1E = x2.clone().add(z.clone().multiplyScalar((i * this.width) / 10));
			var x2S = x1.clone().add(nz.clone().multiplyScalar((i * this.width) / 10));
			var x2E = x2.clone().add(nz.clone().multiplyScalar((i * this.width) / 10));
			var z1S = z1.clone().add(x.clone().multiplyScalar((i * this.width) / 10));
			var z1E = z2.clone().add(x.clone().multiplyScalar((i * this.width) / 10));
			var z2S = z1.clone().add(nx.clone().multiplyScalar((i * this.width) / 10));
			var z2E = z2.clone().add(nx.clone().multiplyScalar((i * this.width) / 10));
			gx.push({ start: x1S, end: x1E });
			gx.push({ start: x2S, end: x2E });
			gz.push({ start: z1S, end: z1E });
			z;
			gz.push({ start: z2S, end: z2E });
		}
		for (let i = 0; i < 11; i++) {
			var xSnap = v1.clone().add(z.clone().multiplyScalar((i * this.width) / 10));
			for (let j = 0; j < 11; j++) {
				var zSnap = xSnap.clone().add(x.clone().multiplyScalar((j * this.width) / 10));
				snaps.push(zSnap);
			}
		}
		return { points: points, gx: gx, gz: gz, snaps: snaps };
	}

	setWorkPlane(workPlaneType) {
		var point, normal;
		if (parseInt(workPlaneType) != 3) {
			point = this.listWorkPlanes[parseInt(workPlaneType)].point;
			normal = this.listWorkPlanes[parseInt(workPlaneType)].normal;
		} else {
		}
		this.origin = point;
		if (!this.plane) this.plane = new Plane(new Vector3(0, 1, 0), 0);
		this.plane = this.plane.setFromNormalAndCoplanarPoint(normal, point);
		if (this.planeMesh) {
			this.planeMesh.userData.Grid.refreshGrid();
			this.planeMesh = null;
		}
		this.planeMesh = this.initPlaneMesh();
		this.showWorkPlane(true);
	}
	showWorkPlane(visible) {
		this.show = visible;
		if (this.show) {
			this.view.scene.add(this.planeMesh.userData.OutLine);
			this.view.scene.add(this.planeMesh);
		} else {
			this.planeMesh.removeFromParent();
			this.planeMesh.userData.OutLine.removeFromParent();
		}
		this.planeMesh.userData.Grid.visibility(this.show);
	}
}
