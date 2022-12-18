import { BufferGeometry, EdgesGeometry, LineSegments, Mesh, Vector3 } from "three";
import { MeshBVH } from "three-mesh-bvh";
import { customMaterial } from "../material";
import { typeModel } from "../model";
import { setDefaultModel } from "../utils";

export function meshProfile(points, scene) {
	var geometry = new BufferGeometry().setFromPoints(getMeshPoints(points));
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
export function extrudeProfile(points, offsetPs, profile, meshProfile, material, normalVector, scene) {
	var geometry = new BufferGeometry().setFromPoints(getExtrudePoints(points, offsetPs));
	var mesh = new Mesh(geometry, material.material);
	const edges = new EdgesGeometry(geometry);
	const line = new LineSegments(edges, customMaterial.normalLine);
	mesh.geometry.computeBoundingBox();
	mesh.geometry.computeBoundingSphere();
	mesh.geometry.computeVertexNormals();
	mesh.geometry.boundsTree = new MeshBVH(mesh.geometry);
	scene.add(line);
	scene.add(mesh);
	setDefaultModel(mesh, line, profile, meshProfile, material, normalVector, typeModel.extrude, null);
	return mesh;
}
function getMeshPoints(points) {
	var ps = [];
	for (let i = 0; i < points.length - 2; i++) {
		ps.push(points[0]);
		ps.push(points[i + 1]);
		ps.push(points[i + 2]);
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
