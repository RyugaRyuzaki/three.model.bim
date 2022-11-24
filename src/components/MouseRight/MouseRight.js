import React, { useContext } from "react";
import { ToolContext } from "../ToolContext";
const MouseRight = () => {
	const { showMR, visibilityMR, handleDeleteModel, handleHideModel, handleMoveModel, handleShowAllModel } =
		useContext(ToolContext);

	const styleMouseRight = () => {
		return {
			display: showMR ? "block" : "none",
			top: visibilityMR.top + "px",
			left: visibilityMR.left + "px",
		};
	};
	const styleElement = (show) => {
		return {
			display: show ? "block" : "none",
		};
	};
	return (
		<div className="card mouseRight" style={styleMouseRight()}>
			<div className="card-body">
				<button className="btn" onClick={handleDeleteModel} style={styleElement(!visibilityMR.showAll)}>
					Delete
				</button>
				<button className="btn" onClick={handleHideModel} style={styleElement(!visibilityMR.showAll)}>
					Hide
				</button>
				<button className="btn" onClick={handleMoveModel} style={styleElement(!visibilityMR.showAll)}>
					Move
				</button>
				<button className="btn" onClick={handleShowAllModel} style={styleElement(visibilityMR.showAll)}>
					Show All
				</button>
			</div>
		</div>
	);
};

export default MouseRight;
