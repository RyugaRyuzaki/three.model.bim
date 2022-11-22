import React, { useState } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
const CancelModel = (props) => {
	const { handleCancel, target, idTooltip } = props;
	const [show, setShow] = useState(false);
	return (
		<>
			<button
				className="btn menuItemBtn"
				ref={target}
				onMouseLeave={() => setShow(false)}
				onMouseMove={() => setShow(true)}
				onClick={handleCancel}
			>
				{<FontAwesomeIcon icon={faWindowClose} size="lg" />}
			</button>
			<Overlay target={target.current} show={show} placement="bottom">
				{(props) => (
					<Tooltip id={idTooltip + "cancel"} {...props}>
						Cancel
					</Tooltip>
				)}
			</Overlay>
		</>
	);
};

export default CancelModel;
