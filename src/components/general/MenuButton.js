import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

const MenuButton = (props) => {
	const { title, idTooltip, handleClick, place, toggle } = props;
	const [show, setShow] = useState(false);
	const target = useRef(null);

	return (
		<>
			<button
				className={toggle ? "btn menuItemBtn menuItemBtn-active" : "btn menuItemBtn"}
				ref={target}
				onMouseLeave={() => setShow(false)}
				onMouseMove={() => setShow(true)}
				onClick={handleClick}
			>
				{props.children}
			</button>
			<Overlay target={target.current} show={show} placement={place}>
				{(props) => (
					<Tooltip id={idTooltip} {...props}>
						{title}
					</Tooltip>
				)}
			</Overlay>
		</>
	);
};

export default MenuButton;
