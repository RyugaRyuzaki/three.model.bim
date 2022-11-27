import { Scene } from "three";

import { BaseView } from "./view";
import { Tween } from "@tweenjs/tween.js";
import { ModelTypeClass, typeModel, SettingModel, WorkPlane, drawList } from "./model";
import { highlightModel, pickModel } from "./modeling/selectModel";
import { CustomType } from "./modeling";

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
		this.workPlane = new WorkPlane(this.view);
		this.extrude = new ModelTypeClass(typeModel.extrude, this.models, this.view);
		this.sweep = new ModelTypeClass(typeModel.sweep, this.models, this.view);
		this.revolve = new ModelTypeClass(typeModel.revolve, this.models, this.view);
		this.grid = new ModelTypeClass(typeModel.grid, this.models, this.view);
		this.level = new ModelTypeClass(typeModel.level, this.models, this.view);
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
	}
	evenMouseDown(callback) {
		var _this = this;
		_this.view.domElement.addEventListener(
			"mousedown",
			function (e) {
				var showMR = false;
				var showAll = false;
				var models = _this.scene.children.filter((c) => c.userData.Type == CustomType.model);
				if (e.which == 3) {
					if (models.length == 0) {
						showMR = false;
						showAll = false;
					} else {
						showMR = true;
						showAll = _this.view.selectModel == null;
					}
					callback(showMR, { top: e.clientY, left: e.clientX, showAll: showAll });
				}
			},
			false
		);
	}
	evenClick(callback) {
		var _this = this;
		_this.view.domElement.addEventListener(
			"click",
			function (e) {
				pickModel(e, _this.view);
				callback(_this.view.selectModel);
			},
			false
		);
	}
	handleDeleteModel() {
		if (this.view.selectModel.userData.OutLine) {
			this.view.selectModel.userData.OutLine.removeFromParent();
		}
		this.view.selectModel.removeFromParent();
		this.view.selectModel = null;
	}
	handleHideModel() {
		if (this.view.selectModel) {
			if (this.view.selectModel.userData.OutLine) {
				this.view.selectModel.userData.OutLine.visible = false;
			}
			this.view.selectModel.visible = false;
			this.view.selectModel = null;
		}
	}
	handleShowAllModel() {
		this.scene.children.forEach((c) => {
			if (c.userData.Type == CustomType.model) {
				if (c.userData.OutLine) {
					c.userData.OutLine.visible = true;
				}
				c.visible = true;
			}
		});
	}
}
