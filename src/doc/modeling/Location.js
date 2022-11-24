import { Mesh, SphereGeometry } from "three";
import { customMaterial } from "../material";
import { CustomType, DiaP } from "./enum";
import { getMiddlePoint } from "./snap";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
export class LocationPoint {
	constructor(p) {
		this.p = p;
		this.center = createPoint(this.p);
	}
}
export class LocationLine {
	constructor(pS, pE) {
		this.pS = pS;
		this.pE = pE;
		this.pM = getMiddlePoint(this.pS, this.pE);
		this.start = createPoint(this.pS);
		this.mid = createPoint(this.pM);
		this.end = createPoint(this.pE);
	}
	visibility(parent, visible) {
		this.start.userData.visLabel(visible);
		this.mid.userData.visLabel(visible);
		this.end.userData.visLabel(visible);
		if (visible) {
			parent.add(this.start);
			parent.add(this.mid);
			parent.add(this.end);
		} else {
			this.start.removeFromParent();
			this.mid.removeFromParent();
			this.end.removeFromParent();
		}
	}
	getStartPosition() {
		return this.pS;
	}
	setStartPosition(pS) {
		this.pS = pS;
		this.start.userData.setPosition(pS);
	}
	getMidPosition() {
		return this.pM;
	}
	setMidPosition(pM) {
		this.pM = pM;
		this.mid.userData.setPosition(pM);
	}
	getEndPosition() {
		return this.pE;
	}
	setEndPosition(pE) {
		this.pE = pE;
		this.end.userData.setPosition(pE);
	}
}
export class LocationArc {
	constructor() {}
}
export class BoundingEdge {
	constructor(lines) {
		this.lines = [];
		for (let i = 0; i < lines.length; i++) {
			this.lines.push(new LocationLine(lines[i].pS, lines[i].pE));
		}
	}
	visibility(parent, visible) {
		for (let i = 0; i < this.lines.length; i++) {
			this.lines[i].visibility(parent, visible);
		}
	}
}
SphereGeometry;
function createPoint(p) {
	var div = document.createElement("div");
	div.className = "dot";
	var label = new CSS2DObject(div);
	// label.position.set(p.x, p.y, p.z);
	const geometry = new SphereGeometry(DiaP / 2, 32, 16);
	var point = new Mesh(geometry, customMaterial.pointNormal);
	point.position.set(p.x, p.y, p.z);
	point.userData.Type = CustomType.point;
	point.userData.visLabel = (visible) => {
		if (visible) {
			point.add(label);
		} else {
			point.remove(label);
		}
	};
	point.userData.setPosition = (pS) => {
		point.position.set(pS.x, pS.y, pS.z);
		label.position.set(pS.x, pS.y, pS.z);
	};

	return point;
}
