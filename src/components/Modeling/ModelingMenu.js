import React, { useContext, useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { ToolContext } from "../ToolContext";
import ToolButton from "../general/ToolButton";
import { imageModeling } from "../general/ImageTool";
import { drawList } from "../../doc/model";
import { setDisabled, setModelingType, refreshModelingType } from "../general/setModeling";
import FinishModel from "../general/FinishModel";
import CancelModel from "../general/CancelModel";

const ModelingMenu = () => {
	const drawing = useSelector((state) => state.model?.drawing);
	const isModeling = useSelector((state) => state.model?.isModeling);
	const dispatch = useDispatch();
	const { modelType, showProfile, documentModel, handleFinishProfile, handleCancelProfile } = useContext(ToolContext);
	const [showTool, setShowTool] = useState(false);

	const idTooltip = "modeling";
	const targetRectRef = useRef(null);
	const targetCircleRef = useRef(null);
	const targetArcRef = useRef(null);
	const targetLineRef = useRef(null);
	const targetMultiLineRef = useRef(null);
	const targetPolygonRef = useRef(null);
	const targetFinishRef = useRef(null);
	const targetCancelRef = useRef(null);

	const handleRectangle = () => {
		if (modelType) {
			setModelingType(drawList.rect, dispatch);
			modelType.createProfileRect(targetRectRef.current, documentModel.workPlane, () => {
				refreshModelingType(dispatch);
			});
		}
	};

	const handleCircle = () => {
		if (modelType) {
			setModelingType(drawList.circle, dispatch);
			modelType.createProfileCircle(targetCircleRef.current, documentModel.workPlane, () => {
				refreshModelingType(dispatch);
			});
		}
	};
	const handleArc = () => {
		setModelingType(drawList.arc, dispatch);
	};

	const handleLine = () => {
		if (modelType) {
			setModelingType(drawList.line, dispatch);
			modelType.createProfileLine(targetLineRef.current, documentModel.workPlane, () => {
				refreshModelingType(dispatch);
			});
		}
	};
	const handleMultiLine = () => {
		if (modelType) {
			setModelingType(drawList.multiLine, dispatch);
			modelType.createProfileMultiLine(targetMultiLineRef.current, documentModel.workPlane, () => {
				refreshModelingType(dispatch);
			});
		}
	};
	const handlePolygon = () => {
		if (modelType) {
			setModelingType(drawList.pentagon, dispatch);
			modelType.createProfilePolygon(targetPolygonRef.current, documentModel.workPlane, () => {
				refreshModelingType(dispatch);
			});
		}
	};

	useEffect(() => {
		setShowTool(showProfile);
	}, [showProfile]);

	useEffect(() => {
		setDisabled(targetRectRef, drawList.rect, drawing, isModeling);
		setDisabled(targetCircleRef, drawList.circle, drawing, isModeling);
		setDisabled(targetArcRef, drawList.arc, drawing, isModeling);
		setDisabled(targetLineRef, drawList.line, drawing, isModeling);
		setDisabled(targetMultiLineRef, drawList.multiLine, drawing, isModeling);
		setDisabled(targetPolygonRef, drawList.polygon, drawing, isModeling);
		targetFinishRef.current.disabled = isModeling;
		targetCancelRef.current.disabled = isModeling;
	}, [drawing, isModeling]);

	return (
		<div className="d-flex justify-content-center">
			<div className="card card-menu" style={{ display: showTool ? "flex" : "none" }}>
				<ToolButton
					title="Rectangle"
					handleClick={handleRectangle}
					target={targetRectRef}
					idTooltip={idTooltip}
				>
					{<img src={imageModeling.rect} alt="" />}
				</ToolButton>

				<ToolButton title="Circle" handleClick={handleCircle} target={targetCircleRef} idTooltip={idTooltip}>
					{<img src={imageModeling.circle} alt="" />}
				</ToolButton>
				<ToolButton title="Arc" handleClick={handleArc} target={targetArcRef} idTooltip={idTooltip}>
					{<img src={imageModeling.arc} alt="" />}
				</ToolButton>
				<ToolButton title="Line" handleClick={handleLine} target={targetLineRef} idTooltip={idTooltip}>
					{<img src={imageModeling.line} alt="" />}
				</ToolButton>
				<ToolButton
					title="Multi-Line"
					handleClick={handleMultiLine}
					target={targetMultiLineRef}
					idTooltip={idTooltip}
				>
					{<img src={imageModeling.multi} alt="" />}
				</ToolButton>
				<ToolButton title="Polygon" handleClick={handlePolygon} target={targetPolygonRef} idTooltip={idTooltip}>
					{<img src={imageModeling.polygon} alt="" />}
				</ToolButton>

				<FinishModel
					handleFinish={handleFinishProfile}
					target={targetFinishRef}
					idTooltip={idTooltip}
				></FinishModel>
				<CancelModel
					handleCancel={handleCancelProfile}
					target={targetCancelRef}
					idTooltip={idTooltip}
				></CancelModel>
			</div>
		</div>
	);
};

export default ModelingMenu;
