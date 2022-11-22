import { BufferGeometry, EdgesGeometry, Plane, Vector2, Vector3 } from "three";
import { MeshBVH } from "three-mesh-bvh";
import {
	ES,
	MIN_DIS,
	findPointFromFace,
	intersectPointOriginPlane,
	castElement,
	changeCursor,
	filterModel,
} from "./snap";

export function drawExtrude(view, btn, callback) {
	var mouse = new Vector2();
	var extrude = false;
	var plane = false;
	var p0;
	var pM;
	var points = [];
	var arrIndex = [];
	var mesh;
	function draw() {
		btn.style.background = "#aaaaa9";
		view.domElement.addEventListener("mousedown", onMouseDown, false);
		view.domElement.addEventListener("mouseup", onMouseUp, false);
		view.domElement.addEventListener("mousemove", onMouseMove, false);
		window.addEventListener("keydown", onkeydown, false);
	}

	function onkeydown(event) {
		var keyCode = event.keyCode;
		if (keyCode == 27 || keyCode == 13) {
			finishCallBack();
		}
	}
	function onMouseDown(e) {
		const found = castElement(e, view, filterModel.model(view.scene))[0];
		if (found) {
			if (!plane) plane = new Plane(new Vector3(0, 1, 0), 0);
			plane = plane.setFromNormalAndCoplanarPoint(found.face.normal, found.point);
			p0 = found.point;
			var fromFace = findPointFromFace(found.object, plane);
			points = fromFace.points;
			arrIndex = fromFace.arrIndex;
			mesh = found.object;
		} else {
			plane = null;
			points = [];
			arrIndex = [];
			mesh = null;
		}
		extrude = true;
	}
	function onMouseUp(e) {
		extrude = false;
		plane = null;
		p0 = null;
		points = [];
		arrIndex = [];
		if (mesh) {
			mesh.userData.isExtrude = true;
		}
		view.controls.mouseButtons.LEFT = 0;
	}

	function onMouseMove(e) {
		const found = castElement(e, view, filterModel.model(view.scene))[0];
		if (found) {
			changeCursor().extrude(view.domElement);
		} else {
			changeCursor().default(view.domElement);
		}
		view.controls.enabled = plane == null;
		if (extrude && plane) {
			pM = intersectPointOriginPlane(e, mouse, view, plane, p0);
			var dis = plane.distanceToPoint(pM);
			if (dis > MIN_DIS && points.length > 0 && mesh) {
				if (!mesh.userData.isExtrude) {
					points = points.filter(
						(value, index, self) => self.findIndex((m) => m.distanceTo(value) < ES) === index
					);
					var newPoints = offsetPointFromFace(points, dis, plane.normal, false);
					mesh.geometry = new BufferGeometry().setFromPoints(newPoints);
				} else {
					var newPoints = offsetPointFromFace(points, dis, plane.normal, true);
					updateVerticesExtrude(mesh, arrIndex, newPoints);
				}
				mesh.geometry.computeBoundingBox();
				mesh.geometry.computeBoundingSphere();
				mesh.geometry.computeVertexNormals();
				mesh.geometry.boundsTree = new MeshBVH(mesh.geometry);
				mesh.userData.OutLine.geometry = new EdgesGeometry(mesh.geometry);
			}
		}
	}
	function finishCallBack() {
		changeCursor().default(view.domElement);
		btn.style.background = "none";
		view.domElement.removeEventListener("mousedown", onMouseDown);
		view.domElement.removeEventListener("mouseup", onMouseUp);
		view.domElement.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("keydown", onkeydown);
		callback();
	}
	draw();
}

function offsetPointFromFace(points, dis, normal, isExtrude) {
	var ps = [];
	var newPs = [];
	for (let i = 0; i < points.length; i++) {
		newPs.push(points[i].clone().add(normal.clone().multiplyScalar(dis)));
	}
	if (isExtrude) {
		return newPs;
	} else {
		for (let i = 0; i < points.length - 2; i++) {
			ps.push(points[0]);
			ps.push(points[i + 1]);
			ps.push(points[i + 2]);
		}
		for (let i = 0; i < newPs.length - 2; i++) {
			ps.push(newPs[0]);
			ps.push(newPs[i + 1]);
			ps.push(newPs[i + 2]);
		}
		for (let i = 0; i < points.length; i++) {
			if (i == points.length - 1) {
				ps.push(points[i]);
				ps.push(points[0]);
				ps.push(newPs[0]);
				ps.push(points[i]);
				ps.push(newPs[0]);
				ps.push(newPs[i]);
			} else {
				ps.push(points[i]);
				ps.push(points[i + 1]);
				ps.push(newPs[i + 1]);
				ps.push(points[i]);
				ps.push(newPs[i + 1]);
				ps.push(newPs[i]);
			}
		}
	}

	return ps;
}
function updateVerticesExtrude(mesh, arrIndex, newPoints) {
	var pos0 = mesh.geometry.attributes.position;
	if (mesh.geometry.index.array.length <= 36) {
		for (let i = 0; i < arrIndex.length; i++) {
			pos0.setX(arrIndex[i], newPoints[i].x);
			pos0.setY(arrIndex[i], newPoints[i].y);
			pos0.setZ(arrIndex[i], newPoints[i].z);
		}
		mesh.geometry.attributes.position.needsUpdate = true;
	} else {
	}
}
