import {
	BufferAttribute,
	BufferGeometry,
	Mesh,
	Vector2,
	Vector3,
	EdgesGeometry,
	LineSegments,
	ShapeBufferGeometry,
} from "three";
import { customMaterial } from "../../material";
import { changeCursor } from "../../utils";
import { extrudeArc } from "../extrude";
import {
	MAX_POINTS,
	MAX_CIRCLE,
	CONFIG,
	PROFILE,
	intersectPlaneElevation,
	setPropertyCustomModel,
	getMiddlePoint,
	updateOrientText,
	updateOrient,
	createOrient,
	createOrientText,
	updateOrientFree,
	updateOrientTextFree,
} from "../snap";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import fontJSON from "../../../assets/font/droid_sans_bold.typeface.json";

export function drawSlabArc(view, btn, elevation, thickness, factor, units, callback) {
	var count = 3;
	var mouse = new Vector2();
	var p0 = new Vector3();
	var p1 = new Vector3();
	var p2 = new Vector3();
	var p3 = new Vector3();
	var mesh;
	var loader = new FontLoader();

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
			if (keyCode == 27) {
				if (mesh) {
					mesh.removeFromParent();
					mesh.userData.OutLine.removeFromParent();
				}
				if (axisX) axisX.removeFromParent();
				if (axisZ) axisZ.removeFromParent();
				if (textAxisX) textAxisX.removeFromParent();
				if (textAxisZ) textAxisZ.removeFromParent();
				changeCursor().default(view.renderer);
				btn.style.background = "none";
				view.domElement.removeEventListener("click", onMouseDown);
				view.domElement.removeEventListener("mousemove", onMouseMove);
				window.removeEventListener("keydown", onkeydown);
				callback(null);
			}
		}
		async function onMouseDown(e) {
			if (count == 3) {
				if (axisZ) axisZ.removeFromParent();
				if (textAxisZ) textAxisZ.removeFromParent();
				p0 = intersectPlaneElevation(e, mouse, view, elevation);
			}
			if (count == 2) {
				p1 = intersectPlaneElevation(e, mouse, view, elevation);
				p2 = getMiddlePoint(p0, p1);
				mesh = createArcSlab(p2, p1, view);
				mesh.visible = false;
			}
			if (count == 1) {
				finishCallBack();
			}
			count--;
		}

		function onMouseMove(e) {
			changeCursor().crosshair(view.renderer);

			if (count == 3) {
				pM = intersectPlaneElevation(e, mouse, view, elevation);
				pX = new Vector3(0, pM.y, pM.z);
				pZ = new Vector3(pM.x, pM.y, 0);
				updateOrient(pX, pM, coreX, geoX, axisX, true);
				updateOrient(pZ, pM, coreZ, geoZ, axisZ, true);
				updateOrientText(pX, pM, font, true, textAxisX, view);
				updateOrientText(pZ, pM, font, false, textAxisZ, view);
			}
			if (count == 2) {
				p1 = intersectPlaneElevation(e, mouse, view, elevation);
				updateOrientFree(p0, p1, coreX, geoX, axisX);
				updateOrientTextFree(p0, p1, font, textAxisX, view);
			}
			if (count == 1) {
				p3 = intersectPlaneElevation(e, mouse, view, elevation);
				updateOrientFree(p2, p3, coreX, geoX, axisX);
				updateOrientTextFree(p2, p3, font, textAxisX, view);
				var dir = new Vector3(p1.x - p0.x, p1.y - p0.y, p1.z - p0.z).normalize();
				var dis = p3.distanceTo(p2);
				var p3a = p2.clone().add(new Vector3(dir.x * dis, dir.y * dis, dir.z * dis));
				updateVerticesArc(p2, p3a, mesh);
			}
			if (count == 0) {
				changeCursor().default(view.renderer);
				view.domElement.removeEventListener("mousemove", onMouseMove);
			}
		}
		function finishCallBack() {
			if (!thickness || parseFloat(thickness) === 0) {
				mesh.userData.CanCreateSlab = false;
			} else {
				if (confirm("Do you want to create Slab same thickness ")) {
					extrudeArc(mesh, new Vector3(0, 1, 0), thickness);
					mesh.userData.CanCreateSlab = true;
				} else {
					mesh.userData.CanCreateSlab = false;
				}
			}
			mesh.visible = true;
			changeCursor().default(view.renderer);
			if (axisX) axisX.removeFromParent();
			if (textAxisX) textAxisX.removeFromParent();
			btn.style.background = "none";
			view.domElement.removeEventListener("click", onMouseDown);
			view.domElement.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("keydown", onkeydown);
			callback(mesh);
		}
		draw();
	});
}

function updateVerticesArc(p0, p1, mesh) {
	var positions = mesh.geometry.attributes.position.array;

	var dir = new Vector3(p1.x - p0.x, p1.y - p0.y, p1.z - p0.z).normalize();
	var r = p0.distanceTo(p1);
	var angle = dir.angleTo(new Vector3(0, 0, 1));
	for (let i = 0; i <= MAX_CIRCLE / 2; i++) {
		var x = r * Math.sin(angle + (i * Math.PI * 2) / MAX_CIRCLE);
		var z = r * Math.cos(angle + (i * Math.PI * 2) / MAX_CIRCLE);
		positions[3 * (i + 1)] = x + p0.x;
		positions[3 * (i + 1) + 1] = p0.y;
		positions[3 * (i + 1) + 2] = z + p0.z;
	}
	mesh.geometry.attributes.position.needsUpdate = true;
	mesh.userData.OutLine.geometry = new EdgesGeometry(mesh.geometry);
}
function createArcSlab(p0, p1, view) {
	var positions = new Float32Array(MAX_POINTS * 3);
	positions[0] = p0.x;
	positions[1] = p0.y;
	positions[2] = p0.z;
	var dir = new Vector3(p1.x - p0.x, p1.y - p0.y, p1.z - p0.z).normalize();
	var r = p0.distanceTo(p1);
	var angle = dir.angleTo(new Vector3(0, 0, 1));
	for (let i = 0; i <= MAX_CIRCLE / 2; i++) {
		var x = r * Math.sin(angle + (i * Math.PI * 2) / MAX_CIRCLE);
		var z = r * Math.cos(angle + (i * Math.PI * 2) / MAX_CIRCLE);
		positions[3 * (i + 1)] = x + p0.x;
		positions[3 * (i + 1) + 1] = p0.y;
		positions[3 * (i + 1) + 2] = z + p0.z;
	}
	var geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	geometry.setDrawRange(0, (3 * MAX_CIRCLE) / 2);
	var indices = [];
	for (let i = 0; i < MAX_CIRCLE / 2; i++) {
		indices.push(0);
		indices.push(i + 1);
		indices.push(i + 2);
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
