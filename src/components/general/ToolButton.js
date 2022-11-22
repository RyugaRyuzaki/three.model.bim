import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

const ToolButton = (props) => {
	const { title, handleClick, target, idTooltip } = props;
	const [showTooltip, setShowTooltip] = useState(false);
	return (
		<div>
			<button
				className="btn menuItemBtn"
				ref={target}
				onMouseLeave={() => setShowTooltip(false)}
				onMouseMove={() => setShowTooltip(true)}
				onClick={handleClick}
			>
				{props.children}
			</button>
			<Overlay target={target.current} show={showTooltip} placement={"bottom"}>
				{(props) => (
					<Tooltip id={idTooltip + "drawTooltip"} {...props}>
						{title}
					</Tooltip>
				)}
			</Overlay>
		</div>
	);
};

export default ToolButton;
