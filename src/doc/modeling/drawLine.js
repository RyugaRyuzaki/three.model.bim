import { Vector2, Vector3 } from "three";
import { changeCursor } from "./cast";
import { MIN_DIS } from "./enum";
import { LocationLine } from "./Location";
import { snapPoint } from "./selectModel";
import { intersectPointPlane } from "./snap";

export function drawLine(view, unit, btn, workPlane, callback) {
	const { plane } = workPlane;
	const { factor } = unit;
	var count = 2;
	var mouse = new Vector2();
	var p1 = new Vector3();
	var p2 = new Vector3();
	var line, snap;

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
			if (line) {
				line.removeFromParent();
			}
			finishCallBack();
		}
	}
	function onMouseDown(e) {
		if (count == 2) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p1 = intersect.point;
			if (snap) p1 = snap;
		}
		if (count == 1) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p2 = intersect.point;
			if (snap) p2 = snap;
		}
		count--;
		if (count == 0) {
			LocationLine.initLine(view, factor, p1, p2, plane.normal, line);
			finishCallBack();
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
				if (!line) {
					line = LocationLine.createTempLine(p1, p2);
					view.scene.add(line);
				} else {
					LocationLine.updateTempLine(p1, p2, line);
				}
			}
		}

		if (count == 0) {
			changeCursor().default(view.domElement);
			view.domElement.removeEventListener("mousemove", onMouseMove);
		}
	}
	function finishCallBack() {
		changeCursor().default(view.domElement);
		snap = workPlane.planeMesh.userData.Grid.refreshSnap();
		btn.style.background = "none";
		view.domElement.removeEventListener("click", onMouseDown);
		view.domElement.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("keydown", onkeydown);
		callback();
	}

	draw();
}
