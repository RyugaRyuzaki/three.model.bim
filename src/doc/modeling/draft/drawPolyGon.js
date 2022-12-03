import { BufferAttribute, BufferGeometry, Mesh, Vector2, Vector3, EdgesGeometry, LineSegments } from "three";
import { customMaterial } from "../../material";
import { castElement, changeCursor, filterModel } from "../cast";
import { MAX_POINTS } from "../enum";
// import { setPropertyPolyGon } from "../setProperty";
import { intersectPointPlane } from "../snap";
import { MeshBVH } from "three-mesh-bvh";
export function drawPolyGon(view, btn, callback) {
	var count = 0;
	var mouse = new Vector2();
	var p0 = new Vector3();
	var p = new Vector3();
	var points = [];
	var plane;
	var mesh = createPolyGonSlab(points, view);

	function draw() {
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
		changeCursor().default(view.domElement);
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
				polyGon.geometry.computeBoundingBox();
				polyGon.geometry.computeBoundingSphere();
				polyGon.geometry.computeVertexNormals();
				polyGon.geometry.boundsTree = new MeshBVH(polyGon.geometry);
				callback(polyGon);
			}
		}
	}
	async function onMouseDown(e) {
		const found = castElement(e, view, filterModel.model(view.scene))[0];
		if (count === 0) {
			var intersect = intersectPointPlane(e, mouse, view, found, null);
			p0 = intersect.point;
			plane = intersect.plane;

			points.push(p0);
		} else {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			var point = intersect.point;
			points.push(point);
		}
		updatePolyGon(mesh, points);
		count++;
	}

	function onMouseMove(e) {
		changeCursor().crosshair(view.domElement);
		if (count != 0) {
			var intersect = intersectPointPlane(e, mouse, view, null, plane);
			p = intersect.point;

			var newPoints = [...points, p, p0];
			updatePolyGon(mesh, newPoints);
		}
	}
	draw();
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

	setPropertyPolyGon(mesh, line);
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
