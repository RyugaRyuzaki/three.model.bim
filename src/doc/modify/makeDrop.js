import { changeCursor, getPropertySets } from "../utils";

export function makeDropIfcSlabWall(view, factor, type, callback) {
	var isMatch = false;
	var ifcType;
	function draw() {
		view.domElement.addEventListener("click", onMouseDown, false);
		view.domElement.addEventListener("mousemove", onMouseMove, false);
		window.addEventListener("keydown", onkeydown);
	}

	function onkeydown(event) {
		var keyCode = event.keyCode;

		if (keyCode == 27) {
			view.domElement.classList.remove("maskDrop");
			changeCursor().default(view.renderer);
			view.domElement.removeEventListener("click", onMouseDown, false);
			view.domElement.removeEventListener("mousemove", onMouseMove, false);
			window.removeEventListener("keydown", onkeydown, false);
			callback(null);
		}
	}
	async function onMouseDown(e) {
		if (isMatch) {
			view.domElement.classList.remove("maskDrop");
			changeCursor().default(view.renderer);
			view.domElement.removeEventListener("click", onMouseDown, false);
			view.domElement.removeEventListener("mousemove", onMouseMove, false);
			window.removeEventListener("keydown", onkeydown, false);
			var type = getKeyByValue(ifcType);
			getThickness(view, factor, async (thickness, matProps) => {
				var propSet = await getPropertySets(view.ifc, view);
				callback({
					type: type,
					thickness: thickness,
					material: getMaterial(),
					matProps: matProps,
					propSet: propSet,
				});
			});
		}
	}
	function getMaterial() {
		var subset = view.ifc.createSubset({
			modelID: view.preselectModel.id,
			ids: [view.expressID],
			scene: view.scene,
			customID: -2,
			removePrevious: true,
		});
		var groups = [...subset.geometry.groups];
		var index;
		for (let i = 0; i < groups.length; i++) {
			if (groups[i].start !== 0) {
				index = groups[i].materialIndex;
				break;
			}
		}
		subset.removeFromParent();
		return subset.material[index];
	}

	async function onMouseMove(e) {
		view.domElement.classList.add("maskDrop");
		if (view.expressID != -1) {
			ifcType = await view.ifc.getIfcType(view.preselectModel.id, view.expressID);
			if (ifcType === type) {
				isMatch = true;
			} else {
				isMatch = false;
				view.domElement.classList.remove("maskDrop");
				changeCursor().notAllowed(view.renderer);
			}
		}
	}
	function getKeyByValue(value) {
		return Object.keys(view.ifc.typesMap).find((key) => view.ifc.typesMap[key] === value);
	}

	draw();
}
async function getThickness(view, factor, callback) {
	var t = 0;
	var data = await view.ifc.getMaterialsProperties(view.preselectModel.id, view.expressID, true);

	if (!data[0].ForLayerSet) {
		callback(0);
		return;
	}
	if (!data[0].ForLayerSet.MaterialLayers) {
		callback(0);
		return;
	}
	for (let i = 0; i < data[0].ForLayerSet.MaterialLayers.length; i++) {
		if (data[0].ForLayerSet.MaterialLayers[i].LayerThickness)
			t += factor * data[0].ForLayerSet.MaterialLayers[i].LayerThickness.value;
	}
	callback(t, data[0]);
}
