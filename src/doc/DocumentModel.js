import { Scene } from "three";

import { BaseView } from "./view";
import { Tween } from "@tweenjs/tween.js";
import { ModelTypeClass, typeModel, SettingModel, WorkPlane, UnitModel, ExportBimModel } from "./model";
import { highlightModel, pickModel } from "./modeling/selectModel";
import { CustomType } from "./modeling";
import { ViewMaterial } from "./material";

export class DocumentModel {
	models = [];
	materials = [];

	constructor(mainContainer, mainCanvas, cubeContainer, cubeCanvas) {
		this.scene = new Scene();
		this.width = mainContainer.clientWidth;
		this.height = mainContainer.clientHeight;
		this.settingModel = new SettingModel();
		this.view = new BaseView(this.scene, mainContainer, mainCanvas, this.width, this.height, true);
		this.view.initCubeControls(cubeContainer, cubeCanvas);
		this.view.onAnimate();
		this.view.initResize(mainContainer, mainCanvas);
		this.unit = new UnitModel(this.view);
		this.workPlane = new WorkPlane(this.view, this.unit);
		this.extrude = new ModelTypeClass(typeModel.extrude, this.models, this.view, this.unit);
		this.sweep = new ModelTypeClass(typeModel.sweep, this.models, this.view, this.unit);
		this.revolve = new ModelTypeClass(typeModel.revolve, this.models, this.view, this.unit);
		this.grid = new ModelTypeClass(typeModel.grid, this.models, this.view, this.unit);
		this.level = new ModelTypeClass(typeModel.level, this.models, this.view, this.unit);
		this.evenMouseMove();
		this.exportBim = new ExportBimModel();
		this.materials.push(this.initMaterial("Mat1"));
		this.materials.push(this.initMaterial("Mat2"));
		this.materials.push(this.initMaterial("Mat3"));
	}
	addMaterial() {
		this.materials.push(this.initMaterial("New Mat"));
	}
	initMaterial(name) {
		var mat = {
			name: name,
			material: ViewMaterial.createMaterial(true, 1),
			alpha: 255,
			onChangeName: (value) => {
				mat.name = value;
			},

			setColor: () => {
				return "#" + mat.material.color.getHexString();
			},
			onChangeColor: (value) => {
				mat.material.color.set(value);
			},
			onChangeAlpha: (value) => {
				mat.alpha = value;
			},
		};
		return mat;
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
				var models = _this.scene.children.filter((c) => CustomType.isModel(c) || CustomType.isProfile(c));
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
	evenDoubleClick(callback) {
		var _this = this;
		_this.view.domElement.addEventListener(
			"dblclick",
			function (e) {
				if (!_this.view.selectModel) {
					callback(false);
				} else {
					callback(_this.view.selectModel.userData.Type == CustomType.model);
				}
			},
			false
		);
	}
	handleDeleteModel() {
		if (this.view.selectModel) {
			if (this.view.selectModel.userData.OutLine) {
				this.view.selectModel.userData.OutLine.removeFromParent();
			}
			if (this.view.selectModel.userData.Profile) {
				this.view.selectModel.userData.Location.remove(this.scene);
			}
			this.view.selectModel.removeFromParent();
			this.view.selectModel = null;
			this.models.splice(this.models.indexOf(this.view.selectModel), 1);
		}
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
	getModelById(uuid) {
		return this.models.find((c) => c.uuid == uuid);
	}
}
