import {
	BufferGeometry,
	CurvePath,
	EdgesGeometry,
	ExtrudeGeometry,
	LineCurve3,
	LineSegments,
	Mesh,
	Shape,
	Vector3,
} from "three";
import { MeshBVH } from "three-mesh-bvh";
import { customMaterial } from "../material";
import { typeModel } from "../model";
import { ProfileModel, extrudeSetting, getLocalVectorOnFace, setDefaultModel } from "../utils";
import { getDirection2Point } from "../utils/ProfileModel/InterSectCurve";

export function meshProfile(points, scene) {
	var center = ProfileModel.getCenterOfListPoints(points);
	var geometry = new BufferGeometry().setFromPoints(getMeshPoints(points, center));
	var mesh = new Mesh(geometry, customMaterial.normalModel);
	const edges = new EdgesGeometry(geometry);
	const line = new LineSegments(edges, customMaterial.normalLine);
	mesh.geometry.computeBoundingBox();
	mesh.geometry.computeBoundingSphere();
	mesh.geometry.computeVertexNormals();
	mesh.geometry.boundsTree = new MeshBVH(mesh.geometry);
	scene.add(line);
	mesh.userData.OutLine = line;
	scene.add(mesh);
	return mesh;
}

export function extrudeProfile(profile, deepExtrude, plane, material, scene) {
	const { listPointProfile, listProfile, meshProfile } = profile;
	var center = ProfileModel.getCenterOfListPoints(listPointProfile);
	var deepPoint = center.clone().add(plane.normal.clone().multiplyScalar(deepExtrude));
	var curvePath = new CurvePath();
	curvePath.add(new LineCurve3(center, deepPoint));
	var shape = createShapeFromProfile(listPointProfile, center, plane);
	var geometry = new ExtrudeGeometry(shape, extrudeSetting(curvePath));
	var mesh = new Mesh(geometry, material);
	scene.add(mesh);
	return mesh;
}
function createShapeFromProfile(listPointProfile, center, plane) {
	var listLineShape = [];
	var local = getLocalVectorOnFace(plane.normal);
	for (let i = 0; i < listPointProfile.length; i++) {
		var point = listPointProfile[i];
		var dis = point.distanceTo(center);
		var dir = getDirection2Point(center, point);
		var y = dis * Math.cos(dir.angleTo(local.z));
		var x = dis * Math.cos(dir.angleTo(local.x));
		listLineShape.push({ x: x, y: y });
	}
	var shape = new Shape();
	for (let i = 0; i < listLineShape.length; i++) {
		if (i == 0) {
			shape.moveTo(listLineShape[0].x, listLineShape[0].y);
		} else {
			if (i == listLineShape.length - 1) {
				shape.lineTo(listLineShape[i].x, listLineShape[i].y);
				shape.lineTo(listLineShape[0].x, listLineShape[0].y);
			} else {
				shape.lineTo(listLineShape[i].x, listLineShape[i].y);
			}
		}
	}
	return shape;
}
function getMeshPoints(points, center) {
	var ps = [];
	for (let i = 0; i < points.length; i++) {
		if (i == points.length - 1) {
			ps.push(center);
			ps.push(points[i]);
			ps.push(points[0]);
		} else {
			ps.push(center);
			ps.push(points[i]);
			ps.push(points[i + 1]);
		}
	}
	return ps;
}
function getExtrudePoints(points, offsetPs) {
	var ps = [];
	for (let i = 0; i < points.length - 2; i++) {
		ps.push(points[0]);
		ps.push(points[i + 1]);
		ps.push(points[i + 2]);
	}

	for (let i = 0; i < offsetPs.length - 2; i++) {
		ps.push(offsetPs[0]);
		ps.push(offsetPs[i + 1]);
		ps.push(offsetPs[i + 2]);
	}
	for (let i = 0; i < points.length; i++) {
		if (i == points.length - 1) {
			ps.push(points[i]);
			ps.push(points[0]);
			ps.push(offsetPs[0]);
			ps.push(points[i]);
			ps.push(offsetPs[0]);
			ps.push(offsetPs[i]);
		} else {
			ps.push(points[i]);
			ps.push(points[i + 1]);
			ps.push(offsetPs[i + 1]);
			ps.push(points[i]);
			ps.push(offsetPs[i + 1]);
			ps.push(offsetPs[i]);
		}
	}
	return ps;
}
