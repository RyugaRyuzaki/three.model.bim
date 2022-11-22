import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const ModelButton = (props) => {
	const { handleClick, target } = props;

	const [show, setShow] = useState(false);

	return (
		<>
			<button
				className="btn menuItemBtn"
				ref={target}
				onMouseLeave={() => setShow(false)}
				onMouseMove={() => setShow(true)}
				onClick={handleClick}
			>
				{<FontAwesomeIcon icon={faEdit} size="lg" />}
			</button>
			<Overlay target={target.current} show={show} placement="bottom">
				{(props) => (
					<Tooltip id="modelFree" {...props}>
						Model
					</Tooltip>
				)}
			</Overlay>
		</>
	);
};

export default ModelButton;
