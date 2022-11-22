import { MeshLambertMaterial, LineBasicMaterial, DoubleSide, LineDashedMaterial } from "three";
export const dimMaterial = {
	outLine: new LineBasicMaterial({
		color: 0x737170,
		linewidth: 10,
	}),
	dim: new LineBasicMaterial({
		color: "black",
		linewidth: 10,
	}),
	tag: new LineBasicMaterial({
		color: "black",
		linewidth: 10,
	}),
	cloud: new LineBasicMaterial({
		color: "red",
		linewidth: 10,
	}),
	hoverTag: new LineBasicMaterial({
		color: "red",
		linewidth: 10,
	}),
	selectTag: new LineBasicMaterial({
		color: 0xff88ff,
		linewidth: 10,
	}),

	tagSize: {
		r: 0.2,
		t: 1,
		l: 4,
		h: 0.2,
		tolerance: 0.01,
		angleSnap: Math.PI / (2 * 18),
		minRadius: 0.4,
		minExtend: 1.2,
	},
	tagText: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: 0xff88ff,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
	extendText: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: "green",
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
	point: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: "black",
		depthTest: true,
		depthWrite: true,
	}),
	clippingPlane: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: "black",
		depthTest: true,
		depthWrite: true,
	}),
	dotSnap: new LineDashedMaterial({
		color: "green",
		linewidth: 1,
		scale: 1,
		dashSize: 0.2,
		gapSize: 0.1,
	}),
	tagTemp: new LineDashedMaterial({
		color: "black",
		linewidth: 1,
		scale: 1,
		dashSize: 0.04,
		gapSize: 0.02,
	}),
};
