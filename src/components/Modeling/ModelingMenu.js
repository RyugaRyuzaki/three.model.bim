import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToolContext } from "../ToolContext";
import ToolButton from "../general/ToolButton";
import { imageModeling } from "../general/ImageTool";
import { drawList } from "../../doc/model";
import { setDisabled, setModelingType } from "../general/setModeling";
import FinishModel from "../general/FinishModel";
import CancelModel from "../general/CancelModel";

const ModelingMenu = () => {
	const drawing = useSelector((state) => state.model?.drawing);
	const isModeling = useSelector((state) => state.model?.isModeling);
	const dispatch = useDispatch();
	const { modelType, documentModel, handleFinish, handleCancel } = useContext(ToolContext);
	const [showTool, setShowTool] = useState(false);
	const idTooltip = "modeling";
	const targetRectRef = useRef(null);
	const targetPolyRef = useRef(null);
	const targetCircleRef = useRef(null);
	const targetArcRef = useRef(null);
	const targetLineRef = useRef(null);
	const targetFinishRef = useRef(null);
	const targetCancelRef = useRef(null);

	const targetWorkPlanRef = useRef(null);
	const targetShowWorkPlanRef = useRef(null);

	const handleRectangle = () => {
		setModelingType(drawList.rect, dispatch);
	};
	const handlePoly = () => {
		setModelingType(drawList.poly, dispatch);
	};
	const handleCircle = () => {
		setModelingType(drawList.circle, dispatch);
	};
	const handleArc = () => {
		setModelingType(drawList.arc, dispatch);
	};
	const handleLine = () => {
		setModelingType(drawList.line, dispatch);
	};

	const handleSetWorkPlane = () => {};
	const handleShowWorkPlane = () => {};
	useEffect(() => {
		setShowTool(modelType != null);
	}, [modelType]);

	useEffect(() => {
		setDisabled(targetRectRef, drawList.rect, drawing, isModeling);
		setDisabled(targetPolyRef, drawList.poly, drawing, isModeling);
		setDisabled(targetCircleRef, drawList.circle, drawing, isModeling);
		setDisabled(targetArcRef, drawList.arc, drawing, isModeling);
		setDisabled(targetLineRef, drawList.line, drawing, isModeling);
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
				<ToolButton title="PolyGon" handleClick={handlePoly} target={targetPolyRef} idTooltip={idTooltip}>
					{<img src={imageModeling.poly} alt="" />}
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
				<FinishModel handleFinish={handleFinish} target={targetFinishRef} idTooltip={idTooltip}></FinishModel>
				<CancelModel handleCancel={handleCancel} target={targetCancelRef} idTooltip={idTooltip}></CancelModel>
			</div>
			<div className="card card-menu" style={{ display: showTool ? "flex" : "none" }}>
				<ToolButton
					title="Set Work Plane"
					handleClick={handleSetWorkPlane}
					target={targetWorkPlanRef}
					idTooltip={idTooltip}
				>
					{<img src={imageModeling.workPlane} alt="" />}
				</ToolButton>
				<ToolButton
					title="Show Work Plane"
					handleClick={handleShowWorkPlane}
					target={targetShowWorkPlanRef}
					idTooltip={idTooltip}
				>
					{<img src={imageModeling.showWK} alt="" />}
				</ToolButton>
			</div>
		</div>
	);
};

export default ModelingMenu;
