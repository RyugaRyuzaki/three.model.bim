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
	DIM_WIDTH,
	ES,
	EXTEND_DIM,
	extrudeSetting,
	initShape,
	LINE_WIDTH,
	MAX_CIRCLE,
	OFFSET_DIM,
	SNAP,
} from "./enum";
import { getMiddlePoint, areEqual } from "./snap";
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
	constructor(view, factor, line, pS, pE, normal) {
		this.line = line;
		this.Direction = new Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize();
		this.Start = createPoint(pS, CSS.endPoint);
		this.Mid = createPoint(getMiddlePoint(pS, pE), CSS.middle);
		this.End = createPoint(pE, CSS.endPoint);
		this.Normal = normal;
		this.Curves = new LineCurve3(pS, pE);
		this.Dimension = LocationLine.createDimension(
			view,
			factor,
			this.line,
			getMiddlePoint(pS, pE),
			pS,
			pE,
			this.Normal
		);
	}
	onChange(pS, pE) {
		this.Start.userData.setPosition(pS);
		this.Mid.userData.setPosition(getMiddlePoint(pS, pE));
		this.End.userData.setPosition(pE);
		this.Curves = new LineCurve3(pS, pE);
		LocationLine.updateTempLine(pS, pE, this.line);
		this.Dimension.userData.onChange(pS, pE, this.Normal);
	}
	remove(scene) {
		this.Start.userData.visibility(scene, false);
		this.End.userData.visibility(scene, false);
		this.Mid.userData.visibility(scene, false);
		this.Dimension.userData.visibility(scene, false);
	}
	isSelect(scene, visible) {
		this.Start.userData.visibility(scene, visible);
		this.Mid.userData.visibility(scene, visible);
		this.End.userData.visibility(scene, visible);
		this.line.material = visible ? this.line.userData.Material.Select : this.line.userData.Material.Normal;
	}
	isConnectStart(sameNormals) {
		return isConnected(sameNormals, this.line, this.Start);
	}
	isConnectEnd(sameNormals) {
		return isConnected(sameNormals, this.line, this.End);
	}
	static initLine(view, factor, pS, pE, normal, line) {
		line.userData.Type = CustomType.line;
		line.userData.Location = new LocationLine(view, factor, line, pS, pE, normal);
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
	static createDimension(view, factor, line, p, p1, p2, normal) {
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
			var dim = parseFloat(e.target.value * 1.0 * factor);
			var pS = line.userData.Location.Start.position;
			var dir = line.userData.Location.Direction;
			var pE = pS.clone().add(dir.clone().multiplyScalar(dim));
			line.userData.Location.onChange(pS, pE);
		}
		return segment;
	}
}

