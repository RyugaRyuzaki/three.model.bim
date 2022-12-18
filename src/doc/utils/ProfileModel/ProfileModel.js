import { Plane, Vector3 } from "three";
import { CustomType, ES } from "../enum";
import { areEqual, getLocalVectorOnFace, getProjectPointFrom3Point } from "../snap";
import { getDirection2Point } from "./InterSectCurve";

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
	static getCenterOfListPoints(listPoints) {
		var x = listPoints.reduce((a, b) => a + b.x, 0) / listPoints.length;
		var y = listPoints.reduce((a, b) => a + b.y, 0) / listPoints.length;
		var z = listPoints.reduce((a, b) => a + b.z, 0) / listPoints.length;
		return new Vector3(x, y, z);
	}
	static getClockWiseListPoints(listPoints) {
		var center = ProfileModel.getCenterOfListPoints(listPoints);
		var plane = new Plane(new Vector3(0, 1, 0), 0);
		plane = plane.setFromCoplanarPoints(listPoints[0], listPoints[1], listPoints[2]);
		var local = getLocalVectorOnFace(plane.normal);
		var newListPoints = [...listPoints];
		const angles = newListPoints.map((point) => {
			var dis = point.distanceTo(center);
			var dir = getDirection2Point(center, point);
			var z = dis * Math.cos(dir.angleTo(local.z));
			var x = dis * Math.cos(dir.angleTo(local.x));
			var angle = (Math.atan2(z, x) * 180) / Math.PI;
			// return { x, y, z, angle: (Math.atan2(z - center.y, x - center.x) * 180) / Math.PI };
			return { point: point, angle: angle };
		});
		const pointsSorted = angles.sort((a, b) => a.angle - b.angle);
		return pointsSorted.map((point) => point.point);
	}
	static conditionOnsideListPointsAnd2Point(list, p1, p2) {
		var pro0 = getProjectPointFrom3Point(p1, p2, list[0]);
		var dir0 = getDirection2Point(list[0], pro0);
		for (let i = 1; i < list.length; i++) {
			var pro = getProjectPointFrom3Point(p1, p2, list[i]);
			var dir = getDirection2Point(list[i], pro);
			if (!areEqual(dir.angleTo(dir0), 0, 1e-6)) return false;
		}
		return true;
	}
	static provePolygon(clockWiseListPoints) {
		for (let i = 0; i < clockWiseListPoints.length; i++) {
			var list;
			if (i === clockWiseListPoints.length - 1) {
				list = [...clockWiseListPoints].filter((p, index) => index !== i && index !== 0);
				if (
					!ProfileModel.conditionOnsideListPointsAnd2Point(
						list,
						clockWiseListPoints[i],
						clockWiseListPoints[0]
					)
				)
					return false;
			} else {
				list = [...clockWiseListPoints].filter((p, index) => index !== i && index !== i + 1);
				if (
					!ProfileModel.conditionOnsideListPointsAnd2Point(
						list,
						clockWiseListPoints[i],
						clockWiseListPoints[i + 1]
					)
				)
					return false;
			}
		}
		return true;
	}
}
