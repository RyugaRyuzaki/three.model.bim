import { BufferGeometry, ExtrudeGeometry, LineCurve3, Mesh, Shape, SphereGeometry, Vector3 } from "three";
import { customMaterial } from "../material";
import { CSS, CustomType, DiaP, extrudeSetting, LINE_WIDTH, SNAP, SNAP_ANGLE } from "./enum";
import { getMiddlePoint, areEqualVector, areEqual } from "./snap";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { MeshBVH } from "three-mesh-bvh";

export class LocationPoint {
	constructor(p) {
		this.p = p;
		this.center = createPoint(this.p, CSS.intersect);
	}
	visibility(parent, visible, p) {
		this.center.userData.visLabel(visible);
		if (visible) {
			this.center.userData.setPosition(p);
			parent.add(this.center);
		} else {
			this.center.removeFromParent();
		}
	}
}

export class LocationLine {
	static initLine(view, factor, pS, pE, normal, line) {
		line.userData.Type = CustomType.line;
		line.userData.Location = {
			Direction: new Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize(),
			Start: createPoint(pS, CSS.endPoint),
			Mid: createPoint(getMiddlePoint(pS, pE), CSS.middle),
			End: createPoint(pE, CSS.endPoint),
			InterSect: createPoint(getMiddlePoint(pS, pE), CSS.intersect),
			Normal: normal,
			Dimension: createDimension(view, factor, line, getMiddlePoint(pS, pE), pS, pE),
			onChange: (pS, pE) => {
				line.userData.Location.Start.userData.setPosition(pS);
				line.userData.Location.Mid.userData.setPosition(getMiddlePoint(pS, pE));
				line.userData.Location.End.userData.setPosition(pE);
				LocationLine.updateTempLine(pS, pE, line);
			},
			remove: (scene) => {
				line.userData.Location.Start.userData.visibility(scene, false);
				line.userData.Location.End.userData.visibility(scene, false);
				line.userData.Location.Mid.userData.visibility(scene, false);
				line.userData.Location.InterSect.userData.visibility(scene, false);
				line.userData.Location.Dimension.userData.visLabel(scene, false);
			},
		};

		line.userData.Selection = {
			snapPoint: (p) => {
				var snap;

				if (p.distanceTo(line.userData.Location.Start.position) <= SNAP) snap = line.userData.Location.Start;
				if (p.distanceTo(line.userData.Location.Mid.position) <= SNAP) snap = line.userData.Location.Mid;
				if (p.distanceTo(line.userData.Location.End.position) <= SNAP) snap = line.userData.Location.End;

				return snap;
			},
			visibilitySnap: (scene, p) => {
				var snap = line.userData.Selection.snapPoint(p);
				if (snap) {
					snap.userData.visibility(scene, true);
				} else {
					line.userData.Location.Start.userData.visibility(scene, false);
					line.userData.Location.Mid.userData.visibility(scene, false);
					line.userData.Location.End.userData.visibility(scene, false);
				}
				return snap?.position;
			},
			isSelect: (scene, visible) => {
				line.userData.Location.Start.userData.visibility(scene, visible);
				line.userData.Location.Mid.userData.visibility(scene, visible);
				line.userData.Location.End.userData.visibility(scene, visible);

				line.material = visible ? line.userData.Material.Select : line.userData.Material.Normal;
			},
		};
	}
	static createTempLine(pS, pE) {
		var geometry = LocationLine.initGeometryLine(pS, pE);
		const line = new Mesh(geometry, customMaterial.normalLine);
		line.geometry.computeBoundingBox();
		line.geometry.computeBoundingSphere();
		line.geometry.computeVertexNormals();
		line.geometry.boundsTree = new MeshBVH(line.geometry);
		line.renderOrder = 1;
		line.userData.Profile = true;
		line.userData.Material = {
			Normal: customMaterial.normalLine,
			Select: customMaterial.selectLine,
			Hover: customMaterial.hoverLine,
		};

		return line;
	}

