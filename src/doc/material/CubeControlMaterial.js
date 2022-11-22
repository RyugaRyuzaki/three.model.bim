import { MeshLambertMaterial, MeshBasicMaterial, DoubleSide, MeshPhongMaterial } from "three";
import { LightColor } from "./LightColor";
export const CubeControlMaterial = {
	mainCube: (textTex) => {
		return new MeshBasicMaterial({
			color: "skyblue",
			map: textTex,
		});
	},
	normalCube: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: LightColor.normalCube,
		depthTest: true,
		side: DoubleSide,
	}),
	hoverCube: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: LightColor.hoverCube,
		depthTest: true,
	}),
	textCube: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: LightColor.textCube,
		depthTest: true,
	}),
	ifcMaterial: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: 0xff88ff,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),

	ring: new MeshLambertMaterial({
		transparent: true,
		opacity: 0.5,
		color: LightColor.hoverCube,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
	textRing: new MeshLambertMaterial({
		transparent: true,
		opacity: 1,
		color: LightColor.ring,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
};
