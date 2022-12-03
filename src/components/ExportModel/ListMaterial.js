import React, { useContext, useEffect, useRef, useState } from "react";
import { ToolContext } from "../ToolContext";

const ListMaterial = () => {
	const { listMaterial, showListMaterial, handleAddMaterial } = useContext(ToolContext);
	const [selectMaterial, setSelectMaterial] = useState(null);
	const bodyRef = useRef(null);
	const handleSelectMaterial = (e) => {
		var uuid = e.target.getAttribute("uuid");
		if (!uuid) return;
		setSelectMaterial(listMaterial.find((m) => m.material.uuid === uuid));
	};
	useEffect(() => {
		if (selectMaterial) {
		}
		bodyRef.current.childNodes.forEach((n) => {
			if (n.className !== "toolBtn") {
				if (selectMaterial) {
					if (n.getAttribute("uuid") === selectMaterial.material.uuid) {
						n.classList.add("select-material");
					} else {
						n.classList.remove("select-material");
					}
				} else {
					n.classList.remove("select-material");
				}
			}
		});
	}, [selectMaterial]);

	return (
		<div className={showListMaterial ? "list-material list-material-active" : "list-material"}>
			<table className="table table-bordered ">
				<thead>
					<tr>
						<th colSpan={3}>List Material</th>
					</tr>
					<tr>
						<th>Name</th>
						<th>Color</th>
						<th>Alpha</th>
					</tr>
				</thead>
				<tbody ref={bodyRef}>
					{listMaterial.map((mat) => {
						return (
							<tr key={mat.material.uuid} onClick={handleSelectMaterial} uuid={mat.material.uuid}>
								<td uuid={mat.material.uuid}>
									<input
										uuid={mat.material.uuid}
										type="text"
										className="form-control"
										defaultValue={mat.name}
										onChange={(e) => mat.onChangeName(e.target.value)}
									/>
								</td>
								<td uuid={mat.material.uuid}>
									<input
										uuid={mat.material.uuid}
										type="color"
										className="form-control"
										defaultValue={mat.setColor()}
										onChange={(e) => mat.onChangeColor(e.target.value)}
									/>
								</td>
								<td uuid={mat.material.uuid}>
									<input
										uuid={mat.material.uuid}
										type="number"
										className="form-control"
										min="0"
										max="255"
										defaultValue={mat.alpha}
										onChange={(e) => mat.onChangeAlpha(e.target.value)}
									/>
								</td>
							</tr>
						);
					})}
					<tr className="toolBtn">
						<td colSpan={3}>
							<div className="d-flex justify-content-between">
								<button className="btn btn-primary" onClick={handleAddMaterial}>
									Add Material
								</button>
								<button className="btn btn-warning" onClick={handleAddMaterial}>
									Remove Material
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ListMaterial;
