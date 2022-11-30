import {
	BufferGeometry,
	CurvePath,
	EdgesGeometry,
	ExtrudeGeometry,
	LineCurve3,
	LineSegments,
	Mesh,
	SphereGeometry,
	Vector3,
} from "three";
import { customMaterial } from "../material";
import {
	CSS,
	CustomType,
	DiaP,
	EXTEND_DIM,
	extrudeSetting,
	initShape,
	LINE_WIDTH,
	MAX_CIRCLE,
	OFFSET_DIM,
	SNAP,
} from "./enum";
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
			Curves: new LineCurve3(pS, pE),
			Dimension: createDimension(view, factor, line, getMiddlePoint(pS, pE), pS, pE, normal),
			onChange: (pS, pE) => {
				line.userData.Location.Start.userData.setPosition(pS);
				line.userData.Location.Mid.userData.setPosition(getMiddlePoint(pS, pE));
				line.userData.Location.End.userData.setPosition(pE);
				line.userData.Location.End.userData.setPosition(pE);
				line.userData.Location.Curves = new LineCurve3(pS, pE);
				LocationLine.updateTempLine(pS, pE, line);
				line.userData.Location.Dimension.userData.onChange(pS, pE, line.userData.Location.Normal);
			},
			remove: (scene) => {
				line.userData.Location.Start.userData.visibility(scene, false);
				line.userData.Location.End.userData.visibility(scene, false);
				line.userData.Location.Mid.userData.visibility(scene, false);
				line.userData.Location.InterSect.userData.visibility(scene, false);
				line.userData.Location.Dimension.userData.visibility(scene, false);
			},
			isConnectStart: (sameNormals) => {
				var dif = [...sameNormals];
				dif.splice(dif.indexOf(line), 1);
				if (dif.length == sameNormals.length) return false;
				var connectStart = [];
				for (let j = 0; j < dif.length; j++) {
					var disStart1 = line.userData.Location.Start.position.distanceTo(
						dif[j].userData.Location.Start.position
					);
					var disStart2 = line.userData.Location.Start.position.distanceTo(
						dif[j].userData.Location.End.position
					);
					console.log(disStart1);
					console.log(disStart2);
					if (areEqual(disStart1, 0.0, 1e-6) || areEqual(disStart2, 0.0, 1e-6)) {
						connectStart.push(dif[j]);
					}
				}
				return connectStart.length == 1;
			},
			isConnectEnd: (sameNormals) => {
				var dif = [...sameNormals];
				dif.splice(dif.indexOf(line), 1);
				if (dif.length == sameNormals.length) return false;
				var connectEnd = [];
				for (let j = 0; j < dif.length; j++) {
					var disEnd1 = line.userData.Location.End.position.distanceTo(
						dif[j].userData.Location.Start.position
					);
					var disEnd2 = line.userData.Location.End.position.distanceTo(dif[j].userData.Location.End.position);
					if (areEqual(disEnd1, 0.0, 1e-6) || areEqual(disEnd2, 0.0, 1e-6)) {
						connectEnd.push(dif[j]);
					}
				}
				return connectEnd.length == 1;
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
				return snap ? snap.position : p;
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

	static initGeometryLine(pS, pE) {
		var curve = new LineCurve3(pS, pE);
		var shape = initShape();
		return new ExtrudeGeometry(shape, extrudeSetting(curve));
	}
}

