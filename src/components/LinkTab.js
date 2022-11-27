import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkTab = () => {
	return (
		<div className="linkTab">
			<div className="d-flex justify-content-between">
				<a className="btn" href="https://github.com/RyugaRyuzaki/three.model.bim">
					<FontAwesomeIcon icon="fab fa-github" size="lg" />
				</a>
				<a className="btn" href="https://www.linkedin.com/in/ryuga-ryuzaki-479b36186/">
					<FontAwesomeIcon icon="fab fa-linkedin" size="lg" />
				</a>
				<a className="btn" href="https://www.youtube.com/channel/UCQSwGw2vUjad7kUhEOXbqaw">
					<FontAwesomeIcon icon="fab fa-youtube" size="lg" />
				</a>
			</div>
		</div>
	);
};

export default LinkTab;
