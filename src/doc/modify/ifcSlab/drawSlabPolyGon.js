import { BufferAttribute, Line, BufferGeometry, Mesh, Vector2, Vector3, EdgesGeometry, LineSegments } from "three";
import { customMaterial } from "../../material";
import { changeCursor } from "../../utils";
import { extrudePolyGon } from "../extrude";
import {
	MAX_POINTS,
	PROFILE,
	CONFIG,
	intersectPlaneElevation,
	setPropertyCustomModel,
	pointerPosition,
	updatePointerPosition,
} from "../snap";

export function drawSlabPolyGon(view, btn, elevation, thickness, callback) {
	var count = 0;
	var mouse = new Vector2();
	var p0 = new Vector3();
	var p = new Vector3();
	var points = [];
	var mesh = createPolyGonSlab(points, view);
	mesh.visible = false;
	var positions = new Float32Array(MAX_POINTS * 3);
	var geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	geometry.setDrawRange(0, 2);
	var line = new Line(geometry, customMaterial.normalLine);
	line.computeLineDistances();
	line.renderOrder = 1;
	var corePositions = line.geometry.attributes.position.array;

	var pM = new Vector3();

	pointerPosition(pM, view, (text, font) => {
		function draw() {
			view.scene.add(line);
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
			text.removeFromParent();
			line.removeFromParent();
			mesh.removeFromParent();
			mesh.userData.OutLine.removeFromParent();
			if (keyCode == 27) {
				callback(null);
				return;
			}
			if (keyCode == 13) {
				if (count <= 2) {
					callback(null);
					return;
				} else {
					points.push(p0);
					var polyGon = createPolyGonSlab(points, view);
					if (!thickness || parseFloat(thickness) === 0) {
						polyGon.userData.CanCreateSlab = false;
					} else {
						if (confirm("Do you want to create Slab same thickness ")) {
							extrudePolyGon(polyGon, new Vector3(0, 1, 0), thickness);
							polyGon.userData.CanCreateSlab = true;
						} else {
							polyGon.userData.CanCreateSlab = false;
						}
					}
					callback(polyGon);
				}
			}
		}
		async function onMouseDown(e) {
			if (count === 0) {
				p0 = intersectPlaneElevation(e, mouse, view, elevation);
				corePositions[0] = p0.x;
				corePositions[1] = p0.y;
				corePositions[2] = p0.z;
				line.computeLineDistances();
				line.geometry.attributes.position.needsUpdate = true;
				points.push(p0);
			} else {
				if (count == 1) geometry.setDrawRange(0, 4);
				var point = intersectPlaneElevation(e, mouse, view, elevation);
				corePositions[3 * count] = point.x;
				corePositions[3 * count + 1] = point.y;
				corePositions[3 * count + 2] = point.z;

				if (count >= 2) {
					geometry.setDrawRange(0, count + 3);
					corePositions[3 * (count + 1)] = p0.x;
					corePositions[3 * (count + 1) + 1] = p0.y;
					corePositions[3 * (count + 1) + 2] = p0.z;
				}
				line.computeLineDistances();
				line.geometry.attributes.position.needsUpdate = true;
				points.push(point);
			}
			// updatePolyGon(mesh, points);
			count++;
		}

		function onMouseMove(e) {
			changeCursor().crosshair(view.renderer);
			if (count != 0) {
				p = intersectPlaneElevation(e, mouse, view, elevation);
				if (count == 1) {
					corePositions[3 * count] = p.x;
					corePositions[3 * count + 1] = p.y;
					corePositions[3 * count + 2] = p.z;
					line.computeLineDistances();
					line.geometry.attributes.position.needsUpdate = true;
				} else {
					corePositions[3 * count] = p.x;
					corePositions[3 * count + 1] = p.y;
					corePositions[3 * count + 2] = p.z;
					corePositions[3 * (count + 1)] = p0.x;
					corePositions[3 * (count + 1) + 1] = p0.y;
					corePositions[3 * (count + 1) + 2] = p0.z;
					line.computeLineDistances();
					line.geometry.attributes.position.needsUpdate = true;
				}
				var newPoints = [...points, p, p0];
				updatePolyGon(mesh, newPoints);
			}
			pM = intersectPlaneElevation(e, mouse, view, elevation);
			updatePointerPosition(pM, text, font, view);
		}
		draw();
	});
}
function createPolyGonSlab(points, view) {
	var positions = new Float32Array(MAX_POINTS * 3);
	for (let i = 0; i < points.length - 1; i++) {
		positions[i * 3] = points[i].x;
		positions[i * 3 + 1] = points[i].y;
		positions[i * 3 + 2] = points[i].z;
	}
	var geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	geometry.setDrawRange(0, 3 * (points.length - 3));
	var indices = [];
	for (let i = 0; i < points.length - 3; i++) {
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
	var newUserData = getMiddleMultiPoints();
	mesh.userData.PolyPoints = newUserData.polyPoints;
	setPropertyCustomModel(mesh, line, CONFIG.slab(newUserData.placement, PROFILE.circle));
	function getMiddleMultiPoints() {
		var x, y, z;
		var polyPoints = [];
		for (let i = 0; i < points.length - 1; i++) {
			x += points[i].x;
			y += points[i].y;
			z += points[i].z;
			polyPoints.push(points[i]);
		}
		return {
			placement: new Vector3(x / (points.length - 1), y / (points.length - 1), z / (points.length - 1)),
			polyPoints: polyPoints,
		};
	}
	return mesh;
}
function updatePolyGon(object, polyPoints) {
	var corePositions = object.geometry.attributes.position.array;
	for (let i = 0; i < polyPoints.length; i++) {
		corePositions[i * 3] = polyPoints[i].x;
		corePositions[i * 3 + 1] = polyPoints[i].y;
		corePositions[i * 3 + 2] = polyPoints[i].z;
	}
	object.geometry.attributes.position.needsUpdate = true;
	object.geometry.setDrawRange(0, 3 * (polyPoints.length - 2));
	var indices = [];
	for (let i = 0; i < polyPoints.length - 2; i++) {
		indices.push(0);
		indices.push(i + 1);
		indices.push(i + 2);
	}
	object.geometry.setIndex(indices);
	object.userData.OutLine.geometry = new EdgesGeometry(object.geometry);
}
