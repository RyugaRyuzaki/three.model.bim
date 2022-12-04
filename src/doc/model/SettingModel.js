import { getColorRGB, ViewMaterial } from "../material";
import { GUI } from "dat.gui";
import { Plane, Vector3 } from "three";
import { CustomType } from "../modeling";

export class SettingModel {
	constructor() {
		this.opacity = 1;
		this.dimension = false;
	}

	init(documentModel, guiContainer) {
		var view = documentModel.view;
		var scene = documentModel.scene;
		function opacityCustomModel(opacity) {
			var customModel = scene.children.filter((c) => c.userData.CustomModel);
			customModel.forEach((c) => {
				c.material.opacity = opacity;
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
		generalFolder
			.add(view, "showDimension")
			.name("Show Dimension")
			.onChange((value) => {
				view.onShowDimension(value);
			});
	}
}
