import { BufferAttribute, Line, BufferGeometry, Vector2, Vector3, RGB_PVRTC_2BPPV1_Format } from "three";
import { changeCursor } from "../../utils";
import { intersectPlaneElevation, updateOrientText, createOrient, createOrientText, updateOrient } from "../snap";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import fontJSON from "../../../assets/font/droid_sans_bold.typeface.json";
import { createWallLineItem, LocationLine } from "./lineItem";

export function drawWallPolyGon(view, btn, elevation, height, thickness, factor, units, callback) {
	var count = 0;
	var mouse = new Vector2();

	var points = [];
	var group = [];
	var temp;

	var pM = new Vector3();
	var pX = new Vector3();
	var pZ = new Vector3();
	var positions = new Float32Array(12);
	var geoX = new BufferGeometry();
	geoX.setAttribute("position", new BufferAttribute(positions, 3));
	geoX.setDrawRange(0, 6);
	geoX.setIndex([0, 1, 2, 2, 1, 3]);
	var geoZ = new BufferGeometry();
	geoZ.setAttribute("position", new BufferAttribute(positions, 3));
	geoZ.setDrawRange(0, 6);
	geoZ.setIndex([0, 1, 2, 2, 1, 3]);
	var coreX = geoX.attributes.position.array;
	var coreZ = geoZ.attributes.position.array;
	var axisX = createOrient(geoX, view);
	var axisZ = createOrient(geoZ, view);
	var textAxisX, textAxisZ;

	var loader = new FontLoader();
	loader.load(fontJSON, function (font) {
		function draw() {
			textAxisX = createOrientText(pX, pM, font, view, true);
			textAxisZ = createOrientText(pZ, pM, font, view, false);
			btn.style.background = "#aaaaa9";
			view.domElement.addEventListener("click", onMouseDown, false);
			view.domElement.addEventListener("mousemove", onMouseMove, false);
			window.addEventListener("keydown", onkeydown, false);
		}

		function onkeydown(event) {
			var keyCode = event.keyCode;
			view.domElement.removeEventListener("click", onMouseDown);
			view.domElement.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("keydown", onkeydown);
			btn.style.background = "none";
			changeCursor().crosshair(view.renderer);
			if (axisX) axisX.removeFromParent();
			if (axisZ) axisZ.removeFromParent();
			if (textAxisX) textAxisX.removeFromParent();
			if (textAxisZ) textAxisZ.removeFromParent();
			if (temp) {
				temp.removeFromParent();
				temp.userData.OutLine.removeFromParent();
			}
			if (keyCode == 13 || keyCode == 27) {
				if (count <= 2) {
					callback(null);
					return;
				} else {
					// updateGroup(group);
					callback(group);
				}
			}
		}
		async function onMouseDown(e) {
			points.push(intersectPlaneElevation(e, mouse, view, elevation));
			if (count >= 1) {
				if (points[points.length - 1].distanceTo(points[points.length - 2]) >= 2 * thickness) {
					var item = new LocationLine(
						points[points.length - 2],
						points[points.length - 1],
						thickness,
						height
					);
					var w = createWallLineItem(item, view);
					LocationLine.updateLineVertices(
						points[points.length - 2],
						points[points.length - 1],
						thickness,
						height,
						w
					);
					group.push(w);
					if (group.length >= 2) {
						updateGroup(group);
					}
				}
			}
			count++;
		}

		function onMouseMove(e) {
			changeCursor().crosshair(view.renderer);
			var p = intersectPlaneElevation(e, mouse, view, elevation);
			if (count >= 1) {
				if (p.distanceTo(points[points.length - 1]) >= 2 * thickness) {
					if (!temp) {
						var item = new LocationLine(p, points[points.length - 1], thickness, height);
						temp = createWallLineItem(item, view);
					}
					LocationLine.updateLineVertices(points[points.length - 1], p, thickness, height, temp);
				}
			}
			pM = intersectPlaneElevation(e, mouse, view, elevation);
			pX = new Vector3(0, pM.y, pM.z);
			pZ = new Vector3(pM.x, pM.y, 0);
			updateOrient(pX, pM, coreX, geoX, axisX, true);
			updateOrient(pZ, pM, coreZ, geoZ, axisZ, true);
			updateOrientText(pX, pM, font, true, textAxisX, view);
			updateOrientText(pZ, pM, font, false, textAxisZ, view);
		}
		draw();
	});
}
function updateGroup(group) {
	for (let i = 0; i < group.length; i++) {
		if (i === 0) {
			group[i].userData.Location.pre = null;
			group[i].userData.Location.next = group[i + 1].userData.Location;
		} else {
			if (i === group.length - 1) {
				group[i].userData.Location.pre = group[i - 1].userData.Location;
				group[i].userData.Location.next = null;
			} else {
				group[i].userData.Location.pre = group[i - 1].userData.Location;
				group[i].userData.Location.next = group[i + 1].userData.Location;
			}
		}
	}
	for (let i = 0; i < group.length; i++) {
		group[i].userData.Location.setLineVertices(group[i]);
	}
}
