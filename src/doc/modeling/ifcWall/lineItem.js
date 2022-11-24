import { BufferAttribute, BufferGeometry, Mesh, Vector2, Vector3, EdgesGeometry, LineSegments } from "three";
import { customMaterial } from "../../material";
import { MAX_POINTS, CONFIG, PROFILE, setPropertyCustomModel, areEqual } from "../snap";
export class LocationLine {
	constructor(p1, p2, thickness, height) {
		this.p1 = p1;
		this.p2 = p2;
		this.pre = null;
		this.next = null;
		this.type = "LINE";
		this.thickness = thickness;
		this.height = height;
	}
	getCore() {
		var core = [];
		var v0, v1, v2, v3;
		var dir = new Vector3(this.p2.x - this.p1.x, this.p2.y - this.p1.y, this.p2.z - this.p1.z).normalize();
		var per = new Vector3(0, 0, 0).crossVectors(new Vector3(0, 1, 0), dir);
		var ner = per.clone().negate();
		var offsetPer = per.clone().multiplyScalar(this.thickness / 2);
		var offsetNer = ner.clone().multiplyScalar(this.thickness / 2);
		var offsetY = new Vector3(0, 1, 0).multiplyScalar(this.height);
		if (this.pre) {
			var preDir = new Vector3(
				this.pre.p2.x - this.pre.p1.x,
				this.pre.p2.y - this.pre.p1.y,
				this.pre.p2.z - this.pre.p1.z
			).normalize();
			var d1, d0;
			if (areEqual(preDir.angleTo(dir), Math.PI / 2) || areEqual(preDir.angleTo(dir), (3 * Math.PI) / 2)) {
				d0 = this.pre.thickness * 0.5;
				d1 = 0;
			} else {
				d0 = Math.abs((this.pre.thickness * 0.5) / Math.sin(preDir.angleTo(dir)));
				d1 = Math.abs((this.thickness * 0.5) / Math.tan(preDir.angleTo(dir)));
			}
			var v0T = this.p1.clone().add(dir.clone().multiplyScalar(-(d0 - d1)));
			v0 = v0T.clone().add(per.clone().multiplyScalar(this.thickness / 2));
			var v1T = this.p1.clone().add(dir.clone().multiplyScalar(-(d0 + d1)));
			v1 = v1T.clone().add(ner.clone().multiplyScalar(this.thickness / 2));
		} else {
			v0 = this.p1.clone().add(offsetPer);
			v1 = this.p1.clone().add(offsetNer);
		}
		if (this.next) {
			var nextDir = new Vector3(
				this.next.p2.x - this.next.p1.x,
				this.next.p2.y - this.next.p1.y,
				this.next.p2.z - this.next.p1.z
			).normalize();
			var d1, d0;
			if (areEqual(nextDir.angleTo(dir), Math.PI / 2)) {
				d0 = this.thickness * 0.5;
				d1 = 0;
			} else {
				d0 = (this.next.thickness * 0.5) / Math.tan(nextDir.angleTo(dir));
				d1 = (this.thickness * 0.5) / Math.sin(nextDir.angleTo(dir));
			}
			var v2T = this.p2.clone().add(dir.clone().multiplyScalar(-(d0 + d1)));
			v2 = v2T.clone().add(per.clone().multiplyScalar(this.thickness / 2));
			var v3T = this.p2.clone().add(dir.clone().multiplyScalar(-(d0 - d1)));
			v3 = v3T.clone().add(ner.clone().multiplyScalar(this.thickness / 2));
		} else {
			v2 = this.p2.clone().add(offsetPer);
			v3 = this.p2.clone().add(offsetNer);
		}
		var v4 = v0.clone().add(offsetY);
		var v5 = v1.clone().add(offsetY);
		var v6 = v2.clone().add(offsetY);
		var v7 = v3.clone().add(offsetY);
		LocationLine.pushToCore(core, [v0, v1, v2, v3, v4, v5, v6, v7]);
		return core;
	}
	setLineVertices(mesh) {
		var core = mesh.geometry.attributes.position.array;
		var newCore = mesh.userData.Location.getCore();
		for (let i = 0; i < newCore.length; i++) {
			core[i] = newCore[i];
		}
		mesh.geometry.attributes.position.needsUpdate = true;
		mesh.geometry.computeVertexNormals();
		mesh.userData.OutLine.geometry = new EdgesGeometry(mesh.geometry);
	}
	static initCore(p1, p2, thickness, height) {
		var core = [];
		var dir = new Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
		var per = new Vector3(0, 0, 0).crossVectors(new Vector3(0, 1, 0), dir);
		var ner = per.clone().negate();
		var offsetPer = per.clone().multiplyScalar(thickness / 2);
		var offsetNer = ner.clone().multiplyScalar(thickness / 2);
		var offsetY = new Vector3(0, 1, 0).multiplyScalar(height);
		var v0 = p1.clone().add(offsetPer);
		var v1 = p1.clone().add(offsetNer);
		var v2 = p2.clone().add(offsetPer);
		var v3 = p2.clone().add(offsetNer);
		var v4 = v0.clone().add(offsetY);
		var v5 = v1.clone().add(offsetY);
		var v6 = v2.clone().add(offsetY);
		var v7 = v3.clone().add(offsetY);
		LocationLine.pushToCore(core, [v0, v1, v2, v3, v4, v5, v6, v7]);
		return core;
	}
	static pushToCore(core, points) {
		points.forEach((v) => {
			core.push(v.x, v.y, v.z);
		});
	}
	static initIndices() {
		return [
			0, 1, 2, 2, 1, 3, 4, 5, 6, 6, 5, 7, 0, 1, 4, 4, 1, 5, 2, 3, 6, 6, 3, 7, 2, 0, 6, 6, 0, 4, 3, 1, 7, 7, 1, 5,
		];
	}
	static updateLineVertices(p1, p2, thickness, height, mesh) {
		var core = mesh.geometry.attributes.position.array;
		var newCore = LocationLine.initCore(p1, p2, thickness, height);
		for (let i = 0; i < newCore.length; i++) {
			core[i] = newCore[i];
		}
		mesh.geometry.attributes.position.needsUpdate = true;
		mesh.geometry.computeVertexNormals();
		mesh.geometry.computeBoundingBox();
		mesh.geometry.computeBoundingSphere();
		mesh.userData.Location.p1 = p1;
		mesh.userData.Location.p2 = p2;
		mesh.userData.OutLine.geometry = new EdgesGeometry(mesh.geometry);
	}
}
export function createWallLineItem(item, view) {
	var positions = new Float32Array(MAX_POINTS * 3);
	var geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	geometry.setDrawRange(0, 36);
	geometry.setIndex(LocationLine.initIndices());
	var mesh = new Mesh(geometry, customMaterial.normalModel);
	const edges = new EdgesGeometry(geometry);
	const line = new LineSegments(edges, customMaterial.normalLine);
	view.scene.add(line);
	view.scene.add(mesh);
	setPropertyCustomModel(mesh, line, CONFIG.wall(item.p1, PROFILE.rect));
	mesh.userData.Location = item;
	return mesh;
}
