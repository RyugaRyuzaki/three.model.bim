import { Scene, BufferGeometry, Vector3 } from "three";

import { BaseView } from "./view";
import { Tween } from "@tweenjs/tween.js";
import { SettingModel } from "./model/SettingModel";
import { ModelTypeClass, typeModel } from "./model";
import { highlightModel, pickModel } from "./modify/selectModel";

export class DocumentModel {
	models = [];
	constructor(mainContainer, mainCanvas, cubeContainer, cubeCanvas) {
		this.scene = new Scene();
		this.width = mainContainer.clientWidth;
		this.height = mainContainer.clientHeight;
		this.settingModel = new SettingModel();
		this.view = new BaseView(this.scene, mainContainer, mainCanvas, this.width, this.height, true);
		this.view.initCubeControls(cubeContainer, cubeCanvas);
		this.view.onAnimate();
		this.view.initResize(mainContainer, mainCanvas);
		this.modelFree = new ModelTypeClass(typeModel.free, this.models, this.view);
		this.modelInPlace = new ModelTypeClass(typeModel.inPlace, this.models, this.view);
		this.evenMouseMove();
	}
	evenMouseMove() {
		var _this = this;
		_this.view.domElement.addEventListener(
			"mousemove",
			function (e) {
				highlightModel(e, _this.view);
			},
			false
		);
		_this.view.domElement.addEventListener(
			"click",
			function (e) {
				pickModel(e, _this.view);
			},
			false
		);
		document.addEventListener("keydown", onkeydown, false);

		function onkeydown(e) {
			if (e.keyCode == 81 && _this.view.highlightModel) {
				_this.view.tabKey = !_this.view.tabKey;
			}
		}
	}
}
