import { drawList } from "../model/ModelType";
import { castElement, filterModel, changeCursor } from "./cast";
import { CustomType } from "./enum";

export function highlightModel(event, view) {
	view.scene.children.forEach((c) => {
		if (c.userData.Type == CustomType.model) {
			c.userData.Selection.refresh();
		}
	});
	var found = castElement(event, view, filterModel.model(view.scene))[0];
	if (found) {
		changeCursor().pointer(view.domElement);
		if (found.object.userData.Type == CustomType.model) {
			if (view.drawing != drawList.workPlane) found.object.userData.Selection.hover();
		}
	} else {
		changeCursor().default(view.domElement);
	}
}
export function pickModel(event, view) {
	var found = castElement(event, view, filterModel.model(view.scene))[0];
	view.scene.children.forEach((c) => {
		if ((c.userData.Type == CustomType.line || c.userData.Type == CustomType.arc) && c.userData.Location) {
			c.userData.Location.isSelect(view.scene, false);
		}
		if (c.userData.Type == CustomType.model) {
			c.userData.isSelected = false;
			c.userData.Selection.refresh();
		}
	});
	if (found) {
		view.selectModel = found.object;
		if (
			(found.object.userData.Type == CustomType.line || found.object.userData.Type == CustomType.arc) &&
			found.object.userData.Location
		) {
			found.object.userData.Location.isSelect(view.scene, true);
		}

		if (found.object.userData.Type == CustomType.model) {
			if (view.drawing != drawList.workPlane) {
				found.object.userData.isSelected = true;
				found.object.userData.Selection.selected();
			}
		}
	} else {
		view.selectModel = null;
		view.scene.children.forEach((c) => {
			if (c.userData.Type == CustomType.line && c.userData.Location) {
				c.userData.Location.isSelect(view.scene, false);
			}
			if (c.userData.Type == CustomType.model) {
				c.userData.isSelected = false;
				c.userData.Selection.refresh();
			}
		});
	}
}
