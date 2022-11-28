import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkTab = (props) => {
	const { unit } = props;
	const [unitLabel, setUnitLabel] = useState(unit.m);
	const handleChangeUnit = (e) => {
		setUnitLabel(e.target.value);
		unit.onChange(e.target.value);
	};
	return (
		<div className="linkTab">
			<div className="d-flex justify-content-between">
				<div className="d-flex justify-content-between unit">
					<div className="unit-label">Unit</div>
					<select
						className="form-select"
						style={{ width: "60px" }}
						value={unitLabel}
						onChange={handleChangeUnit}
					>
						<option value={unit.m}>{unit.m}</option>
						<option value={unit.mm}>{unit.mm}</option>
					</select>
				</div>
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
