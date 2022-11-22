import { MeshLambertMaterial, MeshBasicMaterial, Color, MeshPhongMaterial, LineBasicMaterial, DoubleSide } from "three";
import { LightColor } from "./LightColor";

export const PlaneModelMaterial = {
	normalPlane: new MeshBasicMaterial({
		transparent: true,
		opacity: 0.5,
		color: LightColor.sectionBoxPlan,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
	hoverPlane: new MeshBasicMaterial({
		transparent: true,
		opacity: 1,
		color: LightColor.normalCube,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),

	outLine: new LineBasicMaterial({
		color: new Color("rgb(255, 0, 0)"),
		opacity: 0.5,
		linewidth: 5,
		linecap: "round",
		linejoin: "round",
	}),

	hoverOutLine: new LineBasicMaterial({
		color: new Color("rgb(255, 0, 0)"),
		opacity: 1,
		linewidth: 1,
		linecap: "round",
		linejoin: "round",
	}),
	control: new MeshLambertMaterial({
		transparent: true,
		opacity: 0.5,
		color: LightColor.textCube,
		side: DoubleSide,
		depthTest: true,
		depthWrite: true,
	}),
	hoverControl: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: LightColor.textCube,
		side: DoubleSide,
		depthTest: true,
		depthWrite: true,
	}),
	hover: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: LightColor.textCube,
		side: DoubleSide,
		depthTest: true,
		depthWrite: true,
	}),
};
