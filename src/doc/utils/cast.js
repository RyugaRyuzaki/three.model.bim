import { CustomType } from "./enum";

export const filterModel = {
	model: (scene) => {
		return scene.children.filter((e) => (CustomType.isModel(e) || CustomType.isProfile(e)) && e.visible);
	},
	export: (scene) => {
		return scene.children.filter((e) => CustomType.isModel(e) && e.visible);
	},
};
export function castElement(event, view, filter) {
	const bounds = view.domElement.getBoundingClientRect();
	const x1 = event.clientX - bounds.left;
	const y1 = event.clientY - bounds.top;
	const x2 = bounds.right - bounds.left;
	const y2 = bounds.bottom - bounds.top;
	view.mouse.x = (x1 / x2) * 2 - 1;
	view.mouse.y = -(y1 / y2) * 2 + 1;
	view.rayCaster.setFromCamera(view.mouse, view.camera);
	return view.rayCaster.intersectObjects(filter);
}
export function changeCursor() {
	return {
		default: (domElement) => {
			domElement.style.cursor = "default";
		},
		pointer: (domElement) => {
			domElement.style.cursor = "pointer";
		},
		move: (domElement) => {
			domElement.style.cursor = "move";
		},
		crosshair: (domElement) => {
			domElement.style.cursor = "crosshair";
		},
		alias: (domElement) => {
			domElement.style.cursor = "alias";
		},
		extrude: (domElement) => {
			domElement.style.cursor = "row-resize";
		},
		notAllowed: (domElement) => {
			domElement.style.cursor = "not-allowed";
		},
	};
}
