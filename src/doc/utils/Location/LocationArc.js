import {
	CurvePath,
	Vector3,
	LineCurve3,
	ExtrudeGeometry,
	Mesh,
	BufferGeometry,
	EdgesGeometry,
	LineSegments,
} from "three";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { MeshBVH } from "three-mesh-bvh";
import { customMaterial } from "../../material";
import { CSS, CustomType, extrudeSetting, initShape, MAX_CIRCLE } from "../enum";
import { getMiddlePoint } from "../snap";
import { createPoint, createPointGeometryArcDimension, isConnected } from "./LocationUtils";

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
