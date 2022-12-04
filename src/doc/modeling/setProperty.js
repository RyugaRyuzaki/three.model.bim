import { Vector3 } from "three";
import { customMaterial } from "../material";
import { CSS, CustomType, ES } from "./enum";
import { createPoint } from "./Location";

function getElementID() {
	var elementID = window.localStorage.getItem("ElementID");
	if (elementID) {
		elementID = JSON.parse(elementID);
	} else {
		elementID = Math.floor(Math.random() * 1e6 + 1);
	}
	if (elementID > 1e6) elementID = 0;
	elementID++;
	window.localStorage.setItem("ElementID", JSON.stringify(elementID));
	return elementID;
}

export function setDefaultModel(mesh, outLine, profile, meshProfile, material, normalVector, modelGenerate, curvePath) {
	var elementID = getElementID();
	mesh.userData.Type = CustomType.model;
	mesh.userData.OutLine = outLine;
	mesh.userData.isSelected = false;
	mesh.userData.Selection = {
		MaterialModel: material,
		NormalMaterial: material.material,
		onChangeMaterial: (material) => {
			mesh.userData.Selection.MaterialModel = material;
			mesh.userData.Selection.NormalMaterial = material.material;
			mesh.material = mesh.userData.Selection.NormalMaterial;
			mesh.userData.Export.elements.onChangeMaterial(material);
		},
		refresh: () => {
			mesh.material = mesh.userData.isSelected
				? customMaterial.selectModel
				: mesh.userData.Selection.NormalMaterial;
		},
		selected: () => {
			mesh.material = customMaterial.selectModel;
		},
		hover: () => {
			if (!mesh.userData.isSelected) mesh.material = customMaterial.hoverModel;
		},
	};
	mesh.userData.Location = {
		Profile: profile,
		MeshProfile: meshProfile,
		TypeModel: modelGenerate,
		CurvePath: curvePath,
		NormalVector: normalVector,
		Snaps: getSnapPoints(mesh),
		SnapPoint: createPoint(new Vector3(0, 0, 0), CSS.intersect),
	};
	mesh.userData.Export = {
		mesh_id: elementID,
		coordinates: getCoordination(mesh),
		indices: getIndices(mesh),
		elements: {
			mesh_id: elementID,
			vector: {
				x: 0.0,
				y: 0.0,
				z: 0.0,
			},
			rotation: {
				qx: 0.0,
				qy: 0.0,
				qz: 0.0,
				qw: 1.0,
			},
			guid: mesh.uuid,
			type: "default",
			color: {
				r: parseInt(mesh.material.color.r * 255),
				g: parseInt(mesh.material.color.g * 255),
				b: parseInt(mesh.material.color.b * 255),
				a: mesh.userData.Selection.MaterialModel.alpha,
			},
			info: {
				// volume: getVolume(mesh.geometry).toString(),
				// area: getAreaSurface(mesh).toString(),
				length: getBounding(mesh.geometry).length.toString(),
				width: getBounding(mesh.geometry).width.toString(),
				height: getBounding(mesh.geometry).height.toString(),
			},
			onChangeMaterial: (material) => {
				mesh.userData.Export.elements.color = {
					r: parseInt(material.material.color.r * 255),
					g: parseInt(material.material.color.g * 255),
					b: parseInt(material.material.color.b * 255),
					a: material.alpha,
				};
			},
		},
	};
}
function getIndices(mesh) {
	var arrIndex = mesh.geometry.index.array;
	var indices = [];
	for (let i = 0; i < arrIndex.length; i++) {
		indices.push(arrIndex[i]);
	}
	return indices;
}
function getCoordination(mesh) {
	var coords = [];
	var arrIndex = mesh.geometry.index.array;
	var pos0 = mesh.geometry.attributes.position;
	for (let i = 0; i < arrIndex.length; i++) {
		coords.push(pos0.getX(arrIndex[i]));
		coords.push(pos0.getY(arrIndex[i]));
		coords.push(pos0.getZ(arrIndex[i]));
	}
	return coords;
}
function getSnapPoints(mesh) {
	var coords = [];
	var arrIndex = mesh.geometry.index.array;
	var pos0 = mesh.geometry.attributes.position;
	for (let i = 0; i < arrIndex.length; i++) {
		coords.push(new Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i])));
	}
	coords = coords.filter((value, index, self) => self.findIndex((snap) => snap.distanceTo(value) < ES) === index);
	return coords;
}
function getAreaSurface(mesh) {
	var coords = [];
	var arrIndex = mesh.geometry.index.array;
	var pos0 = mesh.geometry.attributes.position;
	for (let i = 0; i < arrIndex.length; i++) {
		coords.push(new Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i])));
	}
	var sum = 0;
	for (let i = 0; i < coords.length / 3; i++) {
		var a = coords[i].distanceTo(coords[i + 1]);
		var b = coords[i + 1].distanceTo(coords[i + 2]);
		var c = coords[i + 2].distanceTo(coords[i]);

		sum += Math.sqrt((a + b + c) * (a + b - c) * (b + c - a) * (c + a - b)) / 4;
	}
	return sum;
}
function getVolume(geometry) {
	let position = geometry.attributes.position;
	let faces = position.count / 3;
	let sum = 0;
	let p1 = new Vector3(),
		p2 = new Vector3(),
		p3 = new Vector3();
	for (let i = 0; i < faces; i++) {
		p1.fromBufferAttribute(position, i * 3 + 0);
		p2.fromBufferAttribute(position, i * 3 + 1);
		p3.fromBufferAttribute(position, i * 3 + 2);
		sum += signedVolumeOfTriangle(p1, p2, p3);
	}
	return sum;
	function signedVolumeOfTriangle(p1, p2, p3) {
		return p1.dot(p2.cross(p3)) / 6.0;
	}
}
function getBounding(geometry) {
	var max = geometry.boundingBox.max;
	var min = geometry.boundingBox.min;
	return {
		length: Math.abs(max.x - min.x),
		width: Math.abs(max.z - min.z),
		height: Math.abs(max.y - min.y),
	};
}
