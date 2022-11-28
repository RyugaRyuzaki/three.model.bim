export class UnitModel {
	constructor(view) {
		this.view = view;
		this.mm = "mm";
		this.m = "m";
		this.factor = 1.0;
		this.label = "m";
	}
	onChange(value) {
		this.factor = value == this.m ? 1.0 : 0.001;
		this.label = value;
		this.view.onChangeDimensionLabel(this.factor);
	}
}
