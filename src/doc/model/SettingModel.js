import { getColorRGB, ViewMaterial } from "../material";
import { GUI } from "dat.gui";
import { Plane, Vector3 } from "three";

export class SettingModel {
	constructor() {
		this.opacity = 1;
		this.outLine = true;
	}

	init(documentModel, guiContainer) {
		var scene = documentModel.scene;
		function opacityCustomModel(opacity) {
			var customModel = scene.children.filter((c) => c.userData.CustomModel);
			customModel.forEach((c) => {
				c.material.opacity = opacity;
			});
		}
		function visibilityOutline(visible) {
			var outLine = scene.children.filter((c) => c.userData.isOutLine);
			outLine.forEach((c) => {
				c.visible = visible;
			});
		}
		this.gui = new GUI({ autoPlace: false });
		guiContainer.appendChild(this.gui.domElement);
		const generalFolder = this.gui.addFolder("General");
		generalFolder.open();
		var _this = this;
		generalFolder
			.add(_this, "opacity", 0, 1)
			.name("Opacity Model")
			.onChange((value) => {
				opacityCustomModel(value);
			});
		// generalFolder
		// 	.add(_this, "outLine")
		// 	.name("Visibility Outline")
		// 	.onChange((value) => {
		// 		visibilityOutline(value);
		// 	});
	}
}
