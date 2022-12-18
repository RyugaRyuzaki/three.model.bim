import {
	drawRect,
	drawCircle,
	drawArc,
	drawLine,
	drawMultiLine,
	drawPolygon,
	extrudeProfile,
	copyElement,
	meshProfile,
} from "../modeling";
import { Tween } from "@tweenjs/tween.js";
import { ProfileModel } from "./../utils";

export const typeModel = {
	extrude: 1,
	sweep: 2,
	revolve: 3,
	grid: 4,
	level: 5,
};

export const drawList = {
	none: 0,
	rect: 1,
	circle: 2,
	arc: 3,
	line: 4,
	multiLine: 5,
	polygon: 6,
	align: 7,
	copy: 8,
	trim: 9,
	extend: 10,
	workPlane: 11,
};
export class ModelTypeClass {
	listProfile = [];
	listPointProfile = [];
	meshProfile;
	constructor(type, models, view, unit) {
		this.view = view;
		this.type = type;
		this.models = models;
		this.unit = unit;
	}
	dispose() {
		var _this = this;
		_this.listProfile.forEach((c) => {
			c.userData.Location.remove(_this.view.scene);
			c.removeFromParent();
		});
		_this.listProfile = [];
	}
	disposeMeshProfile() {
		if (this.meshProfile) {
			this.listPointProfile = [];
			if (this.meshProfile.userData.OutLine) this.meshProfile.userData.OutLine.removeFromParent();
			this.meshProfile.removeFromParent();
			this.meshProfile = null;
		}
	}
	showProfile(profile) {
		this.listProfile = profile;
		for (let i = 0; i < profile.length; i++) {
			this.view.scene.add(profile[i]);
		}
		this.disposeMeshProfile();
	}
	createProfileRect(btn, workPlane, callback) {
		var _this = this;
		drawRect(_this.view, _this.unit, btn, workPlane, (list) => {
			_this.listProfile = _this.listProfile.concat(list);
			callback();
		});
	}
	createProfileCircle(btn, workPlane, callback) {
		var _this = this;
		drawCircle(_this.view, _this.unit, btn, workPlane, (list) => {
			_this.listProfile = _this.listProfile.concat(list);
			callback();
		});
	}
	createProfileArc(btn, workPlane, callback) {
		var _this = this;
		drawArc(_this.view, _this.unit, btn, workPlane, (list) => {
			_this.listProfile = _this.listProfile.concat(list);
			callback();
		});
	}
	createProfileLine(btn, workPlane, callback) {
		var _this = this;
		drawLine(_this.view, _this.unit, btn, workPlane, (list) => {
			_this.listProfile = _this.listProfile.concat(list);
			callback();
		});
	}
	createProfileMultiLine(btn, workPlane, callback) {
		var _this = this;
		drawMultiLine(_this.view, _this.unit, btn, workPlane, (list) => {
			_this.listProfile = _this.listProfile.concat(list);
			callback();
		});
	}
	createProfilePolygon(btn, workPlane, callback) {
		var _this = this;
		drawPolygon(_this.view, _this.unit, btn, workPlane, (list) => {
			_this.listProfile = _this.listProfile.concat(list);
			callback();
		});
	}

	canCreateProfile(callback) {
		var _this = this;
		_this.listPointProfile = [];
		_this.meshProfile = null;
		ProfileModel.conditionBound(_this.listProfile, (data) => {
			if (!data.result) {
				if (data.elements) {
					var pos0 = _this.view.controls.target;
					var pos1 = data.elements.userData.Location.Start.position;
					const tween = new Tween({ pos: pos0 }).to({ pos: pos1 }, 500).onUpdate((coords) => {
						_this.view.controls.target = coords.pos;
					});
					tween.start();
				}
				callback(data.result, null, "Profile is not continue");
			} else {
				_this.listPointProfile = ProfileModel.getListPointsProfile(_this.listProfile);
				//clockwise
				_this.listPointProfile = ProfileModel.getClockWiseListPoints(_this.listPointProfile);
				if (!ProfileModel.provePolygon(_this.listPointProfile)) {
					_this.listPointProfile = [];
					callback(false, null, "Profile is not Polygon");
				} else {
					_this.meshProfile = meshProfile(_this.listPointProfile, _this.view.scene);
					callback(
						data.result,
						{
							listPointProfile: _this.listPointProfile,
							listProfile: _this.listProfile,
							meshProfile: _this.meshProfile,
						},
						"OK"
					);
				}
				// polygon
			}
		});
	}

	createExtrude(profile, deepExtrude, plane, material) {
		this.models.push(extrudeProfile(profile, deepExtrude, plane, material, this.view.scene));
		this.dispose();
		this.disposeMeshProfile();
		console.log(this.view.scene.children);
	}

	static modifyCopyElement(btn, view, callback) {
		copyElement(view, btn, () => {
			callback();
		});
	}
}