export class LocationArc {
	constructor(view, factor, arc, normal, angleArc, p0, pS) {
		this.arc = arc;
		this.Normal = normal;
		this.AngleArc = angleArc;
		this.Vertices = this.initVertices(p0, pS, normal, angleArc);
		this.Direction = this.initDirection(p0, this.Vertices);
		this.Start = createPoint(pS, CSS.endPoint);
		this.Center = createPoint(p0, CSS.dot);
		this.End = createPoint(LocationArc.getEndPointArc(p0, pS, normal, angleArc), CSS.endPoint);
		this.Curves = LocationArc.initCurveArc(p0, pS, normal, angleArc);
		this.Dimension = LocationArc.createDimension(view, factor, this.arc, p0, this.Vertices, normal);
		this.AngleDimension = LocationArc.createAngleDimension(view, this.arc, p0, pS, normal, angleArc);
	}
	initVertices(p0, pS, normal, angleArc) {
		var dir = new Vector3(pS.x - p0.x, pS.y - p0.y, pS.z - p0.z).normalize();
		var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
		return p0
			.clone()
			.add(dir.clone().multiplyScalar(Math.cos(angleArc / 2) * pS.distanceTo(p0)))
			.add(per.clone().multiplyScalar(Math.sin(angleArc / 2) * pS.distanceTo(p0)));
	}
	initDirection(p0, vertices) {
		return new Vector3(vertices.x - p0.x, vertices.y - p0.y, vertices.z - p0.z).normalize();
	}
	onChange(vertices) {
		if (vertices) this.Vertices = vertices;
		var per = new Vector3(0, 0, 0).crossVectors(this.Normal, this.Direction).normalize();
		var pS = this.Center.position
			.clone()
			.add(
				this.Direction.clone().multiplyScalar(
					Math.cos(this.AngleArc / 2) * this.Center.position.distanceTo(this.Vertices)
				)
			)
			.add(
				per
					.clone()
					.multiplyScalar(-Math.sin(this.AngleArc / 2) * this.Center.position.distanceTo(this.Vertices))
			);
		this.Start.userData.setPosition(pS);
		this.End.userData.setPosition(LocationArc.getEndPointArc(this.Center.position, pS, this.Normal, this.AngleArc));
		this.Curves = LocationArc.initCurveArc(this.Center.position, pS, this.Normal, this.AngleArc);
		LocationArc.updateTempArc(this.Center.position, pS, this.Normal, this.arc, this.AngleArc);
		this.Dimension.userData.onChange(this.Center.position, this.Vertices, this.Normal);
		this.AngleDimension.userData.onChange(this.Center.position, pS, this.Normal, this.AngleArc);
	}
	remove(scene) {
		this.Start.userData.visibility(scene, false);
		this.End.userData.visibility(scene, false);
		this.Center.userData.visibility(scene, false);
		this.Dimension.userData.visibility(scene, false);
		this.AngleDimension.userData.visibility(scene, false);
	}
	isSelect(scene, visible) {
		this.Start.userData.visibility(scene, visible);
		this.Center.userData.visibility(scene, visible);
		this.End.userData.visibility(scene, visible);
		this.arc.material = visible ? this.arc.userData.Material.Select : this.arc.userData.Material.Normal;
	}
	isConnectStart(sameNormals) {
		return isConnected(sameNormals, this.arc, this.Start);
	}
	isConnectEnd(sameNormals) {
		return isConnected(sameNormals, this.arc, this.End);
	}
	static initArc(view, factor, p0, pS, normal, arc, angleArc) {
		arc.userData.Type = CustomType.arc;
		arc.userData.Location = new LocationArc(view, factor, arc, normal, angleArc, p0, pS);
	}
	static createTempArc(p0, p, normal, angleArc) {
		var geometry = LocationArc.initGeometryArc(p0, p, normal, angleArc);
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
		return arc;
	}
	static updateTempArc(p0, p, normal, arc, angleArc) {
		arc.geometry = LocationArc.initGeometryArc(p0, p, normal, angleArc);
		arc.geometry.computeBoundingBox();
		arc.geometry.computeBoundingSphere();
		arc.geometry.computeVertexNormals();
		arc.geometry.boundsTree = new MeshBVH(arc.geometry);
	}
	static initGeometryArc(p0, p, normal, angleArc) {
		var curve = LocationArc.initCurveArc(p0, p, normal, angleArc);
		var shape = initShape();
		return new ExtrudeGeometry(shape, extrudeSetting(curve));
	}
	static initCurveArc(p0, p, normal, angleArc) {
		var r = p0.distanceTo(p);
		var dir = new Vector3(p.x - p0.x, p.y - p0.y, p.z - p0.z).normalize();
		var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
		var points = [];
		points.push(p);
		var angle0 = angleArc / (MAX_CIRCLE / 2);
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
	static getEndPointArc(p0, p, normal, angleArc) {
		var r = p0.distanceTo(p);
		var dir = new Vector3(p.x - p0.x, p.y - p0.y, p.z - p0.z).normalize();
		var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
		var sin = Math.sin(angleArc);
		var cos = Math.cos(angleArc);
		return p0
			.clone()
			.add(dir.clone().multiplyScalar(cos * r))
			.add(per.clone().multiplyScalar(sin * r));
	}
	static createDimension(view, factor, arc, p0, vertices, normal) {
		var input = document.createElement("input");
		input.className = "dimension";
		input.value = Math.round((p0.distanceTo(vertices) / factor) * 1000) / 1000;
		input.addEventListener(
			"change",
			function (e) {
				onChangeDimension(e, factor);
			},
			false
		);
		var label = new CSS2DObject(input);
		var p = getMiddlePoint(p0, vertices);
		label.position.set(p.x, p.y, p.z);
		var points = createPointGeometryArcDimension(p0, vertices, normal);
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
		segment.userData.onChange = (p0, vertices, normal) => {
			var p = getMiddlePoint(p0, vertices);
			label.position.set(p.x, p.y, p.z);
			var points = createPointGeometryArcDimension(p0, vertices, normal);
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
			var dim = parseFloat(e.target.value * 1.0 * factor);
			var pS = arc.userData.Location.Center.position;
			var dir = arc.userData.Location.Direction;
			var vertices = pS.clone().add(dir.clone().multiplyScalar(dim));
			arc.userData.Location.onChange(vertices);
		}
		return segment;
	}
	static createAngleDimension(view, arc, p0, p1, normal, angleArc) {
		var input = document.createElement("input");
		input.className = "angle";
		input.value = Math.round(((angleArc * 180) / Math.PI) * 1000) / 1000;
		input.addEventListener("change", onChangeAngleDimension, false);
		var label = new CSS2DObject(input);
		label.position.set(p0.x, p0.y, p0.z);
		var points = createPointGeometryArcDimension(p0, p1, normal);
		var r = p0.distanceTo(p1);
		var dir = new Vector3(p1.x - p0.x, p1.y - p0.y, p1.z - p0.z).normalize();
		var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
		var p2 = p0
			.clone()
			.add(dir.clone().multiplyScalar(Math.cos(angleArc) * r))
			.add(per.clone().multiplyScalar(Math.sin(angleArc) * r));
		points = points.concat(createPointGeometryArcDimension(p0, p2, normal));
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
		segment.userData.onChange = (p0, p1, normal, angleArc) => {
			var points = createPointGeometryArcDimension(p0, p1, normal);
			var r = p0.distanceTo(p1);
			var dir = new Vector3(p1.x - p0.x, p1.y - p0.y, p1.z - p0.z).normalize();
			var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
			var p2 = p0
				.clone()
				.add(dir.clone().multiplyScalar(Math.cos(angleArc) * r))
				.add(per.clone().multiplyScalar(Math.sin(angleArc) * r));
			points = points.concat(createPointGeometryArcDimension(p0, p2, normal));
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
		segment.userData.onChangeLabel = () => {
			input.addEventListener("change", onChangeAngleDimension, false);
		};
		function onChangeAngleDimension(e) {
			if (isNaN(parseInt(e.target.value))) return;
			var angle = (parseInt(e.target.value) * Math.PI) / 180;
			arc.userData.Location.AngleArc = angle;
			arc.userData.Location.onChange();
		}
		return segment;
	}
}

export class ProfileModel {
	static conditionBound(listProfile, callback) {
		if (listProfile.length == 0) return callback({ result: false, elements: null });
		if (listProfile.length == 1) return callback({ result: false, elements: listProfile[0] });
		for (let i = 0; i < listProfile.length; i++) {
			var e = listProfile[i];
			if (!e.userData.Location.isConnectStart(listProfile) || !e.userData.Location.isConnectEnd(listProfile))
				return callback({ result: false, elements: e });
		}
		return callback({ result: true });
	}
	static getListCurvesProfile(listProfile) {
		var curves = [];
		for (let i = 0; i < listProfile.length; i++) {
			if (listProfile[i].userData.Location.Curves) {
				if (listProfile[i].userData.Type == CustomType.line) {
					curves.push(listProfile[i].userData.Location.Curves);
				}
				if (listProfile[i].userData.Type == CustomType.arc) {
					for (let j = 0; j < listProfile[i].userData.Location.Curves.curves.length; j++) {
						curves.push(listProfile[i].userData.Location.Curves.curves[j]);
					}
				}
			}
		}
		return curves;
	}
	static getListPointsProfile(listProfile) {
		var curves = ProfileModel.getListCurvesProfile(listProfile);
		var points = [];
		for (let i = 0; i < curves.length; i++) {
			points.push(curves[i].v1);
			points.push(curves[i].v2);
		}
		points = points.filter((value, index, self) => self.findIndex((p) => p.distanceTo(value) < ES) === index);
		return points;
	}
}
function isConnected(sameNormals, mesh, point) {
	var dif = [...sameNormals];
	dif.splice(dif.indexOf(mesh), 1);
	if (dif.length == sameNormals.length) return false;
	var connect = [];
	for (let j = 0; j < dif.length; j++) {
		var disEnd1 = point.position.distanceTo(dif[j].userData.Location.Start.position);
		var disEnd2 = point.position.distanceTo(dif[j].userData.Location.End.position);
		if (areEqual(disEnd1, 0.0, 1e-6) || areEqual(disEnd2, 0.0, 1e-6)) {
			connect.push(dif[j]);
		}
	}
	return connect.length == 1;
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

export function createPointGeometryDimension(pS, pE, normal) {
	var points = [];
	var dir = new Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize();
	var nDir = dir.clone().negate();
	var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
	var voS = pS.clone().add(per.clone().multiplyScalar(OFFSET_DIM));
	var voE = pE.clone().add(per.clone().multiplyScalar(OFFSET_DIM));
	var v1 = pS
		.clone()
		.add(nDir.clone().multiplyScalar(DIM_WIDTH / 2))
		.add(per.clone().multiplyScalar(OFFSET_DIM / 2));
	var v2 = pS
		.clone()
		.add(dir.clone().multiplyScalar(DIM_WIDTH / 2))
		.add(per.clone().multiplyScalar(OFFSET_DIM / 2));
	var v3 = v2.clone().add(per.clone().multiplyScalar(OFFSET_DIM / 2 + EXTEND_DIM));
	var v4 = v1.clone().add(per.clone().multiplyScalar(OFFSET_DIM / 2 + EXTEND_DIM));
	points.push(v1);
	points.push(v2);
	points.push(v3);
	points.push(v1);
	points.push(v3);
	points.push(v4);
	var v5 = pE
		.clone()
		.add(nDir.clone().multiplyScalar(DIM_WIDTH / 2))
		.add(per.clone().multiplyScalar(OFFSET_DIM / 2));
	var v6 = pE
		.clone()
		.add(dir.clone().multiplyScalar(DIM_WIDTH / 2))
		.add(per.clone().multiplyScalar(OFFSET_DIM / 2));
	var v7 = v6.clone().add(per.clone().multiplyScalar(OFFSET_DIM / 2 + EXTEND_DIM));
	var v8 = v5.clone().add(per.clone().multiplyScalar(OFFSET_DIM / 2 + EXTEND_DIM));
	points.push(v5);
	points.push(v6);
	points.push(v7);
	points.push(v5);
	points.push(v7);
	points.push(v8);
	var v9 = voS
		.clone()
		.add(per.clone().multiplyScalar(DIM_WIDTH / 2))
		.add(nDir.clone().multiplyScalar(EXTEND_DIM));
	var v10 = v9.clone().add(per.clone().multiplyScalar(-DIM_WIDTH));
	var v11 = voE
		.clone()
		.add(per.clone().multiplyScalar(DIM_WIDTH / 2))
		.add(dir.clone().multiplyScalar(EXTEND_DIM));
	var v12 = v11.clone().add(per.clone().multiplyScalar(-DIM_WIDTH));
	points.push(v9);
	points.push(v10);
	points.push(v12);
	points.push(v9);
	points.push(v12);
	points.push(v11);
	return points;
}
export function createPointGeometryArcDimension(pS, pE, normal) {
	var points = [];
	var dir = new Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize();
	var per = new Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
	var v1 = pS.clone().add(per.clone().multiplyScalar(DIM_WIDTH / 2));
	var v2 = pS.clone().add(per.clone().multiplyScalar(-DIM_WIDTH / 2));
	var v3 = pE.clone().add(per.clone().multiplyScalar(-DIM_WIDTH / 2));
	var v4 = pE.clone().add(per.clone().multiplyScalar(DIM_WIDTH / 2));
	points.push(v1);
	points.push(v2);
	points.push(v3);
	points.push(v1);
	points.push(v3);
	points.push(v4);
	return points;
}
