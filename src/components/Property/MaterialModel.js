import React, { useContext, useEffect, useState } from "react";
import { ToolContext } from "../ToolContext";

const MaterialModel = () => {
	const { selectModel, listMaterial } = useContext(ToolContext);
	const handleOnChangeMaterial = (e) => {
		var material = listMaterial.find((l) => l.material.uuid == e.target.value);
		if (!material) return;
		selectModel?.userData.Selection.onChangeMaterial(material);
	};
	return (
		<div className="property-group">
			<div className="d-flex justify-content-between property-group-title">
				<div>Material</div>
			</div>
			<div className="table-responsive">
				<table className="table table-bordered">
					<tbody className="propBody">
						<tr>
							<td style={{ width: "50%" }}>
								<div className="paraName">Material</div>
							</td>
							<td>
								<select
									className="form-select"
									defaultValue={selectModel?.userData.Selection.MaterialModel.material.uuid}
									onChange={handleOnChangeMaterial}
								>
									{listMaterial.map((m) => {
										return (
											<option key={m.name} value={m.material.uuid}>
												{m.name}
											</option>
										);
									})}
								</select>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MaterialModel;
