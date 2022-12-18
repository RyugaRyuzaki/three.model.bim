import { Vector2, Vector3 } from "three";
import { changeCursor, LocationLine, getLocalVectorOnFace, intersectPointPlane, snapPoint } from "../utils";

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
			finishCallBack([]);
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
			finishCallBack([line]);
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
			if (!line) {
				line = LocationLine.createTempLine(p1, p2);
				view.scene.add(line);
			} else {
				LocationLine.updateTempLine(p1, p2, line);
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
