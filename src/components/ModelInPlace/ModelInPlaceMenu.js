import React, { useContext, useEffect, useRef, useState } from "react";
import { ToolContext } from "../ToolContext";
import ModelButton from "../general/ModelButton";
import ToolButton from "../general/ToolButton";
import { imageInPlace } from "../general/ImageTool";

const ModelInPlaceMenu = () => {
	const { modelType, handleExtrude, handleRevolve, handleSweep } = useContext(ToolContext);
	const idTooltip = "inPlace";
	const targetExtrudeRef = useRef(null);
	const targetRevolveRef = useRef(null);
	const targetSweepRef = useRef(null);
	useEffect(() => {
		targetExtrudeRef.current.disabled = modelType != null;
		targetRevolveRef.current.disabled = modelType != null;
		targetSweepRef.current.disabled = modelType != null;
	}, [modelType]);

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
		</div>
	);
};

export default ModelInPlaceMenu;
