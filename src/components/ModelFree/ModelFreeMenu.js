import React, { useContext, useEffect, useRef, useState } from "react";
import ModelButton from "../general/ModelButton";
import { ToolContext } from "../ToolContext";
import FinishModel from "../general/FinishModel";
import CancelModel from "../general/CancelModel";
import ToolButton from "../general/ToolButton";
import { imageFree } from "../general/ImageTool";
import { typeModel, modelList } from "../../doc/model";
import { useDispatch, useSelector } from "react-redux";
import { refreshModelingType, setDisabled, setModelingType } from "../general/setModeling";

const ModelFreeMenu = () => {
	const typing = useSelector((state) => state.model?.typing);
	const isModeling = useSelector((state) => state.model?.isModeling);
	const dispatch = useDispatch();

	const { modelType, handleFree, handleFinish, handleCancel } = useContext(ToolContext);
	const [showTool, setShowTool] = useState(false);
	const idTooltip = "free";
	const targetFreeRef = useRef(null);
	const targetFinishFreeRef = useRef(null);
	const targetRectFreeRef = useRef(null);
	const targetPolyFreeRef = useRef(null);
	const targetCircleFreeRef = useRef(null);
	const targetArcFreeRef = useRef(null);
	const targetExtrudeFreeRef = useRef(null);
	const targetCancelFreeRef = useRef(null);

	useEffect(() => {
		if (!modelType) {
			setShowTool(false);
		} else {
			setShowTool(modelType.type == typeModel.free);
		}
	}, [modelType]);
	useEffect(() => {
		if (!modelType) {
			targetFreeRef.current.disabled = false;
		} else {
			targetFreeRef.current.disabled = showTool || modelType.type != typeModel.free;
		}
	}, [modelType, showTool]);
	const handleRectangle = () => {
		if (modelType) {
			setModelingType(modelList.rect, dispatch);
			modelType.drawFreeRect(targetRectFreeRef.current, () => {
				refreshModelingType(dispatch);
			});
		}
	};
	const handlePoly = () => {};
	const handleCircle = () => {};
	const handleArc = () => {};
	const handleExtrude = () => {
		if (modelType) {
			setModelingType(modelList.extrude, dispatch);
			modelType.drawFreeExtrude(targetExtrudeFreeRef.current, () => {
				refreshModelingType(dispatch);
			});
		}
	};
	useEffect(() => {
		setDisabled(targetRectFreeRef, modelList.rect, typing, isModeling);
		setDisabled(targetPolyFreeRef, modelList.poly, typing, isModeling);
		setDisabled(targetCircleFreeRef, modelList.circle, typing, isModeling);
		setDisabled(targetArcFreeRef, modelList.arc, typing, isModeling);
		setDisabled(targetExtrudeFreeRef, modelList.extrude, typing, isModeling);
		setDisabled(targetFinishFreeRef, modelList.none, typing, isModeling);
		setDisabled(targetCancelFreeRef, modelList.none, typing, isModeling);
	}, [typing, isModeling]);

	return (
		<div className="d-flex justify-content-center">
			<div className="card card-menu">
				<ModelButton handleClick={handleFree} target={targetFreeRef}></ModelButton>
			</div>
			<div className="card card-menu" style={{ display: showTool ? "flex" : "none" }}>
				<FinishModel
					handleFinish={handleFinish}
					target={targetFinishFreeRef}
					idTooltip={idTooltip}
				></FinishModel>
				<ToolButton
					title="Rectangle"
					handleClick={handleRectangle}
					target={targetRectFreeRef}
					idTooltip={idTooltip}
				>
					{<img src={imageFree.rect} alt="" />}
				</ToolButton>
				<ToolButton title="PolyGon" handleClick={handlePoly} target={targetPolyFreeRef} idTooltip={idTooltip}>
					{<img src={imageFree.poly} alt="" />}
				</ToolButton>
				<ToolButton
					title="Circle"
					handleClick={handleCircle}
					target={targetCircleFreeRef}
					idTooltip={idTooltip}
				>
					{<img src={imageFree.circle} alt="" />}
				</ToolButton>
				<ToolButton title="Arc" handleClick={handleArc} target={targetArcFreeRef} idTooltip={idTooltip}>
					{<img src={imageFree.arc} alt="" />}
				</ToolButton>
				<ToolButton
					title="Extrude"
					handleClick={handleExtrude}
					target={targetExtrudeFreeRef}
					idTooltip={idTooltip}
				>
					{<img src={imageFree.extrude} alt="" />}
				</ToolButton>
				<CancelModel
					handleCancel={handleCancel}
					target={targetCancelFreeRef}
					idTooltip={idTooltip}
				></CancelModel>
			</div>
		</div>
	);
};

export default ModelFreeMenu;
