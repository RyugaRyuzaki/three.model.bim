import { CustomType, DiaP, DIM_WIDTH, EXTEND_DIM, OFFSET_DIM } from "../enum";

import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { Mesh, SphereGeometry, Vector3 } from "three";
import { customMaterial } from "../../material";
import { areEqual } from "../snap";
export function isConnected(sameNormals, mesh, point) {
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
