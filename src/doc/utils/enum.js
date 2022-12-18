import { Shape } from "three";

export const MAX_POINTS = 10000;
export const MAX_CIRCLE = 48;
export const MIN_DIS = 0.1;
export const ES = 1.0e-6;
export const DiaP = 0.01;
export const LINE_WIDTH = 0.008;
export const DIM_WIDTH = 0.001;
export const SNAP = 0.1;
export const SNAP_ANGLE = Math.PI / 12;
export const OFFSET_DIM = 0.1;
export const EXTEND_DIM = 0.01;

export function initShape() {
	return new Shape()
		.moveTo(0, LINE_WIDTH)
		.quadraticCurveTo(LINE_WIDTH, LINE_WIDTH, LINE_WIDTH, 0)
		.quadraticCurveTo(LINE_WIDTH, -LINE_WIDTH, 0, -LINE_WIDTH)
		.quadraticCurveTo(-LINE_WIDTH, -LINE_WIDTH, -LINE_WIDTH, 0)
		.quadraticCurveTo(-LINE_WIDTH, LINE_WIDTH, 0, LINE_WIDTH);
}
export const extrudeSetting = (curve) => {
	return {
		extrudePath: curve,
		steps: curve.getPoints().length,
	};
};
export const CSS = {
	intersect: "intersect",
	dot: "dot",
	middle: "intersect",
	endPoint: "endPoint",
};

export const CATEGORY = {
	buildingProxy: 0,
	slab: 1,
	wall: 2,
	beam: 3,
	column: 4,
};
export const CustomType = {
	point: 0,
	line: 1,
	arc: 2,
	model: 3,
	filter: (mesh, type) => {
		if (!mesh || !mesh.userData.Type) return false;
		return mesh.userData.Type == type;
	},
	isPoint: (mesh) => {
		return CustomType.filter(mesh, CustomType.point);
	},
	isLine: (mesh) => {
		return CustomType.filter(mesh, CustomType.line);
	},
	isArc: (mesh) => {
		return CustomType.filter(mesh, CustomType.arc);
	},
	isModel: (mesh) => {
		return CustomType.filter(mesh, CustomType.model);
	},
	isProfile: (mesh) => {
		return mesh.userData.Profile;
	},
};
export const INTERSECT_TYPE = {
	dispose: "DISPOSE",
	equal: "EQUAL",
	parallel: "PARALLEL",
	intersect: "INTERSECT",
};
