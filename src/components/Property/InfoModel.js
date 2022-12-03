import React, { useContext, useEffect, useState } from "react";
import { ToolContext } from "../ToolContext";

const InfoModel = () => {
	const { selectModel, listMaterial } = useContext(ToolContext);
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
								<select className="form-select">
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

export default InfoModel;
