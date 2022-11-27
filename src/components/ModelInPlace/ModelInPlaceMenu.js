import React, { useContext, useEffect, useRef, useState } from "react";
import { ToolContext } from "../ToolContext";
import ToolButton from "../general/ToolButton";
import { imageInPlace } from "../general/ImageTool";
import { typeModel } from "../../doc/model";
import FinishModel from "../general/FinishModel";
import CancelModel from "../general/CancelModel";
import { useSelector } from "react-redux";

const ModelInPlaceMenu = () => {
	const {
		modelType,
		showProfile,
		handleExtrude,
		handleRevolve,
		handleSweep,
		handleShowProfile,
		handleFinish,
		handleCancel,
		deepExtrude,
		handleChangeDeepExtrude,
	} = useContext(ToolContext);
	const [showProfilePanel, setShowProfilePanel] = useState(false);
	const [showDeep, setShowDeep] = useState(false);
	const isModeling = useSelector((state) => state.model?.isModeling);
	const idTooltip = "inPlace";
	const targetExtrudeRef = useRef(null);
	const targetRevolveRef = useRef(null);
	const targetSweepRef = useRef(null);
	const targetProfileRef = useRef(null);
	const targetFinishRef = useRef(null);
	const targetCancelRef = useRef(null);
	useEffect(() => {
		targetExtrudeRef.current.disabled = modelType != null;
		targetRevolveRef.current.disabled = modelType != null;
		targetSweepRef.current.disabled = modelType != null;
		setShowProfilePanel(modelType != null);
		setShowDeep(modelType?.type == typeModel.extrude);
	}, [modelType]);
	useEffect(() => {
		targetProfileRef.current.disabled = showProfile;
	}, [showProfile]);
	useEffect(() => {
		targetFinishRef.current.disabled = isModeling;
		targetCancelRef.current.disabled = isModeling;
	}, [isModeling]);

	return (
		<div className="d-flex justify-content-center">
			<div className="card card-menu">
				<ToolButton title="Extrude" handleClick={handleExtrude} target={targetExtrudeRef} idTooltip={idTooltip}>
					{<img src={imageInPlace.extrude} alt="" />}
				</ToolButton>
				<ToolButton title="Revolve" handleClick={handleRevolve} target={targetRevolveRef} idTooltip={idTooltip}>
					{<img src={imageInPlace.revolve} alt="" />}
				</ToolButton>
				<ToolButton title="Sweep" handleClick={handleSweep} target={targetSweepRef} idTooltip={idTooltip}>
					{<img src={imageInPlace.sweep} alt="" />}
				</ToolButton>
			</div>
			<div className="card card-menu" style={{ display: showProfilePanel ? "block" : "none" }}>
				<ToolButton
					title="Profile"
					handleClick={handleShowProfile}
					target={targetProfileRef}
					idTooltip={idTooltip}
				>
					{<img src={imageInPlace.profile} alt="" />}
				</ToolButton>
			</div>
			<div className="card card-menu" style={{ display: showDeep ? "block" : "none" }}>
				<div className="d-flex justify-content-start input-payment">
					<div>Deep</div>
					<input
						type="text"
						className="form-control"
						value={deepExtrude}
						onChange={handleChangeDeepExtrude}
					/>
				</div>
			</div>
			<div className="card card-menu" style={{ display: showProfilePanel ? "block" : "none" }}>
				<FinishModel handleFinish={handleFinish} target={targetFinishRef} idTooltip={idTooltip}></FinishModel>
				<CancelModel handleCancel={handleCancel} target={targetCancelRef} idTooltip={idTooltip}></CancelModel>
			</div>
		</div>
	);
};

export default ModelInPlaceMenu;
