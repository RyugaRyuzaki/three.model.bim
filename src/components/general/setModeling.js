import { setModelType } from "../../redux/modelSlice";

export function setDisabled(target, type0, typing, isModeling) {
	if (isModeling) {
		if (typing == type0) {
			target.current.disabled = false;
		} else {
			target.current.disabled = true;
		}
	} else {
		target.current.disabled = false;
	}
}
export function setModelingType(type, dispatch) {
	dispatch(setModelType({ typing: type, isModeling: true }));
}
export function refreshModelingType(dispatch) {
	dispatch(setModelType({ typing: 0, isModeling: false }));
}
