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
import { customMaterial } from "../material";
import { INTERSECT_TYPE } from "./enum";

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
export function areEqualVector(v1, v2) {
	return areEqual(v1.x, v2.x, 1.0e-6) && areEqual(v1.y, v2.y, 1.0e-6) && areEqual(v1.z, v2.z, 1.0e-6);
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

export function findPointFromFace(object, plane) {
	var equalPoints = [];
	var perPoints = [];
	var equalIndex = [];
	var perIndex = [];
	var notEqualPoints = [];
	var arrIndex = object.geometry.index.array;
	var pos0 = object.geometry.attributes.position;
	var normal0 = object.geometry.attributes.normal;
	for (let i = 0; i < arrIndex.length; i++) {
		var normal = new Vector3(normal0.getX(arrIndex[i]), normal0.getY(arrIndex[i]), normal0.getZ(arrIndex[i]));
		var v0 = new Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i]));
		if (areEqualVector(normal, plane.normal)) {
			equalPoints.push(v0);
			equalIndex.push(arrIndex[i]);
		} else {
			notEqualPoints.push(arrIndex[i]);
			var dis = plane.distanceToPoint(v0);
			if (areEqual(dis, 0.0, 1.0e-6) && areEqual(normal.angleTo(plane.normal), Math.PI / 2, 1.0e-6)) {
				perIndex.push(arrIndex[i]);
				perPoints.push(v0);
			}
		}
	}

	return {
		equalPoints: equalPoints,
		equalIndex: equalIndex,
		perPoints: perPoints,
		perIndex: perIndex,
		notEqualPoints: notEqualPoints,
	};
}
export function getOldPoints(object) {
	var points = [];
	var arrIndex = object.geometry.index.array;
	var pos0 = object.geometry.attributes.position;
	for (let i = 0; i < arrIndex.length; i++) {
		var v0 = new Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i]));
		points.push(v0);
	}
	return points;
}

export function getIntersectTypeLines(l1, l2) {
	if (!l1.userData.Location || !l2.userData.Location) return INTERSECT_TYPE.dispose;
	if (!l1.userData.Location.Direction || !l2.userData.Location.Direction) return INTERSECT_TYPE.dispose;
	if (!l1.userData.Location.Normal || !l2.userData.Location.Normal) return INTERSECT_TYPE.dispose;
	if (!areEqualVector(l1.userData.Location.Normal, l2.userData.Location.Normal)) return INTERSECT_TYPE.dispose;
	if (areEqualVector(l1.userData.Location.Direction, l2.userData.Location.Direction)) {
		const pro = l1.userData.Location.Start.position.clone().projectOnVector(l2.userData.Location.Direction);
		if (areEqual(pro.distanceTo(l1.userData.Location.Start.position), 0.0, 1e-6)) {
			return INTERSECT_TYPE.equal;
		} else {
			return INTERSECT_TYPE.parallel;
		}
	} else {
		return INTERSECT_TYPE.intersect;
	}
}
export function getIntersectLines(l1, l2) {
	if (getIntersectTypeLines(l1, l2) != INTERSECT_TYPE.intersect) return null;
	const proS = l1.userData.Location.Start.position.clone().projectOnVector(l2.userData.Location.Direction);
	const proE = l1.userData.Location.End.position.clone().projectOnVector(l2.userData.Location.Direction);
	var cS = new Vector3(
		proS.x - l1.userData.Location.Start.position.x,
		proS.y - l1.userData.Location.Start.position.y,
		proS.z - l1.userData.Location.Start.position.z
	).normalize();
	var cE = new Vector3(
		proE.x - l1.userData.Location.End.position.x,
		proE.y - l1.userData.Location.End.position.y,
		proE.z - l1.userData.Location.End.position.z
	).normalize();
	var disS = proS.distanceTo(l1.userData.Location.Start.position);
	var disE = proE.distanceTo(l1.userData.Location.End.position);
	if (areEqual(cE.angleTo(cS), 0.0, 1e-6)) return null;
}
