import { BufferAttribute, BufferGeometry, Mesh, Vector2, Vector3, EdgesGeometry, LineSegments } from "three";
import { customMaterial } from "../../material";
import { changeCursor } from "../../utils";
import { extrudeRectangle } from "../extrude";
import {
	MAX_POINTS,
	CONFIG,
	updatePositionRectangle,
	getProjectPointFromVector,
	intersectPlaneElevation,
	getMiddlePoint,
	PROFILE,
	setPropertyCustomModel,
	pointerPosition,
	updatePointerPosition,
	disposeMeshRecursively,
} from "../snap";

export function drawSlabRect(view, btn, elevation, thickness, factor, units, callback) {
	var count = 2;
	var mouse = new Vector2();
	var p1 = new Vector3();
	var p2 = new Vector3();
	var pM = new Vector3();
	var length, width;
	var mesh = createRectangleSlab(p1, p2, view);
	var meshPositions = mesh.geometry.attributes.position.array;

	pointerPosition(pM, view, (text, font) => {
		draw();
		function draw() {
			btn.style.background = "#aaaaa9";
			view.domElement.addEventListener("click", onMouseDown, false);
			view.domElement.addEventListener("mousemove", onMouseMove, false);
			window.addEventListener("keydown", onkeydown, false);
		}
		async function onMouseDown(e) {
			if (count == 2) {
				p1 = intersectPlaneElevation(e, mouse, view, elevation);
				length = prompt("Length", units.length);
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
								finishCallBack();
							}
						}
					}
				}
			}
			if (count == 1) {
				p2 = intersectPlaneElevation(e, mouse, view, elevation);
			}
			count--;
			if (count == 0) {
				finishCallBack();
			}
		}

		function onMouseMove(e) {
			changeCursor().crosshair(view.renderer);
			if (count == 2) {
				pM = intersectPlaneElevation(e, mouse, view, elevation);
				updatePointerPosition(pM, text, font, view);
			}
			if (count == 1) {
				p2 = intersectPlaneElevation(e, mouse, view, elevation);
				updateVerticesRectangle(meshPositions, p1, p2, mesh);
				updatePointerPosition(p2, text, font, view);
			}
			if (count == 0) {
				changeCursor().default(view.renderer);
				view.domElement.removeEventListener("mousemove", onMouseMove);
			}
		}
		function onkeydown(event) {
			var keyCode = event.keyCode;
			if (keyCode == 27) {
				disposeMeshRecursively(text);
				disposeMeshRecursively(mesh);
				disposeMeshRecursively(mesh.userData.OutLine);

				changeCursor().default(view.renderer);
				btn.style.background = "none";
				view.domElement.removeEventListener("click", onMouseDown);
				view.domElement.removeEventListener("mousemove", onMouseMove);
				window.removeEventListener("keydown", onkeydown);
				callback(null);
			}
		}
		function finishCallBack() {
			disposeMeshRecursively(text);
			disposeMeshRecursively(mesh);
			disposeMeshRecursively(mesh.userData.OutLine);

			var rect = createRectangleSlab(p1, p2, view);
			if (!thickness || parseFloat(thickness) === 0) {
				rect.userData.CanCreateSlab = false;
			} else {
				if (confirm("Do you want to create Slab same thickness ")) {
					extrudeRectangle(rect, 0, new Vector3(0, 1, 0), thickness);
					rect.userData.CanCreateSlab = true;
				} else {
					rect.userData.CanCreateSlab = false;
				}
			}
			rect.visible = true;
			changeCursor().default(view.renderer);
			btn.style.background = "none";
			view.domElement.removeEventListener("click", onMouseDown);
			view.domElement.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("keydown", onkeydown);
			callback(rect);
		}
	});
}

function updateVerticesRectangle(positions, p1, p2, mesh) {
	var v1 = p1.clone();
	var v2 = getProjectPointFromVector(p1, p2, new Vector3(1, 0, 0));
	var v3 = getProjectPointFromVector(p1, p2, new Vector3(0, 0, 1));
	var v4 = p2.clone();
	updatePositionRectangle(positions, v1, v2, v3, v4);
	mesh.geometry.attributes.position.needsUpdate = true;
	mesh.userData.OutLine.geometry = new EdgesGeometry(mesh.geometry);
}
function createRectangleSlab(p1, p2, view) {
	var v1 = p1.clone();
	var v2 = getProjectPointFromVector(p1, p2, new Vector3(1, 0, 0));
	var v3 = getProjectPointFromVector(p1, p2, new Vector3(0, 0, 1));
	var v4 = p2.clone();

	var positions = new Float32Array(MAX_POINTS * 3);
	updatePositionRectangle(positions, v1, v2, v3, v4);

	var geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	geometry.setDrawRange(0, 6);
	geometry.setIndex([0, 1, 2, 2, 1, 3]);

	var mesh = new Mesh(geometry, customMaterial.normalModel);
	const edges = new EdgesGeometry(geometry);
	const line = new LineSegments(edges, customMaterial.normalLine);
	view.scene.add(line);
	view.scene.add(mesh);
	mesh.visible = false;
	setPropertyCustomModel(mesh, line, CONFIG.slab(getMiddlePoint(v1, v4), PROFILE.rect));
	return mesh;
}
