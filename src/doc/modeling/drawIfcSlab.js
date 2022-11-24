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
export function drawIfcSlab(view, btn, callback) {
	var isMatch = false;
	var ifcType;
	function draw() {
		btn.style.background = "#aaaaa9";
		view.domElement.addEventListener("click", onMouseDown, false);
		view.domElement.addEventListener("mousemove", onMouseMove, false);
		window.addEventListener("keydown", onkeydown, false);
	}

	function onkeydown(event) {
		var keyCode = event.keyCode;
		btn.style.background = "none";
		view.domElement.classList.remove("maskDrop");
		changeCursor().default(view.renderer);
		if (keyCode == 27) {
			callback("Cancel");
		}
		if (keyCode == 13) {
			callback("OK");
		}

		view.domElement.removeEventListener("click", onMouseDown, false);
		view.domElement.removeEventListener("mousemove", onMouseMove, false);
		window.removeEventListener("keydown", onkeydown, false);
	}
	async function onMouseDown(e) {
		// if (isMatch) {
		// 	console.log(ifcType);
		// 	console.log(await view.ifc.getMaterialsProperties(view.preselectModel.id, view.expressID, true));
		// }
		console.log(await view.ifc.getMaterialsProperties(view.preselectModel.id, view.expressID, true));
	}

	async function onMouseMove(e) {
		if (view.expressID != -1) {
			ifcType = await view.ifc.getIfcType(view.preselectModel.id, view.expressID);
			if (ifcType === "IFCSLAB") {
				view.domElement.classList.add("maskDrop");
				isMatch = true;
			} else {
				isMatch = false;
				view.domElement.classList.remove("maskDrop");
				changeCursor().notAllowed(view.renderer);
			}
		} else {
			view.domElement.classList.remove("maskDrop");
			changeCursor().default(view.renderer);
		}
	}

	draw();
}