export class LocationArc {
	static initArc(view, factor, pS, pE, normal, arc) {
		var dir = new Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize();
		var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
		var p1 = pS.clone().add(per.clone().multiplyScalar(pS.distanceTo(pE)));
		arc.userData.Type = CustomType.arc;
		arc.userData.Location = {
			Direction: dir,
			Start: createPoint(pE, CSS.endPoint),
			Center: createPoint(pS, CSS.dot),
			End: createPoint(pS.clone().add(dir.clone().multiplyScalar(-pS.distanceTo(pE))), CSS.endPoint),
			InterSect: createPoint(pS, CSS.intersect),
			Normal: normal,
			Curves: LocationArc.initCurveArc(pS, pE, normal),
			Dimension: createDimension(view, factor, arc, getMiddlePoint(pS, p1), pS, p1, normal),
			onChange: (pS, pE) => {
				var dir = new Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize();
				var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
				arc.userData.Location.Start.userData.setPosition(pE);
				arc.userData.Location.Center.userData.setPosition(pS);
				arc.userData.Location.End.userData.setPosition(
					pS.clone().add(dir.clone().multiplyScalar(-pS.distanceTo(pE)))
				);
				arc.userData.Location.Curves = LocationArc.initCurveArc(pS, pE, arc.userData.Location.Normal);
				LocationArc.updateTempArc(pS, pE, arc.userData.Location.Normal, arc);
				arc.userData.Location.Dimension.userData.onChange(
					pS,
					pS.clone().add(per.clone().multiplyScalar(pS.distanceTo(pE))),
					arc.userData.Location.Normal
				);
			},
			remove: (scene) => {
				arc.userData.Location.Start.userData.visibility(scene, false);
				arc.userData.Location.End.userData.visibility(scene, false);
				arc.userData.Location.Center.userData.visibility(scene, false);
				arc.userData.Location.InterSect.userData.visibility(scene, false);
				arc.userData.Location.Dimension.userData.visibility(scene, false);
			},
		};

		arc.userData.Selection = {
			snapPoint: (p) => {
				var snap;
				if (p.distanceTo(arc.userData.Location.Start.position) <= SNAP) snap = arc.userData.Location.Start;
				if (p.distanceTo(arc.userData.Location.Center.position) <= SNAP) snap = arc.userData.Location.Center;
				if (p.distanceTo(arc.userData.Location.End.position) <= SNAP) snap = arc.userData.Location.End;
				return snap;
			},
			visibilitySnap: (scene, p) => {
				var snap = arc.userData.Selection.snapPoint(p);
				if (snap) {
					snap.userData.visibility(scene, true);
				} else {
					arc.userData.Location.Start.userData.visibility(scene, false);
					arc.userData.Location.Center.userData.visibility(scene, false);
					arc.userData.Location.End.userData.visibility(scene, false);
				}
				return snap ? snap.position : p;
			},
			isSelect: (scene, visible) => {
				arc.userData.Location.Start.userData.visibility(scene, visible);
				arc.userData.Location.Center.userData.visibility(scene, visible);
				arc.userData.Location.End.userData.visibility(scene, visible);
				arc.material = visible ? arc.userData.Material.Select : arc.userData.Material.Normal;
			},
		};
	}
	static createTempArc(p0, p, normal) {
		var geometry = LocationArc.initGeometryArc(p0, p, normal);
		const arc = new Mesh(geometry, customMaterial.normalLine);
		arc.geometry.computeBoundingBox();
		arc.geometry.computeBoundingSphere();
		arc.geometry.computeVertexNormals();
		arc.geometry.boundsTree = new MeshBVH(arc.geometry);
		arc.renderOrder = 1;
		arc.userData.Profile = true;
		arc.userData.Material = {
			Normal: customMaterial.normalLine,
			Select: customMaterial.selectLine,
			Hover: customMaterial.hoverLine,
		};
		//mesh.useDate.Type=CustomType.model
		return arc;
	}
	static updateTempArc(p0, p, normal, arc) {
		arc.geometry = LocationArc.initGeometryArc(p0, p, normal);
		arc.geometry.computeBoundingBox();
		arc.geometry.computeBoundingSphere();
		arc.geometry.computeVertexNormals();
		arc.geometry.boundsTree = new MeshBVH(arc.geometry);
	}
	static initGeometryArc(p0, p, normal) {
		var curve = LocationArc.initCurveArc(p0, p, normal);
		var shape = initShape();
		return new ExtrudeGeometry(shape, extrudeSetting(curve));
	}
	static initCurveArc(p0, p, normal) {
		var r = p0.distanceTo(p);
		var dir = new Vector3(p.x - p0.x, p.y - p0.y, p.z - p0.z).normalize();
		var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
		var points = [];
		points.push(p);
		var angle0 = Math.PI / (MAX_CIRCLE / 2);
		for (let i = 0; i < MAX_CIRCLE / 2; i++) {
			var angle = (i + 1) * angle0;
			var sin = Math.sin(angle);
			var cos = Math.cos(angle);
			points.push(
				p0
					.clone()
					.add(dir.clone().multiplyScalar(cos * r))
					.add(per.clone().multiplyScalar(sin * r))
			);
		}
		var curves = new CurvePath();
		for (let i = 0; i < points.length; i++) {
			if (i < points.length - 1) {
				curves.add(new LineCurve3(points[i], points[i + 1]));
			}
		}
		return curves;
	}
}

