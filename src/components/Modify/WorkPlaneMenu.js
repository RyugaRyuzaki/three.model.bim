import React, { useContext, useEffect, useRef, useState } from "react";
import { ToolContext } from "../ToolContext";
import ToolButton from "../general/ToolButton";
import { imageModify } from "../general/ImageTool";

const WorkPlaneMenu = () => {
	const {
		pickWorkPlane,
		workPlaneType,
		handleSetWorkPlane,
		handleApplyWorkPlane,
		handleOnChangeWorkPlaneType,
		handleShowWorkPlane,
		documentModel,
	} = useContext(ToolContext);
	const idTooltip = "modify";
	const targetWorkPlanRef = useRef(null);
	const targetShowWorkPlanRef = useRef(null);
	return (
		<div className="d-flex justify-content-center">
			<div className="card card-menu">
				<ToolButton
					title="Set Work Plane"
					handleClick={handleSetWorkPlane}
					target={targetWorkPlanRef}
					idTooltip={idTooltip}
				>
					{<img src={imageModify.workPlane} alt="" />}
				</ToolButton>
				<ToolButton
					title="Show Work Plane"
					handleClick={handleShowWorkPlane}
					target={targetShowWorkPlanRef}
					idTooltip={idTooltip}
				>
					{<img src={imageModify.showWK} alt="" />}
				</ToolButton>
			</div>
			<div className="card card-menu" style={{ display: pickWorkPlane ? "block" : "none" }}>
				<div className="d-flex justify-content-start input-payment">
					<select
						className="form-select"
						style={{ width: "100px" }}
						value={workPlaneType}
						onChange={handleOnChangeWorkPlaneType}
					>
						{documentModel.workPlane.listWorkPlanes.map((plane) => {
							return (
								<option key={plane.type} value={plane.type}>
									{plane.name}
								</option>
							);
						})}
					</select>
					<button className="btn btn-primary" onClick={handleApplyWorkPlane}>
						Apply
					</button>
				</div>
			</div>
		</div>
	);
};

export default WorkPlaneMenu;