	static updateTempLine(pS, pE, line) {
		line.geometry = LocationLine.initGeometryLine(pS, pE);
		line.geometry.computeBoundingBox();
		line.geometry.computeBoundingSphere();
		line.geometry.computeVertexNormals();
		line.geometry.boundsTree = new MeshBVH(line.geometry);
	}
	static canCreateProfile(lines) {
		for (let i = 0; i < lines.length; i++) {
			if (!lines[i].userData.Type) return false;
			if (i === lines.length - 1) {
				if (
					!(
						areEqualVector(
							lines[i].userData.Location.End.position,
							lines[0].userData.Location.Start.position
						) ||
						areEqualVector(
							lines[i].userData.Location.Start.position,
							lines[0].userData.Location.End.position
						)
					)
				)
					return false;
			} else {
				if (
					!(
						areEqualVector(
							lines[i].userData.Location.End.position,
							lines[i + 1].userData.Location.Start.position
						) ||
						areEqualVector(
							lines[i].userData.Location.Start.position,
							lines[i + 1].userData.Location.End.position
						)
					)
				)
					return false;
			}
		}
		return true;
	}
	static initShape() {
		return new Shape()
			.moveTo(0, LINE_WIDTH)
			.quadraticCurveTo(LINE_WIDTH, LINE_WIDTH, LINE_WIDTH, 0)
			.quadraticCurveTo(LINE_WIDTH, -LINE_WIDTH, 0, -LINE_WIDTH)
			.quadraticCurveTo(-LINE_WIDTH, -LINE_WIDTH, -LINE_WIDTH, 0)
			.quadraticCurveTo(-LINE_WIDTH, LINE_WIDTH, 0, LINE_WIDTH);
	}
	static initGeometryLine(pS, pE) {
		var curve = new LineCurve3(pS, pE);
		var shape = LocationLine.initShape();
		return new ExtrudeGeometry(shape, extrudeSetting(curve));
	}
}

export class LocationArc {
	constructor() {}
}
export class Profile {
	constructor() {}
}
function initPerVectors(pS, pE, normal) {
	var dir = new Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize();
	var p = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
	return { p: p, np: p.clone().negate() };
}
export function createPoint(p, css) {
	var div = document.createElement("div");
	div.className = css;
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
	};
	point.userData.visibility = (scene, visible) => {
		point.userData.visLabel(visible);
		if (visible) {
			scene.add(point);
		} else {
			point.removeFromParent();
		}
	};

	return point;
}
export function createDimension(view, factor, line, p, p1, p2) {
	var input = document.createElement("input");
	input.className = "dimension";
	input.value = Math.round(p1.distanceTo(p2) * 1000) / 1000;
	input.addEventListener(
		"change",
		function (e) {
			onChangeDimension(e, factor);
		},
		false
	);
	var label = new CSS2DObject(input);
	label.position.set(p.x, p.y, p.z);
	label.userData.visLabel = (line, visible) => {
		if (visible) {
			line.add(label);
		} else {
			label.removeFromParent();
		}
	};
	label.userData.onChangeLabel = (factor) => {
		input.value = input.value * (factor == 1.0 ? 0.001 : 1000);
		input.addEventListener(
			"change",
			function (e) {
				onChangeDimension(e, factor);
			},
			false
		);
	};
	label.userData.visLabel(line, view.showDimension);
	function onChangeDimension(e, factor) {
		if (isNaN(parseFloat(e.target.value * 1.0))) return;
		if (line.userData.Location) {
			var dim = parseFloat(e.target.value * 1.0 * factor);
			var pS = line.userData.Location.Start.position;
			var dir = line.userData.Location.Direction;
			var pE = pS.clone().add(dir.clone().multiplyScalar(dim));
			var pM = getMiddlePoint(pS, pE);
			line.userData.Location.onChange(pS, pE);
			label.position.set(pM.x, pM.y, pM.z);
		}
	}
	return label;
}
