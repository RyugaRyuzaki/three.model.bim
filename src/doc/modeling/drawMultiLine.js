import { Vector2, Vector3 } from "three";
import { changeCursor, LocationLine, snapPoint, intersectPointPlane } from "../utils";

export function drawMultiLine(view, unit, btn, workPlane, callback) {
	const { plane } = workPlane;
	const { factor } = unit;
	var count = 0;
	var mouse = new Vector2();
	var p1 = new Vector3(0, 0, 0);
	var p2 = new Vector3(0, 0, 0);
	var line, tempLine, snap;
	var list = [];
	var generate = false;
	function draw() {
		btn.style.background = "#aaaaa9";
		view.domElement.addEventListener("click", onMouseDown, false);
		view.domElement.addEventListener("mousemove", onMouseMove, false);
		window.addEventListener("keydown", onkeydown, false);
	}
	function onkeydown(event) {
		var keyCode = event.keyCode;
		if (keyCode == 27 || keyCode == 13) {
			if (tempLine) {
				tempLine.removeFromParent();
			}
			finishCallBack();
		}
	}
	function onMouseDown(e) {
		if (count == 0) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p1 = intersect.point;
			if (snap) p1 = snap;
		} else {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p2 = intersect.point;
			if (snap) p2 = snap;
			if (!line) {
				line = LocationLine.createTempLine(p1, p2);
				view.scene.add(line);
			}
			LocationLine.initLine(view, factor, p1, p2, plane.normal, line);
			list.push(line);
			p1 = p2;
			line = null;
		}
		count++;
		generate = true;
	}

	function onMouseMove(e) {
		changeCursor().crosshair(view.domElement);
		var intersect = intersectPointPlane(e, mouse, view, null, plane);
		var p = intersect.point;
		snap = snapPoint(workPlane, view, p);

		p2 = intersect.point;
		if (snap) p2 = snap;

		if (generate) {
			if (!tempLine) {
				tempLine = LocationLine.createTempLine(p1, p2);
				view.scene.add(tempLine);
			} else {
				LocationLine.updateTempLine(p1, p2, tempLine);
			}
		}
	}
	function finishCallBack() {
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
