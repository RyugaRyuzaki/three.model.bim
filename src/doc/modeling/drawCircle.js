import { Vector2, Vector3 } from "three";
import { changeCursor } from "./cast";
import { MIN_DIS } from "./enum";
import { LocationArc } from "./Location";
import { snapPoint, intersectPointPlane } from "./snap";

export function drawCircle(view, unit, btn, workPlane, callback) {
	const { plane } = workPlane;
	const { factor } = unit;
	var count = 2;
	var mouse = new Vector2();
	var p1 = new Vector3();
	var p2 = new Vector3();
	var p3 = new Vector3();
	var arc1, arc2, snap;
	var angleArc = Math.PI;
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
			if (arc1 && arc2) {
				arc1.removeFromParent();
				arc2.removeFromParent();
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
			var dis = p1.distanceTo(p2);
			var dir = new Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
			p3 = p1.clone().add(dir.clone().multiplyScalar(-dis));
		}
		count--;
		if (count == 0) {
			LocationArc.initArc(view, factor, p1, p2, plane.normal, arc1, angleArc);
			LocationArc.initArc(view, factor, p1, p3, plane.normal, arc2, angleArc);
			finishCallBack([arc1, arc2]);
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
			var dir = new Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
			p3 = p1.clone().add(dir.clone().multiplyScalar(-dis));
			if (dis > MIN_DIS) {
				if (!arc1 && !arc2) {
					arc1 = LocationArc.createTempArc(p1, p2, plane.normal, angleArc);
					arc2 = LocationArc.createTempArc(p1, p3, plane.normal, angleArc);
					view.scene.add(arc1);
					view.scene.add(arc2);
				} else {
					LocationArc.updateTempArc(p1, p2, plane.normal, arc1, angleArc);
					LocationArc.updateTempArc(p1, p3, plane.normal, arc2, angleArc);
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
