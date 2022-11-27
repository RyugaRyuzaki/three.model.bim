import { drawRect, drawExtrude, drawPolyGon, LocationLine, CustomType, extrudeProfile, drawLine } from "../modeling";

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
};
export class ModelTypeClass {
	constructor(type, models, view) {
		this.view = view;
		this.type = type;
		this.models = models;
	}
	dispose() {
		var _this = this;
		_this.view.scene.children.forEach((c) => {
			if (c.userData.Type == CustomType.line) {
				c.userData.Selection.isSelect(_this.view.scene, false);
			}
		});
	}
	createProfileRect(btn, workPlane, callback) {
		var _this = this;
		drawRect(_this.view, btn, workPlane, () => {
			callback();
		});
	}
	createProfileLine(btn, workPlane, callback) {
		var _this = this;
		drawLine(_this.view, btn, workPlane, () => {
			callback();
		});
	}

	canCreateProfile(callback) {
		var profile = this.view.scene.children.filter((c) => c.userData.Type == CustomType.line);
		if (profile.length <= 2) {
			callback(null);
			return;
		}
		callback(LocationLine.canCreateProfile());
	}

	createExtrude(profile, deepExtrude, plane) {
		var points = [];
		var offsetPs = [];
		for (let i = 0; i < profile.length; i++) {
			points.push(profile[i].userData.Start);
			offsetPs.push(profile[i].userData.Start.clone().add(plane.normal.clone().multiplyScalar(deepExtrude)));
			profile[i].removeFromParent();
		}
		var extrude = extrudeProfile(points, offsetPs, profile, plane.normal, this.view.scene);
	}
}
