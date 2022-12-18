import { CustomType, ES } from "../enum";

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
