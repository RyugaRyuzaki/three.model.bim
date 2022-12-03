import { BufferAttribute, BufferGeometry, Mesh, Vector2, Vector3, EdgesGeometry, LineSegments } from "three";
import { customMaterial } from "../../../material";
import { changeCursor } from "../../utils";
import { extrudeCircle } from "../extrude";
import {
	MAX_POINTS,
	MAX_CIRCLE,
	CONFIG,
	PROFILE,
	intersectPlaneElevation,
	setPropertyCustomModel,
	updateOrientFree,
	createOrient,
	createOrientText,
	updateOrientTextFree,
	pointerPosition,
	updatePointerPosition,
} from "../../snap";

export function drawSlabCircle(view, btn, elevation, thickness, factor, units, callback) {
	var count = 2;
	var mouse = new Vector2();
	var p0 = new Vector3();
	var p1 = new Vector3();
	var mesh;

	var pM = new Vector3();
	var positions = new Float32Array(12);
	var geo = new BufferGeometry();
	geo.setAttribute("position", new BufferAttribute(positions, 3));
	geo.setDrawRange(0, 6);
	geo.setIndex([0, 1, 2, 2, 1, 3]);
	var core = geo.attributes.position.array;
	var axis = createOrient(geo, view);
	var textR;
	pointerPosition(pM, view, (text, font) => {
		function draw() {
			btn.style.background = "#aaaaa9";
			view.domElement.addEventListener("click", onMouseDown, false);
			view.domElement.addEventListener("mousemove", onMouseMove, false);
			window.addEventListener("keydown", onkeydown, false);
		}

		function onkeydown(event) {
			var keyCode = event.keyCode;
			if (keyCode == 27) {
				if (mesh) {
					mesh.removeFromParent();
					mesh.userData.OutLine.removeFromParent();
				}
				if (axis) axis.removeFromParent();
				if (textR) textR.removeFromParent();
				text.removeFromParent();
				changeCursor().default(view.renderer);
				btn.style.background = "none";
				view.domElement.removeEventListener("click", onMouseDown);
				view.domElement.removeEventListener("mousemove", onMouseMove);
				window.removeEventListener("keydown", onkeydown);
				callback(null);
			}
		}
		async function onMouseDown(e) {
			if (count == 2) {
				p0 = intersectPlaneElevation(e, mouse, view, elevation);
				textR = createOrientText(p0, pM, font, view, true);
				mesh = createCircleSlab(p0, p1, view);
				mesh.visible = false;
				var radius = prompt("Radius", units.length);
				if (radius) {
					if (isNaN(parseFloat(radius))) {
						alert("Invalid value");
					} else {
						radius = factor * radius;
						p1 = new Vector3(p0.x + radius, p0.y, p0.z);
						updateVerticesCircle(p0, p1, mesh);

						finishCallBack();
					}
				}
			}
			if (count == 1) {
				p1 = intersectPlaneElevation(e, mouse, view, elevation);
				finishCallBack();
			}
			count--;
		}

		function onMouseMove(e) {
			changeCursor().crosshair(view.renderer);

			if (count == 2) {
				pM = intersectPlaneElevation(e, mouse, view, elevation);
				updatePointerPosition(pM, text, font, view);
			}
			if (count == 1) {
				p1 = intersectPlaneElevation(e, mouse, view, elevation);
				updateVerticesCircle(p0, p1, mesh);
				updatePointerPosition(p1, text, font, view);
				updateOrientFree(p0, p1, core, geo, axis);
				updateOrientTextFree(p0, p1, font, textR, view);
			}
			if (count == 0) {
				changeCursor().default(view.renderer);
				view.domElement.removeEventListener("mousemove", onMouseMove);
			}
		}
		function finishCallBack() {
			text.removeFromParent();
			if (axis) axis.removeFromParent();
			if (textR) textR.removeFromParent();
			if (!thickness || parseFloat(thickness) === 0) {
				mesh.userData.CanCreateSlab = false;
			} else {
				if (confirm("Do you want to create Slab same thickness ")) {
					extrudeCircle(mesh, new Vector3(0, 1, 0), thickness);
					mesh.userData.CanCreateSlab = true;
				} else {
					mesh.userData.CanCreateSlab = false;
				}
			}
			mesh.visible = true;
			changeCursor().default(view.renderer);
			btn.style.background = "none";
			view.domElement.removeEventListener("click", onMouseDown);
			view.domElement.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("keydown", onkeydown);
			callback(mesh);
		}
		draw();
	});
}
function updateVerticesCircle(p0, p1, mesh) {
	var positions = mesh.geometry.attributes.position.array;

	var dir = new Vector3(p1.x - p0.x, p1.y - p0.y, p1.z - p0.z).normalize();
	var r = p0.distanceTo(p1);
	var angle = dir.angleTo(new Vector3(0, 0, 1));
	for (let i = 0; i < MAX_CIRCLE; i++) {
		var x = r * Math.sin(angle + (i * Math.PI * 2) / MAX_CIRCLE);
		var z = r * Math.cos(angle + (i * Math.PI * 2) / MAX_CIRCLE);
		positions[3 * (i + 1)] = x + p0.x;
		positions[3 * (i + 1) + 1] = p0.y;
		positions[3 * (i + 1) + 2] = z + p0.z;
	}
	mesh.geometry.attributes.position.needsUpdate = true;
	mesh.userData.OutLine.geometry = new EdgesGeometry(mesh.geometry);
}
function createCircleSlab(p0, p1, view) {
	var positions = new Float32Array(MAX_POINTS * 3);
	positions[0] = p0.x;
	positions[1] = p0.y;
	positions[2] = p0.z;
	var dir = new Vector3(p1.x - p0.x, p1.y - p0.y, p1.z - p0.z).normalize();
	var r = p0.distanceTo(p1);
	var angle = dir.angleTo(new Vector3(0, 0, 1));
	for (let i = 0; i < MAX_CIRCLE; i++) {
		var x = r * Math.sin(angle + (i * Math.PI * 2) / MAX_CIRCLE);
		var z = r * Math.cos(angle + (i * Math.PI * 2) / MAX_CIRCLE);
		positions[3 * (i + 1)] = x + p0.x;
		positions[3 * (i + 1) + 1] = p0.y;
		positions[3 * (i + 1) + 2] = z + p0.z;
	}
	var geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	geometry.setDrawRange(0, 3 * MAX_CIRCLE);
	var indices = [];
	for (let i = 0; i < MAX_CIRCLE; i++) {
		if (i === MAX_CIRCLE - 1) {
			indices.push(0);
			indices.push(MAX_CIRCLE);
			indices.push(1);
		} else {
			indices.push(0);
			indices.push(i + 1);
			indices.push(i + 2);
		}
	}
	geometry.setIndex(indices);

	var mesh = new Mesh(geometry, customMaterial.normalModel);
	const edges = new EdgesGeometry(geometry);
	const line = new LineSegments(edges, customMaterial.normalLine);
	view.scene.add(line);
	view.scene.add(mesh);
	setPropertyCustomModel(mesh, line, CONFIG.slab(p0, PROFILE.circle));
	return mesh;
}
