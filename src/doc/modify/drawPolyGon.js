import {
	BufferAttribute,
	BufferGeometry,
	EllipseCurve,
	Group,
	Line,
	Mesh,
	Plane,
	Raycaster,
	Vector2,
	Vector3,
	ShapeBufferGeometry,
	EdgesGeometry,
	LineSegments,
} from "three";
import { customMaterial } from "../material";
import { castElement, changeCursor, filterModel } from "../utils";
import { MAX_POINTS, getLocalVectorOnFace, getProjectPointFromVector, intersectPointPlane } from "./snap";

export function drawPolyGon(view, btn, callback) {
	var count = 0;
	var mouse = new Vector2();
	var p0 = new Vector3();
	var p = new Vector3();
	var plane;
	var positions = new Float32Array(MAX_POINTS * 3);
	var geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	geometry.setDrawRange(0, 2);
	var line = new Line(geometry, customMaterial.normalLine);
	line.computeLineDistances();
	line.renderOrder = 1;
	var corePositions = line.geometry.attributes.position.array;

	function draw() {
		btn.style.background = "#aaaaa9";
		view.scene.add(line);
		view.domElement.addEventListener("click", onMouseDown, false);
		view.domElement.addEventListener("mousemove", onMouseMove, false);
		window.addEventListener("keydown", onkeydown, false);
	}

	function onkeydown(event) {
		var keyCode = event.keyCode;
		if (keyCode == 27) {
			line.removeFromParent();
			view.domElement.removeEventListener("click", onMouseDown);
			view.domElement.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("keydown", onkeydown);
			btn.style.background = "none";

			callback("Cancel");
		}
		if (keyCode == 13) {
			if (count <= 2) {
				line.removeFromParent();
			}
			view.domElement.removeEventListener("click", onMouseDown);
			view.domElement.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("keydown", onkeydown);
			btn.style.background = "none";
			view.domElement.classList.remove("pencil");
			callback("Cancel");
		}
	}
	async function onMouseDown(e) {
		const found = castElement(e, view, filterModel.multiModel(view.scene))[0];
		if (count === 0) {
			var intersect = intersectPointPlane(e, mouse, view, found, null);
			plane = intersect.plane;
			p0 = intersect.point;
			corePositions[0] = p0.x;
			corePositions[1] = p0.y;
			corePositions[2] = p0.z;
			line.computeLineDistances();
			line.geometry.attributes.position.needsUpdate = true;
		} else {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			var point = intersect.point;
			corePositions[3 * count] = point.x;
			corePositions[3 * count + 1] = point.y;
			corePositions[3 * count + 2] = point.z;
			corePositions[3 * (count + 1)] = p0.x;
			corePositions[3 * (count + 1) + 1] = p0.y;
			corePositions[3 * (count + 1) + 2] = p0.z;

			if (count == 1) {
				geometry.setDrawRange(0, 4);
			}
			line.computeLineDistances();
			line.geometry.attributes.position.needsUpdate = true;
			if (count >= 2) geometry.setDrawRange(0, count + 2);
		}
		console.log(line.geometry.attributes.position, count);
		count++;
	}

	function onMouseMove(e) {
		view.domElement.classList.add("pencil");
		if (count != 0) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p = intersect.point;
			if (count == 1) {
				corePositions[3] = p.x;
				corePositions[4] = p.y;
				corePositions[5] = p.z;
				line.computeLineDistances();
				line.geometry.attributes.position.needsUpdate = true;
			} else {
				if (count === 2) {
					corePositions[6] = p.x;
					corePositions[7] = p.y;
					corePositions[8] = p.z;
					corePositions[9] = p0.x;
					corePositions[10] = p0.y;
					corePositions[11] = p0.z;
					line.computeLineDistances();
					line.geometry.attributes.position.needsUpdate = true;
				} else {
					updateCorePositionMany();
				}
			}
		}
	}
	function updateCorePositionMany() {
		corePositions[3 * (count - 1)] = p.x;
		corePositions[3 * (count - 1) + 1] = p.y;
		corePositions[3 * (count - 1) + 2] = p.z;
		corePositions[3 * count] = p0.x;
		corePositions[3 * count + 1] = p0.y;
		corePositions[3 * count + 2] = p0.z;
		line.computeLineDistances();
		line.geometry.attributes.position.needsUpdate = true;
	}
	draw();
}
