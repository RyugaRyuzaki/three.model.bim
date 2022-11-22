import {
	Plane,
	Raycaster,
	Mesh,
	Vector3,
	ShapeBufferGeometry,
	BufferGeometry,
	BufferAttribute,
	Line,
	EdgesGeometry,
	LineSegments,
	Euler,
} from "three";
import { customMaterial, dimMaterial } from "../material";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import fontJSON from "../../assets/font/droid_sans_bold.typeface.json";
export const filterModel = {
	model: (scene) => {
		return scene.children.filter((e) => e.userData.CustomModel && e.visible);
	},
};
export function castElement(event, view, filter) {
	const bounds = view.domElement.getBoundingClientRect();
	const x1 = event.clientX - bounds.left;
	const y1 = event.clientY - bounds.top;
	const x2 = bounds.right - bounds.left;
	view.mouse.x = (x1 / x2) * 2 - 1;
	const y2 = bounds.bottom - bounds.top;
	view.mouse.y = -(y1 / y2) * 2 + 1;
	view.rayCaster.setFromCamera(view.mouse, view.camera);
	return view.rayCaster.intersectObjects(filter);
}
export function changeCursor() {
	return {
		default: (domElement) => {
			domElement.style.cursor = "default";
		},
		pointer: (domElement) => {
			domElement.style.cursor = "pointer";
		},
		move: (domElement) => {
			domElement.style.cursor = "move";
		},
		crosshair: (domElement) => {
			domElement.style.cursor = "crosshair";
		},
		alias: (domElement) => {
			domElement.style.cursor = "alias";
		},
		extrude: (domElement) => {
			domElement.style.cursor = "row-resize";
		},
		notAllowed: (domElement) => {
			domElement.style.cursor = "not-allowed";
		},
	};
}
export const MAX_POINTS = 10000;
export const MAX_CIRCLE = 48;
export const MIN_DIS = 0.1;
export const ES = 1.0e-6;
export const PROFILE = {
	none: 0,
	rect: 1,
	polyGon: 2,
	circle: 3,
	halfCircle: 4,
};
export const CATEGORY = {
	buildingProxy: 0,
	slab: 1,
	wall: 2,
	beam: 3,
	column: 4,
};

export function intersectPlaneElevation(event, mouse, view, elevation) {
	const bounds = view.renderer.domElement.getBoundingClientRect();
	const x1 = event.clientX - bounds.left;
	const y1 = event.clientY - bounds.top;
	const x2 = bounds.right - bounds.left;
	mouse.x = (x1 / x2) * 2 - 1;
	const y2 = bounds.bottom - bounds.top;
	mouse.y = -(y1 / y2) * 2 + 1;

	const raycaster = new Raycaster();
	var plane = new Plane(new Vector3(0, 1, 0), 0);

	raycaster.setFromCamera(mouse, view.camera);
	var intersect = raycaster.ray.intersectPlane(plane, new Vector3());
	return new Vector3(intersect.x, elevation, intersect.z);
}
export function intersectPointOriginPlane(event, mouse, view, plane, point) {
	const bounds = view.renderer.domElement.getBoundingClientRect();
	const x1 = event.clientX - bounds.left;
	const y1 = event.clientY - bounds.top;
	const x2 = bounds.right - bounds.left;
	mouse.x = (x1 / x2) * 2 - 1;
	const y2 = bounds.bottom - bounds.top;
	mouse.y = -(y1 / y2) * 2 + 1;

	const raycaster = new Raycaster();

	raycaster.setFromCamera(mouse, view.camera);
	var newNormal = getLocalVectorOnFace(plane.normal).z;
	var newPlane = new Plane(new Vector3(0, 1, 0), 0);
	newPlane = newPlane.setFromNormalAndCoplanarPoint(newNormal, point);
	return raycaster.ray.intersectPlane(newPlane, new Vector3());
}
export function intersectPointPlane(event, mouse, view, found, plane) {
	const bounds = view.renderer.domElement.getBoundingClientRect();
	const x1 = event.clientX - bounds.left;
	const y1 = event.clientY - bounds.top;
	const x2 = bounds.right - bounds.left;
	mouse.x = (x1 / x2) * 2 - 1;
	const y2 = bounds.bottom - bounds.top;
	mouse.y = -(y1 / y2) * 2 + 1;

	const raycaster = new Raycaster();
	if (!plane) plane = new Plane(new Vector3(0, 1, 0), 0);
	if (found) {
		plane = plane.setFromNormalAndCoplanarPoint(found.face.normal, found.point);
	}
	raycaster.setFromCamera(mouse, view.camera);
	return {
		point: raycaster.ray.intersectPlane(plane, new Vector3()),
		plane: plane,
	};
}

export function areEqual(firstValue, secondValue, tolerance = 1.0e-9) {
	return secondValue - tolerance < firstValue && firstValue < secondValue + tolerance;
}

export function getLocalVectorOnFace(normal) {
	if (areEqual(normal.angleTo(new Vector3(0, 1, 0)), 0) || areEqual(normal.angleTo(new Vector3(0, 1, 0)), Math.PI)) {
		return {
			x: new Vector3(1, 0, 0),
			z: new Vector3(0, 0, 1),
		};
	} else {
		var z = new Vector3(0, 0, 0).crossVectors(normal, new Vector3(0, 1, 0));
		var x = new Vector3(0, 0, 0).crossVectors(normal, z);
		return {
			x: x,
			z: z,
		};
	}
}
export function getProjectPointFromVector(p1, p2, v) {
	var dis = p1.distanceTo(p2);
	var v0 = new Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
	var dis1 = dis * Math.cos(v0.angleTo(v));
	return p1.clone().add(new Vector3(v.x * dis1, v.y * dis1, v.z * dis1));
}

export function getMiddlePoint(point1, point2) {
	var vector = new Vector3(point2.x - point1.x, point2.y - point1.y, point2.z - point1.z);
	var length = vector.length() / 2;
	vector = vector.normalize();
	var newVector = point1.clone();
	newVector = newVector.add(new Vector3(vector.x * length, vector.y * length, vector.z * length));
	return newVector;
}

export function setPropertyCustomModel(mesh, outLine) {
	outLine.userData.isOutLine = true;
	mesh.userData.CustomModel = true;
	mesh.userData.OutLine = outLine;
	mesh.userData.IsSelect = false;
	mesh.userData.Hover = customMaterial.hoverModel;
	mesh.userData.Normal = customMaterial.normalModel;
	mesh.userData.Select = customMaterial.selectModel;
	mesh.userData.isExtrude = false;
	// mesh.renderOrder = 1;
}
export function findPointFromFace(object, plane) {
	var points = [];
	var arrIndex = object.geometry.index.array;
	var pos0 = object.geometry.attributes.position;
	var newArrayIndex = [];
	for (let i = 0; i < arrIndex.length; i++) {
		var v0 = new Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i]));
		var dis = plane.distanceToPoint(v0);
		if (areEqual(dis, 0.0)) {
			points.push(v0);
			newArrayIndex.push(arrIndex[i]);
		}
	}

	return { points: points, arrIndex: newArrayIndex };
}
