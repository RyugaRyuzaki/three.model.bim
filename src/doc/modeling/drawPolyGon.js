import { Vector2, Vector3 } from "three";
import { LocationLine, MIN_DIS, changeCursor, snapPoint, intersectPointPlane } from "../utils";

export function drawPolygon(view, unit, btn, workPlane, callback) {
	const { plane } = workPlane;
	const { label, factor } = unit;
	var count = 2;
	var mouse = new Vector2();
	var p1 = new Vector3();
	var p2 = new Vector3();
	var poly = [],
		snap,
		edge = 3;
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
			poly.forEach((p) => p.removeFromParent());
			poly = [];
			finishCallBack(poly);
		}
	}
	function onMouseDown(e) {
		if (count == 2) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p1 = intersect.point;
			if (snap) p1 = snap;
			edge = window.prompt("Enter number of edge", edge);
			if (isNaN(parseInt(edge)) || parseInt(edge) <= 2) edge = 3;
		}
		if (count == 1) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p2 = intersect.point;
			if (snap) p2 = snap;
			var dis = p1.distanceTo(p2);
			var points = generatePoints(dis);
			for (let i = 0; i < points.length; i++) {
				var v1, v2;
				if (i == points.length - 1) {
					v1 = points[i];
					v2 = points[0];
				} else {
					v1 = points[i];
					v2 = points[i + 1];
				}
				LocationLine.initLine(view, factor, v1, v2, plane.normal, poly[i]);
			}
		}
		count--;
		if (count == 0) {
			finishCallBack(poly);
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
				var points = generatePoints(dis);
				if (poly.length === 0) {
					for (let i = 0; i < points.length; i++) {
						var v1, v2;
						if (i == points.length - 1) {
							v1 = points[i];
							v2 = points[0];
						} else {
							v1 = points[i];
							v2 = points[i + 1];
						}
						var l = LocationLine.createTempLine(v1, v2);
						view.scene.add(l);
						poly.push(l);
					}
				} else {
					for (let i = 0; i < points.length; i++) {
						var v1, v2;
						if (i == points.length - 1) {
							v1 = points[i];
							v2 = points[0];
						} else {
							v1 = points[i];
							v2 = points[i + 1];
						}
						LocationLine.updateTempLine(v1, v2, poly[i]);
					}
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
	function generatePoints(dis) {
		var dir = new Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
		var per = new Vector3(0, 0, 0).crossVectors(plane.normal, dir).normalize();
		var points = [];
		for (let i = 0; i < edge; i++) {
			var angle = (i * 2 * Math.PI) / edge;
			var sin = Math.sin(angle);
			var cos = Math.cos(angle);
			points.push(
				p1
					.clone()
					.add(dir.clone().multiplyScalar(cos * dis))
					.add(per.clone().multiplyScalar(sin * dis))
			);
		}
		return points;
	}

	draw();
}
