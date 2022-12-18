import { Vector3 } from "three";
import { CustomType } from "../enum";
import { areEqual, areEqualVector, getProjectPointFrom3Point } from "../snap";

export const INTERSECT_TYPE = {
	dispose: "DISPOSE",
	parallel: "PARALLEL",
	equal: "EQUAL",
	noneIntersect: "NONE_INTERSECT",
	intersect: "INTERSECT",
};

export function getIntersectTypeCurve(curve1, curve2) {
	if (!curve1.userData.Type || !curve2.userData.Type) return INTERSECT_TYPE.dispose;
	if (!curve1.userData.Location || !curve2.userData.Location) return INTERSECT_TYPE.dispose;
	if (!areEqualVector(curve1.userData.Location.Normal, curve2.userData.Location.Normal))
		return INTERSECT_TYPE.dispose;
	if (curve1.userData.Type == CustomType.line) {
		if (curve2.userData.Type == CustomType.line) {
			return getIntersectTypeLines(curve1.userData.Location.Curves, curve2.userData.Location.Curves);
		} else {
			//curve1 line, curve 2 arc
			return getIntersectTypeLineAndArc(curve1.userData.Location.Curves, curve2.userData.Location.Curves);
		}
	} else {
		if (curve2.userData.Type == CustomType.line) {
			//curve2 line, curve1 are
			return getIntersectTypeLineAndArc(curve2.userData.Location.Curves, curve1.userData.Location.Curves);
		} else {
			// both arc
			return getIntersectTypeArcAndArc(curve1.userData.Location.Curves, curve2.userData.Location.Curves);
		}
	}
}
// l1 = curve1.userData.Location.Curves
// l2 = curve2.userData.Location.Curves
export function getDirectionLine(line) {
	return new Vector3(line.v2.x - line.v1.x, line.v2.y - line.v1.y, line.v2.z - line.v1.z).normalize();
}
export function getDirection2Point(p1, p2) {
	return new Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
}
export function getIntersectTypeLines(l1, l2) {
	var v11 = l1.v1; //get start
	var v12 = l1.v2; //get end
	var v21 = l2.v1; //get start
	var v22 = l2.v2; //get end
	var dir1 = getDirectionLine(l1);
	var dir2 = getDirectionLine(l2);
	var angle = dir1.angleTo(dir2);
	if (areEqual(angle, 0, 1e-6) || areEqual(angle, Math.PI, 1e-6)) {
		if (
			areEqual(v11.distanceTo(v21), 0, 1e-6) ||
			areEqual(v11.distanceTo(v22), 0, 1e-6) ||
			areEqual(v21.distanceTo(v12), 0, 1e-6) ||
			areEqual(v22.distanceTo(v12), 0, 1e-6)
		) {
			return INTERSECT_TYPE.equal;
		} else {
			return INTERSECT_TYPE.parallel;
		}
	} else {
		// get project point from v11 to (v21,v22)
		var v11Prov2 = getProjectPointFrom3Point(v21, v22, v11);
		// get project point from v12 to (v21,v22)
		var v12Prov2 = getProjectPointFrom3Point(v21, v22, v12);
		// get direction (v11Prov2 && v11)
		var dirV11Prov2TpV11 = getDirection2Point(v11Prov2, v11);
		// get direction (v12Prov2 && v12)
		var dirV12Prov2TpV12 = getDirection2Point(v12Prov2, v12);

		var booleanSameWayL1ToL2 = areEqual(dirV11Prov2TpV11.angleTo(dirV12Prov2TpV12), 0, 1e-6);

		// get project point from v21 to (v11,v22)
		var v21Prov1 = getProjectPointFrom3Point(v11, v12, v21);
		// get project point from v22 to (v11,v22)
		var v22Prov1 = getProjectPointFrom3Point(v11, v12, v22);
		// get direction (v21Prov2 && v21)
		var dirV21Prov2TpV21 = getDirection2Point(v21Prov1, v21);
		// get direction (v12Prov2 && v12)
		var dirV22Prov2TpV22 = getDirection2Point(v22Prov1, v22);
		var booleanSameWayL2ToL1 = areEqual(dirV21Prov2TpV21.angleTo(dirV22Prov2TpV22), 0, 1e-6);

		if (!booleanSameWayL1ToL2 && !booleanSameWayL2ToL1) {
			return INTERSECT_TYPE.intersect;
		} else {
			return INTERSECT_TYPE.noneIntersect;
		}
	}
}
// line = curve1.userData.Location.Curves
// arc = curve2.userData.Location.Curves
export function getIntersectTypeLineAndArc(line, arc) {
	var curvePaths = arc.curves;
	for (let i = 0; i < curvePaths.length; i++) {
		var intersect = getIntersectTypeLines(line, curvePaths[i]);
		if (intersect != INTERSECT_TYPE.noneIntersect) return INTERSECT_TYPE.intersect;
	}
	return INTERSECT_TYPE.noneIntersect;
}
function getIntersectTypeArcAndArc(arc1, arc2) {
	var curve1Paths = arc1.curves;
	var curve2Paths = arc2.curves;
	for (let i = 0; i < curve1Paths.length; i++) {
		var line = curve1Paths[i];
		return getIntersectTypeLineAndArc(line, curve2Paths);
	}
	return INTERSECT_TYPE.noneIntersect;
}
export function getIntersectPointCurve(curve1, curve2) {}
