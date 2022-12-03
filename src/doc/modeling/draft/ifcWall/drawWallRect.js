import { BufferAttribute, BufferGeometry, Vector2, Vector3 } from "three";
import { changeCursor } from "../../utils";
import {
	getProjectPointFromVector,
	intersectPlaneElevation,
	snapExtend,
	updateTextExtend,
	createOrient,
	createOrientText,
	updateOrient,
	updateOrientText,
} from "../../snap";
import { createWallLineItem, LocationLine } from "./lineItem";
export function drawWallRect(view, btn, elevation, height, thickness, factor, units, callback) {
	var count = 2;
	var mouse = new Vector2();
	var p1 = new Vector3();
	var p2 = new Vector3();
	var pM = new Vector3();
	var pX = new Vector3();
	var pZ = new Vector3();
	var length, width;
	var item1, item2, item3, item4;
	var w1, w2, w3, w4;

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
	snapExtend(p1, p2, view, (textX, textY, font) => {
		draw();
		function draw() {
			textAxisX = createOrientText(pX, pM, font, view, true);
			textAxisZ = createOrientText(pZ, pM, font, view, false);
			btn.style.background = "#aaaaa9";
			view.domElement.addEventListener("click", onMouseDown, false);
			view.domElement.addEventListener("mousemove", onMouseMove, false);
			window.addEventListener("keydown", onkeydown, false);
		}
		async function onMouseDown(e) {
			if (count == 2) {
				if (axisX) axisX.removeFromParent();
				if (axisZ) axisZ.removeFromParent();
				if (textAxisX) textAxisX.removeFromParent();
				if (textAxisZ) textAxisZ.removeFromParent();
				p1 = intersectPlaneElevation(e, mouse, view, elevation);
				length = prompt("Length", units.length);
				item1 = new LocationLine(new Vector3(), new Vector3(), thickness, height);
				item2 = new LocationLine(new Vector3(), new Vector3(), thickness, height);
				item3 = new LocationLine(new Vector3(), new Vector3(), thickness, height);
				item4 = new LocationLine(new Vector3(), new Vector3(), thickness, height);

				if (length) {
					if (isNaN(parseFloat(length))) {
						alert("Invalid value");
					} else {
						width = prompt("Width", units.length);
						if (width) {
							if (isNaN(parseFloat(width))) {
								alert("Invalid value");
							} else {
								length = factor * length;
								width = factor * width;
								p2 = new Vector3(p1.x + length, p1.y, p1.z + width);
								if (p1.distanceTo(p2) >= 2 * thickness) {
									w1 = createWallLineItem(item1, view);
									w2 = createWallLineItem(item2, view);
									w3 = createWallLineItem(item3, view);
									w4 = createWallLineItem(item4, view);
									updateRectangleWall(p1, p2, thickness, height, w1, w2, w3, w4);
									setLocationRectangleWall(w1, w2, w3, w4);
									finishCallBack();
								} else {
									alert("Height or Width is too small");
								}
							}
						}
					}
				}
			}
			if (count == 1) {
				p2 = intersectPlaneElevation(e, mouse, view, elevation);
				updateRectangleWall(p1, p2, thickness, height, w1, w2, w3, w4);
				setLocationRectangleWall(w1, w2, w3, w4);
				finishCallBack();
			}
			count--;
		}

		function onMouseMove(e) {
			changeCursor().crosshair(view.renderer);
			if (count == 2) {
				pM = intersectPlaneElevation(e, mouse, view, elevation);
				pX = new Vector3(0, pM.y, pM.z);
				pZ = new Vector3(pM.x, pM.y, 0);
				updateOrient(pX, pM, coreX, geoX, axisX, true);
				updateOrient(pZ, pM, coreZ, geoZ, axisZ, true);
				updateOrientText(pX, pM, font, true, textAxisX, view);
				updateOrientText(pZ, pM, font, false, textAxisZ, view);
			}
			if (count == 1) {
				p2 = intersectPlaneElevation(e, mouse, view, elevation);
				if (textX) textX.removeFromParent();
				if (textY) textY.removeFromParent();
				updateTextExtend(p1, p2, textX, textY, font, view);
				if (!w1 && !w2 && !w3 && !w4) {
					if (p1.distanceTo(p2) >= 2 * thickness) {
						w1 = createWallLineItem(item1, view);
						w2 = createWallLineItem(item2, view);
						w3 = createWallLineItem(item3, view);
						w4 = createWallLineItem(item4, view);
					}
				}
				if (p1.distanceTo(p2) >= 2 * thickness) {
					updateRectangleWall(p1, p2, thickness, height, w1, w2, w3, w4);
				}
			}
			if (count == 0) {
				changeCursor().default(view.renderer);
				view.domElement.removeEventListener("mousemove", onMouseMove);
			}
		}
		function onkeydown(event) {
			var keyCode = event.keyCode;
			if (keyCode == 27) {
				if (axisX) axisX.removeFromParent();
				if (axisZ) axisZ.removeFromParent();
				if (textAxisX) textAxisX.removeFromParent();
				if (textAxisZ) textAxisZ.removeFromParent();
				changeCursor().default(view.renderer);
				remove();
				btn.style.background = "none";
				view.domElement.removeEventListener("click", onMouseDown);
				view.domElement.removeEventListener("mousemove", onMouseMove);
				window.removeEventListener("keydown", onkeydown);
				callback(null);
			}
		}
		function finishCallBack() {
			if (textX) textX.removeFromParent();
			if (textY) textY.removeFromParent();

			changeCursor().default(view.renderer);
			btn.style.background = "none";
			view.domElement.removeEventListener("click", onMouseDown);
			view.domElement.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("keydown", onkeydown);
			console.log(w1);
			callback([w1, w2, w3, w4]);
		}
		function remove() {
			if (w1 && w2 && w3 && w4) {
				w1.removeFromParent();
				w1.userData.OutLine.removeFromParent();
				w2.removeFromParent();
				w2.userData.OutLine.removeFromParent();
				w3.removeFromParent();
				w3.userData.OutLine.removeFromParent();
				w4.removeFromParent();
				w4.userData.OutLine.removeFromParent();
			}
		}
	});
}
function updateRectangleWall(p1, p2, thickness, height, w1, w2, w3, w4) {
	var v1 = p1.clone();
	var v2 = getProjectPointFromVector(p1, p2, new Vector3(1, 0, 0));
	var v3 = getProjectPointFromVector(p1, p2, new Vector3(0, 0, 1));
	var v4 = p2.clone();
	var v12 = new Vector3(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z).normalize();
	var v24 = new Vector3(v4.x - v2.x, v4.y - v2.y, v4.z - v2.z).normalize();
	var v43 = new Vector3(v3.x - v4.x, v3.y - v4.y, v3.z - v4.z).normalize();
	var v31 = new Vector3(v1.x - v3.x, v1.y - v3.y, v1.z - v3.z).normalize();
	var p11 = v1.clone().add(v12.clone().multiplyScalar(-thickness / 2));
	var p21 = v2.clone().add(v12.clone().multiplyScalar(-thickness / 2));
	var p12 = v2.clone().add(v24.clone().multiplyScalar(-thickness / 2));
	var p22 = v4.clone().add(v24.clone().multiplyScalar(-thickness / 2));
	var p13 = v4.clone().add(v43.clone().multiplyScalar(-thickness / 2));
	var p23 = v3.clone().add(v43.clone().multiplyScalar(-thickness / 2));
	var p14 = v3.clone().add(v31.clone().multiplyScalar(-thickness / 2));
	var p24 = v1.clone().add(v31.clone().multiplyScalar(-thickness / 2));
	w1.userData.Location.p1 = v1;
	w1.userData.Location.p2 = v2;
	w2.userData.Location.p1 = v2;
	w2.userData.Location.p2 = v4;
	w3.userData.Location.p1 = v4;
	w3.userData.Location.p2 = v3;
	w4.userData.Location.p1 = v3;
	w4.userData.Location.p2 = v1;
	LocationLine.updateLineVertices(p11, p21, thickness, height, w1);
	LocationLine.updateLineVertices(p12, p22, thickness, height, w2);
	LocationLine.updateLineVertices(p13, p23, thickness, height, w3);
	LocationLine.updateLineVertices(p14, p24, thickness, height, w4);
}
function setLocationRectangleWall(w1, w2, w3, w4) {
	w1.userData.Location.pre = w4.userData.Location;
	w1.userData.Location.next = w2.userData.Location;
	w2.userData.Location.pre = w1.userData.Location;
	w2.userData.Location.next = w3.userData.Location;
	w3.userData.Location.pre = w2.userData.Location;
	w3.userData.Location.next = w4.userData.Location;
	w4.userData.Location.pre = w3.userData.Location;
	w4.userData.Location.next = w1.userData.Location;
}
