import { customMaterial } from "../material";
import { CustomType } from "./enum";
import { BoundingEdge } from "./Location";

function getElementID() {
	var elementID = window.localStorage.getItem("ElementID");
	if (elementID) {
		elementID = JSON.parse(elementID);
	} else {
		elementID = Math.floor(Math.random() * 1000000 + 1);
	}
	elementID++;
	window.localStorage.setItem("ElementID", JSON.stringify(elementID));
	return elementID;
}
export function setPropertyRectangle(mesh, outLine) {
	mesh.userData.Type = CustomType.model;
	mesh.userData.IsSelect = false;
	mesh.userData.Hover = customMaterial.hoverModel;
	mesh.userData.Normal = customMaterial.normalModel;
	mesh.userData.Select = customMaterial.selectModel;
	mesh.userData.isExtrude = false;
	mesh.userData.OutLine = outLine;
	mesh.userData.Edges = [];
	mesh.renderOrder = getElementID();
}
export function setPropertyPolyGon(mesh, outLine) {
	mesh.userData.Type = CustomType.model;
	mesh.userData.IsSelect = false;
	mesh.userData.Hover = customMaterial.hoverModel;
	mesh.userData.Normal = customMaterial.normalModel;
	mesh.userData.Select = customMaterial.selectModel;
	mesh.userData.isExtrude = false;
	mesh.userData.OutLine = outLine;
	mesh.userData.Edges = [];
	mesh.renderOrder = getElementID();
}
export function setDefaultEdgesRectangle(mesh, v1, v2, v3, v4) {}
export function setDefaultModel(mesh, outLine, profile, normalVector) {
	mesh.userData.Type = CustomType.model;
	mesh.userData.OutLine = outLine;
	mesh.userData.HasProfile = profile;
	mesh.userData.CurvePath = false;
	mesh.userData.NormalVector = normalVector;
	mesh.userData.isSelected = false;
	mesh.userData.Selection = {
		refresh: () => {
			mesh.material = mesh.userData.isSelected ? customMaterial.selectModel : customMaterial.normalModel;
		},
		selected: () => {
			mesh.material = customMaterial.selectModel;
		},
		hover: () => {
			if (!mesh.userData.isSelected) mesh.material = customMaterial.hoverModel;
		},
	};
}
