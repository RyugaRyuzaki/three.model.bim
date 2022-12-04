export class ExportBimModel {
	constructor() {
		this.export = {
			schema_version: "1.0.0",
			meshes: [],
			elements: [],
			info: {
				Author: "Ryuga Ryuzaki",
				ProjectID: "aaaaa",
			},
		};
	}
	initModel(model) {
		if (!model.userData.Export) return;
		this.export.meshes.push({
			mesh_id: model.userData.Export.mesh_id,
			coordinates: model.userData.Export.coordinates,
			indices: model.userData.Export.indices,
		});
		this.export.elements.push(model.userData.Export.elements);
	}
	exportModels(models) {
		for (let i = 0; i < models.length; i++) {
			this.initModel(models[i]);
		}
		const output = JSON.stringify(this.export, null, 2);
		var url = URL.createObjectURL(new Blob([output], { type: "application/json" }));
		const link = document.createElement("a");
		link.download = "export" + ".bim";
		link.href = url;
		document.body.appendChild(link);
		link.click();
		link.remove();
	}
}
