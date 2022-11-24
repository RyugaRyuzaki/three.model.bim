import { drawRect, drawExtrude, drawPolyGon } from "../modeling";

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
	poly: 2,
	circle: 3,
	arc: 4,
	line: 5,
};
export class ModelTypeClass {
	current;
	canCreate = false;
	constructor(type, models, view) {
		this.view = view;
		this.type = type;
		this.models = models;
	}
	dispose() {
		if (this.current) {
			this.current.removeFromParent();
			this.current.userData.OutLine.removeFromParent();
		}
		this.current = null;
		this.canCreate = false;
	}
	drawFreeRect(btn, callback) {
		var _this = this;
		drawRect(_this.view, btn, (model) => {
			_this.current = model;
			callback();
		});
	}
	drawFreePoly(btn, callback) {
		var _this = this;
		drawPolyGon(_this.view, btn, (model) => {
			callback();
		});
	}
	drawFreeExtrude(btn, callback) {
		var _this = this;
		drawExtrude(_this.view, btn, (model) => {
			console.log(model);
			callback();
		});
	}
	finish(callback) {
		if (!this.canCreate) {
			if (confirm("Can not create a model" + "\n" + "Do you to continue?")) {
				callback(this.canCreate);
			} else {
				this.dispose();
				callback(true);
			}
		}
	}
	cancel() {
		this.dispose();
	}
}
