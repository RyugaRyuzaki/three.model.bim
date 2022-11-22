import React, { useState } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const FinishModel = (props) => {
	const { handleFinish, target, idTooltip } = props;
	const [show, setShow] = useState(false);
	return (
		<>
			<button
				className="btn menuItemBtn"
				ref={target}
				onMouseLeave={() => setShow(false)}
				onMouseMove={() => setShow(true)}
				onClick={handleFinish}
			>
				{<FontAwesomeIcon icon={faCheck} size="lg" />}
			</button>
			<Overlay target={target.current} show={show} placement="bottom">
				{(props) => (
					<Tooltip id={idTooltip + "finish"} {...props}>
						Finish
					</Tooltip>
				)}
			</Overlay>
		</>
	);
};

export default FinishModel;
