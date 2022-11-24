import { Plane, Vector3 } from "three";

export class WorkPlane {
	constructor(view) {
		this.view = view;
	}
	initWorkPlane() {
		this.origin = new Vector3(0, 0, 0);
		this.plane = new Plane(new Vector3(0, 1, 0), 0);
		this.width = 50;
	}
	setDefault() {}
	setWorkPlane() {}
}
