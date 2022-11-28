import {
	drawRect,
	drawExtrude,
	drawPolyGon,
	LocationLine,
	CustomType,
	extrudeProfile,
	drawLine,
	drawMultiLine,
} from "../modeling";

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
	constructor(type, models, view, unit) {
		this.view = view;
		this.type = type;
		this.models = models;
		this.unit = unit;
	}
	dispose() {
		var _this = this;
		var profile = this.view.scene.children.filter((c) => c.userData.Profile);
		profile.forEach((c) => {
			c.userData.Location.remove(_this.view.scene);
			c.removeFromParent();
		});
	}
	createProfileRect(btn, workPlane, callback) {
		var _this = this;
		drawRect(_this.view, _this.unit, btn, workPlane, () => {
			callback();
		});
	}
	createProfileLine(btn, workPlane, callback) {
		var _this = this;
		drawLine(_this.view, _this.unit, btn, workPlane, () => {
			callback();
		});
	}
	createProfileMultiLine(btn, workPlane, callback) {
		var _this = this;
		drawMultiLine(_this.view, _this.unit, btn, workPlane, () => {
			callback();
		});
	}

	canCreateProfile(callback) {
		var profile = this.view.scene.children.filter((c) => c.userData.Profile);
		if (profile.length <= 2) {
			callback(null);
			return;
		}
		callback(profile);
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
