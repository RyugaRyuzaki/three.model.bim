import { Vector2, Vector3 } from "three";
import {
	MIN_DIS,
	snapPoint,
	intersectPointPlane,
	getLocalVectorOnFace,
	getProjectPointFrom3Point,
	getMiddlePoint,
	areEqualVector,
	areEqual,
	changeCursor,
	LocationArc,
	LocationLine,
} from "../utils";

export function drawArc(view, unit, btn, workPlane, callback) {
	const { plane } = workPlane;
	const { factor } = unit;
	var count = 0;
	var mouse = new Vector2();
	var p1 = new Vector3();
	var p2 = new Vector3();
	var p3 = new Vector3();
	var arc, snap;

	function draw() {
		btn.style.background = "#aaaaa9";
		view.domElement.addEventListener("click", onMouseDown, false);
		view.domElement.addEventListener("mousemove", onMouseMove, false);
		window.addEventListener("keydown", onkeydown, false);
	}
	function onkeydown(event) {
		var keyCode = event.keyCode;
		if (keyCode == 27) {
			count = 0;
			if (arc) {
				arc.removeFromParent();
			}

			finishCallBack([]);
		}
	}
	function onMouseDown(e) {
		if (count == 0) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p1 = intersect.point;
			if (snap) p1 = snap;
		}
		if (count == 1) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p2 = intersect.point;
			if (snap) p2 = snap;
		}
		if (count == 2) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p3 = intersect.point;
			if (snap) p3 = snap;
			var pro = getProjectPointFrom3Point(p1, p2, p3);
			var d0 = p1.distanceTo(p2);
			var d1 = p3.distanceTo(pro);
			var dir = new Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
			var per = new Vector3(0, 0, 0).crossVectors(plane.normal, dir).normalize();
			var v0 = new Vector3(pro.x - p3.x, pro.y - p3.y, pro.z - p3.z).normalize();
			var mid = getMiddlePoint(p1, p2);
			var d2 = Math.sqrt(d1 * d1 + (d0 * d0) / 4);
			var d3 = (d2 * d2) / (2 * d1) - d1;
			var p0, angleArc;
			if (d1 > d0 / 2) {
				p0 = mid.add(v0.clone().multiplyScalar(-Math.abs(d3)));
				angleArc = 2 * Math.PI - 2 * Math.atan((d0 * 0.5) / Math.abs(d3));
			} else {
				p0 = mid.add(v0.clone().multiplyScalar(Math.abs(d3)));
				angleArc = 2 * Math.atan((d0 * 0.5) / Math.abs(d3));
			}
			var pS = areEqual(v0.angleTo(per), 0.0, 1e-6) ? p1 : p2;
			LocationArc.initArc(view, factor, p0, pS, plane.normal, arc, angleArc);
		}
		count++;
		if (count == 3) {
			finishCallBack([arc]);
		}
	}

	function onMouseMove(e) {
		changeCursor().crosshair(view.domElement);
		var intersect = intersectPointPlane(e, mouse, view, null, plane);
		var p = intersect.point;

		snap = snapPoint(workPlane, view, p);
		if (count == 1) {
			p2 = intersect.point;
			var dis = p1.distanceTo(p2);
			if (view.isOrthoLine) {
				var local = getLocalVectorOnFace(plane.normal);
				var dir = new Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
				var angleZ = dir.angleTo(local.z);
				var angleX = dir.angleTo(local.x);
				if (angleZ < Math.PI / 4 || angleZ > (Math.PI * 3) / 4) {
					p2 = p1.clone().add(local.z.normalize().multiplyScalar(Math.cos(angleZ) * dis));
				} else {
					p2 = p1.clone().add(local.x.normalize().multiplyScalar(Math.cos(angleX) * dis));
				}
			}
			if (snap) p2 = snap;
			if (!arc) {
				arc = LocationLine.createTempLine(p1, p2);
				view.scene.add(arc);
			} else {
				LocationLine.updateTempLine(p1, p2, arc);
			}
		}
		if (count == 2) {
			p3 = intersect.point;
			if (snap) p3 = snap;
			var pro = getProjectPointFrom3Point(p1, p2, p3);
			var d0 = p1.distanceTo(p2);
			var d1 = p3.distanceTo(pro);
			var dir = new Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
			var per = new Vector3(0, 0, 0).crossVectors(plane.normal, dir).normalize();
			if (d1 > d0 * 0.1) {
				var v0 = new Vector3(pro.x - p3.x, pro.y - p3.y, pro.z - p3.z).normalize();
				var mid = getMiddlePoint(p1, p2);
				var d2 = Math.sqrt(d1 * d1 + (d0 * d0) / 4);
				var d3 = (d2 * d2) / (2 * d1) - d1;
				var p0, angleArc;
				if (d1 > d0 / 2) {
					p0 = mid.add(v0.clone().multiplyScalar(-Math.abs(d3)));
					angleArc = 2 * Math.PI - 2 * Math.atan((d0 * 0.5) / Math.abs(d3));
				} else {
					p0 = mid.add(v0.clone().multiplyScalar(Math.abs(d3)));
					angleArc = 2 * Math.atan((d0 * 0.5) / Math.abs(d3));
				}

				var pS = areEqual(v0.angleTo(per), 0.0, 1e-6) ? p1 : p2;
				LocationArc.updateTempArc(p0, pS, plane.normal, arc, angleArc);
			}
		}
		if (count == 3) {
			changeCursor().default(view.domElement);
			view.domElement.removeEventListener("mousemove", onMouseMove);
		}
	}
	function finishCallBack(list) {
		changeCursor().default(view.domElement);
		snap = workPlane.planeMesh.userData.Grid.refreshSnap();
		btn.style.background = "none";
		view.domElement.removeEventListener("click", onMouseDown);
		view.domElement.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("keydown", onkeydown);
		callback(list);
	}

	draw();
}
