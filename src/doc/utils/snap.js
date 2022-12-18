import { Plane, Raycaster, Vector3 } from "three";
import { CustomType, ES, INTERSECT_TYPE, SNAP } from "./enum";

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
//  get project point from p2 to vector p1&p2
export function getProjectPointFrom3Point(p1, p2, p3) {
	var v1 = new Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
	var v2 = new Vector3(p3.x - p1.x, p3.y - p1.y, p3.z - p1.z).normalize();
	return p1.clone().add(v1.clone().multiplyScalar(p1.distanceTo(p3) * Math.cos(v1.angleTo(v2))));
}

export function getMiddlePoint(point1, point2) {
	var vector = new Vector3(point2.x - point1.x, point2.y - point1.y, point2.z - point1.z);
	var length = vector.length() / 2;
	vector = vector.normalize();
	var newVector = point1.clone();
	newVector = newVector.add(new Vector3(vector.x * length, vector.y * length, vector.z * length));
	return newVector;
}
export function getAllPointSnap(workPlane, view) {
	var snaps = [];
	if (workPlane.show) {
		var workPlaneSnaps = workPlane.planeMesh.userData.Grid.snaps;
		for (let i = 0; i < workPlaneSnaps.length; i++) {
			snaps.push({
				position: workPlaneSnaps[i],
				point: workPlane.planeMesh.userData.Grid.snapPoint,
			});
		}
	}
	view.scene.children.forEach((c) => {
		if (c.userData.Type == CustomType.line) {
			snaps.push({
				position: c.userData.Location.Start.position,
				point: c.userData.Location.Start,
			});
			snaps.push({
				position: c.userData.Location.Mid.position,
				point: c.userData.Location.Mid,
			});
			snaps.push({
				position: c.userData.Location.End.position,
				point: c.userData.Location.End,
			});
		}
		if (c.userData.Type == CustomType.arc) {
			snaps.push({
				position: c.userData.Location.Start.position,
				point: c.userData.Location.Start,
			});
			snaps.push({
				position: c.userData.Location.Center.position,
				point: c.userData.Location.Center,
			});
			snaps.push({
				position: c.userData.Location.End.position,
				point: c.userData.Location.End,
			});
		}
		if (c.userData.Type == CustomType.model) {
			c.userData.Location.Snaps.forEach((m) => {
				snaps.push({
					position: m,
					point: c.userData.Location.SnapPoint,
				});
			});
		}
	});
	snaps = snaps.filter(
		(value, index, self) => self.findIndex((snap) => snap.position.distanceTo(value.position) < ES) === index
	);
	return snaps;
}

export function snapPoint(workPlane, view, p) {
	var allSnaps = getAllPointSnap(workPlane, view);
	if (allSnaps.length == 0) return null;
	var snap = allSnaps.filter((s) => p.distanceTo(s.position) <= SNAP)[0];
	if (!snap) {
		allSnaps.forEach((s) => s.point.userData.visibility(view.scene, false));
		return null;
	} else {
		snap.point.userData.setPosition(snap.position);
		snap.point.userData.visibility(view.scene, true);
		return snap.position;
	}
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
export function findFacePoints(object, plane) {
	var equalPoints = [];
	var arrIndex = object.geometry.index.array;
	var pos0 = object.geometry.attributes.position;
	var normal0 = object.geometry.attributes.normal;
	for (let i = 0; i < arrIndex.length; i++) {
		var normal = new Vector3(normal0.getX(arrIndex[i]), normal0.getY(arrIndex[i]), normal0.getZ(arrIndex[i]));
		var v0 = new Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i]));
		var dis = plane.distanceToPoint(v0);
		if (areEqualVector(normal, plane.normal) && areEqual(dis, 0.0, 1.0e-6)) {
			equalPoints.push(v0);
		}
	}

	return equalPoints;
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

export function getIntersectTypeLines(l1, l2) {}
export function getIntersectLines(l1, l2) {}
