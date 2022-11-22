import React, { useContext, useEffect, useRef, useState } from "react";
import { ToolContext } from "../ToolContext";
import ModelButton from "../general/ModelButton";
import CancelModel from "../general/CancelModel";
import FinishModel from "../general/FinishModel";
import ToolButton from "../general/ToolButton";
import { imageInPlace } from "../general/ImageTool";
import { typeModel } from "../../doc/model";

const ModelInPlaceMenu = () => {
	const { modelType, handleInPlace, handleFinish, handleCancel } = useContext(ToolContext);
	const [showTool, setShowTool] = useState(false);
	const idTooltip = "inPlace";
	const targetInPlaceRef = useRef(null);
	const targetFinishInPlaceRef = useRef(null);
	const targetExtrudeInPlaceRef = useRef(null);
	const targetRevolveInPlaceRef = useRef(null);
	const targetSweepInPlaceRef = useRef(null);

	const targetCancelInPlaceRef = useRef(null);
	const targetWorkPlaneInPlaceRef = useRef(null);
	useEffect(() => {
		if (!modelType) {
			setShowTool(false);
		} else {
			setShowTool(modelType.type == typeModel.inPlace);
		}
	}, [modelType]);
	useEffect(() => {
		if (!modelType) {
			targetInPlaceRef.current.disabled = false;
		} else {
			targetInPlaceRef.current.disabled = showTool || modelType.type != typeModel.inPlace;
		}
	}, [modelType, showTool]);
	const handleExtrude = () => {};
	const handleRevolve = () => {};
	const handleSweep = () => {};
	const handleWorkPlane = () => {};
	return (
		<div className="d-flex justify-content-center">
			<div className="card card-menu">
				<ModelButton handleClick={handleInPlace} target={targetInPlaceRef}></ModelButton>
			</div>
			<div className="card card-menu" style={{ display: showTool ? "flex" : "none" }}>
				<FinishModel
					handleFinish={handleFinish}
					target={targetFinishInPlaceRef}
					idTooltip={idTooltip}
				></FinishModel>
				<ToolButton
					title="Extrude"
					handleClick={handleExtrude}
					target={targetExtrudeInPlaceRef}
					idTooltip={idTooltip}
				>
					{<img src={imageInPlace.extrude} alt="" />}
				</ToolButton>
				<ToolButton
					title="Revolve"
					handleClick={handleRevolve}
					target={targetRevolveInPlaceRef}
					idTooltip={idTooltip}
				>
					{<img src={imageInPlace.revolve} alt="" />}
				</ToolButton>
				<ToolButton
					title="Sweep"
					handleClick={handleSweep}
					target={targetSweepInPlaceRef}
					idTooltip={idTooltip}
				>
					{<img src={imageInPlace.sweep} alt="" />}
				</ToolButton>
				<CancelModel
					handleCancel={handleCancel}
					target={targetCancelInPlaceRef}
					idTooltip={idTooltip}
				></CancelModel>
			</div>
			<div className="card card-menu" style={{ display: showTool ? "flex" : "none" }}>
				<ToolButton
					title="Work Plane"
					handleClick={handleWorkPlane}
					target={targetWorkPlaneInPlaceRef}
					idTooltip={idTooltip}
				>
					{<img src={imageInPlace.workPlane} alt="" />}
				</ToolButton>
			</div>
		</div>
	);
};

export default ModelInPlaceMenu;
