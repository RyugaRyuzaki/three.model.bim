import { setModelType } from "../../redux/modelSlice";

export function setDisabled(target, draw0, drawing, isModeling) {
	if (isModeling) {
		if (drawing == draw0) {
			target.current.disabled = false;
		} else {
			target.current.disabled = true;
		}
	} else {
		target.current.disabled = false;
	}
}
export function setModelingType(draw, dispatch) {
	dispatch(setModelType({ drawing: draw, isModeling: true }));
}
export function refreshModelingType(dispatch) {
	dispatch(setModelType({ drawing: 0, isModeling: false }));
}
