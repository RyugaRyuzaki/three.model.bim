import { Vector2, Vector3 } from "three";
import {
	changeCursor,
	MIN_DIS,
	LocationLine,
	snapPoint,
	getLocalVectorOnFace,
	getProjectPointFromVector,
	intersectPointPlane,
} from "../utils";

export function drawRect(view, unit, btn, workPlane, callback) {
	const { plane } = workPlane;
	const { label, factor } = unit;
	var count = 2;
	var mouse = new Vector2();
	var p1 = new Vector3();
	var p2 = new Vector3();
	var l1, l2, l3, l4, snap;
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
			if (l1 && l2 && l3 && l4) {
				l1.removeFromParent();
				l2.removeFromParent();
				l3.removeFromParent();
				l4.removeFromParent();
			}
			finishCallBack([]);
		}
	}
	function onMouseDown(e) {
		if (count == 2) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p1 = intersect.point;

			if (snap) p1 = snap;
			var length = window.prompt("Enter Length", label);
			if (!isNaN(parseFloat(length * 1.0)) && length) {
				var width = window.prompt("Enter Width", label);
				if (!isNaN(parseFloat(width * 1.0))) {
					var local = getLocalVectorOnFace(plane.normal);
					var v1 = p1.clone();
					var v2 = p1.clone().add(local.z.clone().multiplyScalar(width * factor));
					var v3 = v2.clone().add(local.x.clone().multiplyScalar(length * factor));
					var v4 = p1.clone().add(local.x.clone().multiplyScalar(length * factor));
					if (!l1 && !l2 && !l3 && !l4) {
						l1 = LocationLine.createTempLine(v1, v2);
						l2 = LocationLine.createTempLine(v2, v3);
						l3 = LocationLine.createTempLine(v3, v4);
						l4 = LocationLine.createTempLine(v4, v1);
						view.scene.add(l1);
						view.scene.add(l2);
						view.scene.add(l3);
						view.scene.add(l4);
						LocationLine.initLine(view, factor, v1, v2, plane.normal, l1);
						LocationLine.initLine(view, factor, v2, v3, plane.normal, l2);
						LocationLine.initLine(view, factor, v3, v4, plane.normal, l3);
						LocationLine.initLine(view, factor, v4, v1, plane.normal, l4);
					}
					finishCallBack([l1, l2, l3, l4]);
				}
			}
		}
		if (count == 1) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p2 = intersect.point;
			if (snap) p2 = snap;
		}
		count--;
		if (count == 0) {
			var local = getLocalVectorOnFace(plane.normal);
			var v1 = p1.clone();
			var v2 = getProjectPointFromVector(p1, p2, local.z);
			var v3 = p2.clone();
			var v4 = getProjectPointFromVector(p1, p2, local.x);
			LocationLine.initLine(view, factor, v1, v2, plane.normal, l1);
			LocationLine.initLine(view, factor, v2, v3, plane.normal, l2);
			LocationLine.initLine(view, factor, v3, v4, plane.normal, l3);
			LocationLine.initLine(view, factor, v4, v1, plane.normal, l4);
			finishCallBack([l1, l2, l3, l4]);
		}
	}

	function onMouseMove(e) {
		changeCursor().crosshair(view.domElement);
		var intersect = intersectPointPlane(e, mouse, view, null, plane);
		var p = intersect.point;

		snap = snapPoint(workPlane, view, p);
		if (count == 1) {
			p2 = intersect.point;
			if (snap) p2 = snap;
			var dis = p1.distanceTo(p2);
			if (dis > MIN_DIS) {
				var local = getLocalVectorOnFace(plane.normal);
				var v1 = p1.clone();
				var v2 = getProjectPointFromVector(p1, p2, local.z);
				var v3 = p2.clone();
				var v4 = getProjectPointFromVector(p1, p2, local.x);
				if (!l1 && !l2 && !l3 && !l4) {
					l1 = LocationLine.createTempLine(v1, v2);
					l2 = LocationLine.createTempLine(v2, v3);
					l3 = LocationLine.createTempLine(v3, v4);
					l4 = LocationLine.createTempLine(v4, v1);
					view.scene.add(l1);
					view.scene.add(l2);
					view.scene.add(l3);
					view.scene.add(l4);
				} else {
					LocationLine.updateTempLine(v1, v2, l1);
					LocationLine.updateTempLine(v2, v3, l2);
					LocationLine.updateTempLine(v3, v4, l3);
					LocationLine.updateTempLine(v4, v1, l4);
				}
			}
		}

		if (count == 0) {
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
