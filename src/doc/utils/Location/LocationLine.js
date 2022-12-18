import { BufferGeometry, EdgesGeometry, ExtrudeGeometry, LineCurve3, LineSegments, Mesh, Vector3 } from "three";
import { customMaterial } from "../../material";
import { CSS, CustomType, extrudeSetting, initShape } from "../enum";
import { getMiddlePoint } from "../snap";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { MeshBVH } from "three-mesh-bvh";
import { createPoint, createPointGeometryDimension, isConnected } from "./LocationUtils";

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
