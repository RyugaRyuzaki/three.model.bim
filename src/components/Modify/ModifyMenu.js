import React, { useContext, useEffect, useRef, useState } from "react";
import ToolButton from "../general/ToolButton";
import { ToolContext } from "../ToolContext";
import { imageModify } from "../general/ImageTool";
import { setDisabled, setModelingType, refreshModelingType } from "../general/setModeling";
import { useDispatch, useSelector } from "react-redux";
import { drawList, ModelTypeClass } from "../../doc/model";

const ModifyMenu = () => {
	const drawing = useSelector((state) => state.model?.drawing);
	const isModeling = useSelector((state) => state.model?.isModeling);
	const dispatch = useDispatch();
	const { view } = useContext(ToolContext);

	const idTooltip = "modify";
	const targetAlignRef = useRef(null);
	const targetTrimRef = useRef(null);
	const targetExtendRef = useRef(null);
	const targetCopyRef = useRef(null);
	useEffect(() => {
		setDisabled(targetAlignRef, drawList.align, drawing, isModeling);
		setDisabled(targetTrimRef, drawList.trim, drawing, isModeling);
		setDisabled(targetExtendRef, drawList.extend, drawing, isModeling);
		setDisabled(targetCopyRef, drawList.copy, drawing, isModeling);
	}, [drawing, isModeling]);
	//#region Modify
	const handleAlignModify = (e) => {};
	const handleTrimModify = (e) => {};
	const handleExtendModify = (e) => {};
	const handleCopyModify = (e) => {
		setModelingType(drawList.copy, dispatch);
		ModelTypeClass.modifyCopyElement(targetCopyRef.current, view, () => {
			refreshModelingType(dispatch);
		});
	};
	//#endregion
	return (
		<div className="d-flex justify-content-center">
			<div className="card card-menu">
				<ToolButton title="Align" handleClick={handleAlignModify} target={targetAlignRef} idTooltip={idTooltip}>
					{<img src={imageModify.align} alt="" />}
				</ToolButton>
				<ToolButton title="Trim" handleClick={handleTrimModify} target={targetTrimRef} idTooltip={idTooltip}>
					{<img src={imageModify.trim} alt="" />}
				</ToolButton>
				<ToolButton
					title="Extend"
					handleClick={handleExtendModify}
					target={targetExtendRef}
					idTooltip={idTooltip}
				>
					{<img src={imageModify.extend} alt="" />}
				</ToolButton>
				<ToolButton title="Copy" handleClick={handleCopyModify} target={targetCopyRef} idTooltip={idTooltip}>
					{<img src={imageModify.copy} alt="" />}
				</ToolButton>
			</div>
		</div>
	);
};

export default ModifyMenu;
