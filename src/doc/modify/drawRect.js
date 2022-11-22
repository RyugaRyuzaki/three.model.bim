import { BufferAttribute, BufferGeometry, Mesh, Vector2, Vector3, EdgesGeometry, LineSegments } from "three";
import { MeshBVH } from "three-mesh-bvh";
import { customMaterial } from "../material";
import {
	MAX_POINTS,
	getLocalVectorOnFace,
	getProjectPointFromVector,
	intersectPointPlane,
	castElement,
	changeCursor,
	filterModel,
	setPropertyCustomModel,
	EdgeLine,
	findPointFromFace,
} from "./snap";
export function drawRect(view, btn, callback) {
	var count = 2;
	var mouse = new Vector2();
	var p1 = new Vector3();
	var p2 = new Vector3();
	var plane;
	var mesh = createRectangle(p1, p2, view);
	var meshPositions = mesh.geometry.attributes.position.array;
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
			finishCallBack();
		}
	}
	function onMouseDown(e) {
		const found = castElement(e, view, filterModel.model(view.scene))[0];
		if (count == 2) {
			var intersect = intersectPointPlane(e, mouse, view, found, null);
			p1 = intersect.point;
			plane = intersect.plane;
		}
		if (count == 1) {
			var intersect = intersectPointPlane(e, mouse, view, found, plane);
			p2 = intersect.point;
		}
		count--;
		if (count == 0) {
			finishCallBack();
		}
	}

	function onMouseMove(e) {
		changeCursor().crosshair(view.domElement);
		if (count == 1) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p2 = intersect.point;
			var local = getLocalVectorOnFace(plane.normal);
			var v1 = p1.clone();
			var v2 = getProjectPointFromVector(p1, p2, local.z);
			var v3 = p2.clone();
			var v4 = getProjectPointFromVector(p1, p2, local.x);
			updatePositionRectangle(meshPositions, v1, v2, v3, v4);
			mesh.geometry.attributes.position.needsUpdate = true;
			mesh.userData.OutLine.geometry = new EdgesGeometry(mesh.geometry);
		}
		if (count == 0) {
			changeCursor().default(view.domElement);
			view.domElement.removeEventListener("mousemove", onMouseMove);
		}
	}
	function finishCallBack() {
		mesh.geometry.computeBoundingBox();
		mesh.geometry.computeBoundingSphere();
		mesh.geometry.computeVertexNormals();
		mesh.geometry.boundsTree = new MeshBVH(mesh.geometry);
		// mesh.userData.edges.push(new EdgeLine(findPointFromFace(mesh, plane), plane));
		changeCursor().default(view.domElement);
		btn.style.background = "none";
		view.domElement.removeEventListener("click", onMouseDown);
		view.domElement.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("keydown", onkeydown);
		callback(mesh);
	}
	draw();
}
function createRectangle(p1, p2, view) {
	var v1 = p1.clone();
	var v2 = getProjectPointFromVector(p1, p2, new Vector3(1, 0, 0));
	var v3 = p2.clone();
	var v4 = getProjectPointFromVector(p1, p2, new Vector3(0, 0, 1));

	var positions = new Float32Array(MAX_POINTS * 3);
	updatePositionRectangle(positions, v1, v2, v3, v4);

	var geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	geometry.setIndex([0, 1, 2, 0, 2, 3]);

	const mesh = new Mesh(geometry, customMaterial.normalModel);
	const edges = new EdgesGeometry(geometry);
	const line = new LineSegments(edges, customMaterial.normalLine);

	setPropertyCustomModel(mesh, line);

	view.scene.add(line);
	view.scene.add(mesh);
	return mesh;
}
function updatePositionRectangle(vertices, v1, v2, v3, v4) {
	vertices[0] = v1.x;
	vertices[1] = v1.y;
	vertices[2] = v1.z;
	vertices[3] = v2.x;
	vertices[4] = v2.y;
	vertices[5] = v2.z;
	vertices[6] = v3.x;
	vertices[7] = v3.y;
	vertices[8] = v3.z;
	vertices[9] = v4.x;
	vertices[10] = v4.y;
	vertices[11] = v4.z;
}