export class ProfileModel {
	static listProfile(scene) {
		return scene.children.filter((c) => c.userData.Profile && c.userData.Location.Normal);
	}
	static listProfileSameNormal(scene) {
		var listProfiles = ProfileModel.listProfile(scene);
		for (let i = 0; i < listProfiles.length; i++) {
			var sameNormal = listProfiles.filter((l) =>
				areEqualVector(l.userData.Location.Normal, listProfiles[i].userData.Location.Normal)
			);
			if (sameNormal.length != listProfiles.length) return [];
		}
		return listProfiles;
	}
	static conditionBound(scene, callback) {
		var sameNormals = ProfileModel.listProfileSameNormal(scene);
		if (sameNormals.length == 0) return callback({ result: false, elements: null });
		if (sameNormals.length == 1) return callback({ result: false, elements: sameNormals });
		for (let i = 0; i < sameNormals.length; i++) {
			var e = sameNormals[i];
			if (!e.userData.Location.isConnectStart(sameNormals) || !e.userData.Location.isConnectEnd(sameNormals))
				return callback({ result: false, elements: e });
		}
		return callback({ result: true });
	}
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
			label.removeFromParent();
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
export function createDimension(view, factor, line, p, p1, p2, normal) {
	var input = document.createElement("input");
	input.className = "dimension";
	input.value = Math.round((p1.distanceTo(p2) / factor) * 1000) / 1000;
	input.addEventListener(
		"change",
		function (e) {
			onChangeDimension(e, factor);
		},
		false
	);
	var label = new CSS2DObject(input);
	label.position.set(p.x, p.y, p.z);
	var points = createPointGeometryDimension(p1, p2, normal);
	var geometry = new BufferGeometry().setFromPoints(points);
	const edges = new EdgesGeometry(geometry);
	const segment = new LineSegments(edges, customMaterial.normalLine);
	segment.userData.visLabel = (visible) => {
		if (visible) {
			segment.add(label);
		} else {
			label.removeFromParent();
		}
	};
	segment.userData.onChange = (pS, pE, normal) => {
		var pM = getMiddlePoint(pS, pE);
		label.position.set(pM.x, pM.y, pM.z);
		var points = createPointGeometryDimension(pS, pE, normal);
		var geometry = new BufferGeometry().setFromPoints(points);
		segment.geometry = new EdgesGeometry(geometry);
	};
	segment.userData.visibility = (scene, visible) => {
		segment.userData.visLabel(visible);
		if (visible) {
			scene.add(segment);
		} else {
			segment.removeFromParent();
		}
	};
	segment.userData.visibility(view.scene, view.showDimension);
	segment.userData.onChangeLabel = (factor) => {
		input.value = input.value * (factor == 1.0 ? 0.001 : 1000);
		input.addEventListener(
			"change",
			function (e) {
				onChangeDimension(e, factor);
			},
			false
		);
	};

	function onChangeDimension(e, factor) {
		if (isNaN(parseFloat(e.target.value * 1.0))) return;
		if (line.userData.Location) {
			if (line.userData.Type == CustomType.line) {
				var dim = parseFloat(e.target.value * 1.0 * factor);
				var pS = line.userData.Location.Start.position;
				var dir = line.userData.Location.Direction;
				var pE = pS.clone().add(dir.clone().multiplyScalar(dim));
				line.userData.Location.onChange(pS, pE);
			}
			if (line.userData.Type == CustomType.arc) {
				var dim = parseFloat(e.target.value * 1.0 * factor);
				var pS = line.userData.Location.Center.position;
				var dir = line.userData.Location.Direction;
				var pE = pS.clone().add(dir.clone().multiplyScalar(dim));
				line.userData.Location.onChange(pS, pE);
			}
		}
	}
	return segment;
}

export function createPointGeometryDimension(pS, pE, normal) {
	var points = [];
	var dir = new Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize();
	var nDir = dir.clone().negate();
	var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
	var voS = pS.clone().add(per.clone().multiplyScalar(OFFSET_DIM));
	var voE = pE.clone().add(per.clone().multiplyScalar(OFFSET_DIM));
	var v1 = pS.clone().add(nDir.clone().multiplyScalar(LINE_WIDTH / 2));
	var v2 = pS.clone().add(dir.clone().multiplyScalar(LINE_WIDTH / 2));
	var v3 = v2.clone().add(per.clone().multiplyScalar(OFFSET_DIM + EXTEND_DIM));
	var v4 = v1.clone().add(per.clone().multiplyScalar(OFFSET_DIM + EXTEND_DIM));
	points.push(v1);
	points.push(v2);
	points.push(v3);
	points.push(v1);
	points.push(v3);
	points.push(v4);
	var v5 = pE.clone().add(nDir.clone().multiplyScalar(LINE_WIDTH / 2));
	var v6 = pE.clone().add(dir.clone().multiplyScalar(LINE_WIDTH / 2));
	var v7 = v6.clone().add(per.clone().multiplyScalar(OFFSET_DIM + EXTEND_DIM));
	var v8 = v5.clone().add(per.clone().multiplyScalar(OFFSET_DIM + EXTEND_DIM));
	points.push(v5);
	points.push(v6);
	points.push(v7);
	points.push(v5);
	points.push(v7);
	points.push(v8);
	var v9 = voS
		.clone()
		.add(per.clone().multiplyScalar(LINE_WIDTH / 2))
		.add(nDir.clone().multiplyScalar(EXTEND_DIM));
	var v10 = v9.clone().add(per.clone().multiplyScalar(-LINE_WIDTH));
	var v11 = voE
		.clone()
		.add(per.clone().multiplyScalar(LINE_WIDTH / 2))
		.add(dir.clone().multiplyScalar(EXTEND_DIM));
	var v12 = v11.clone().add(per.clone().multiplyScalar(-LINE_WIDTH));
	points.push(v9);
	points.push(v10);
	points.push(v12);
	points.push(v9);
	points.push(v12);
	points.push(v11);
	return points;
}
