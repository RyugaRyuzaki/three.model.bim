import { BufferGeometry, EdgesGeometry, Plane, Vector2, Vector3 } from "three";
import { MeshBVH } from "three-mesh-bvh";
import { findPointFromFace, intersectPointOriginPlane, getOldPoints } from "../snap";
import { castElement, changeCursor, filterModel } from "../cast";
import { ES, MIN_DIS } from "../enum";

export function drawExtrude(view, btn, callback) {
	var mouse = new Vector2();
	var extrude = false;
	var plane = false;
	var p0;
	var pM;
	var equalPoints = [];
	var equalIndex = [];
	var perPoints = [];
	var perIndex = [];
	var notEqualPoints = [];
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
			equalPoints = fromFace.equalPoints;
			equalIndex = fromFace.equalIndex;
			perPoints = fromFace.perPoints;
			perIndex = fromFace.perIndex;
			notEqualPoints = fromFace.notEqualPoints;
			mesh = found.object;
			console.log(equalPoints);
		} else {
			plane = null;
			equalPoints = [];
			equalIndex = [];
			perPoints = [];
			perIndex = [];
			notEqualPoints = [];
			mesh = null;
		}
		extrude = true;
	}
	function onMouseUp(e) {
		extrude = false;
		plane = null;
		p0 = null;
		equalPoints = [];
		equalIndex = [];
		perPoints = [];
		perIndex = [];
		notEqualPoints = [];
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
			staticExtrude(dis);
		}
	}
	function staticExtrude(dis) {
		if (equalPoints.length > 0 && mesh) {
			if (!mesh.userData.isExtrude) {
				var newEqualPoints = equalPoints.filter(
					(value, index, self) => self.findIndex((m) => m.distanceTo(value) < ES) === index
				);
				var newPoints = offsetPointFromFace(newEqualPoints, dis, plane.normal, false);
				mesh.geometry = new BufferGeometry().setFromPoints(newPoints);
			} else {
				var newPoints = offsetPointFromFace(equalPoints, dis, plane.normal, true);

				if (perPoints.length == equalPoints.length * 2) {
					var newPerPoints = offsetPointFromFace(perPoints, dis, plane.normal, true);
					updateVerticesExtrude(mesh, equalIndex, perIndex, newPoints, newPerPoints);
				} else {
					console.log(equalPoints.length);
					var addNewPoints = getAddNewPoints(equalPoints, notEqualPoints, newPoints);
					mesh.geometry = new BufferGeometry().setFromPoints(addNewPoints);
				}
			}
			mesh.geometry.computeBoundingBox();
			mesh.geometry.computeBoundingSphere();
			mesh.geometry.computeVertexNormals();
			mesh.geometry.boundsTree = new MeshBVH(mesh.geometry);
			mesh.userData.OutLine.geometry = new EdgesGeometry(mesh.geometry);
		}
	}
	function finishCallBack() {
		changeCursor().default(view.domElement);
		view.controls.enabled = true;
		btn.style.background = "none";
		view.domElement.removeEventListener("mousedown", onMouseDown);
		view.domElement.removeEventListener("mouseup", onMouseUp);
		view.domElement.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("keydown", onkeydown);
		callback();
	}
	draw();
}
function getAddNewPoints(equalPoints, notEqualPoints, newPoints) {
	var p0 = [...equalPoints];
	var pN = [...newPoints];
	p0 = p0.filter((value, index, self) => self.findIndex((m) => m.distanceTo(value) < ES) === index);
	pN = pN.filter((value, index, self) => self.findIndex((m) => m.distanceTo(value) < ES) === index);
	var ps = [...notEqualPoints];
	for (let i = 0; i < p0.length; i++) {
		if (i == p0.length - 1) {
			ps.push(p0[i]);
			ps.push(p0[0]);
			ps.push(pN[0]);
			ps.push(p0[i]);
			ps.push(pN[0]);
			ps.push(pN[i]);
		} else {
			ps.push(p0[i]);
			ps.push(p0[i + 1]);
			ps.push(pN[i + 1]);
			ps.push(p0[i]);
			ps.push(pN[i + 1]);
			ps.push(pN[i]);
		}
	}
	return ps;
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
function updateVerticesExtrude(mesh, equalIndex, perIndex, newPoints, newPerPoints) {
	var pos0 = mesh.geometry.attributes.position;
	for (let i = 0; i < equalIndex.length; i++) {
		pos0.setX(equalIndex[i], newPoints[i].x);
		pos0.setY(equalIndex[i], newPoints[i].y);
		pos0.setZ(equalIndex[i], newPoints[i].z);
	}
	for (let i = 0; i < perIndex.length; i++) {
		pos0.setX(perIndex[i], newPerPoints[i].x);
		pos0.setY(perIndex[i], newPerPoints[i].y);
		pos0.setZ(perIndex[i], newPerPoints[i].z);
	}
	mesh.geometry.attributes.position.needsUpdate = true;
}
