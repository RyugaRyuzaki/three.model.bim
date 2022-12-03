import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { ToolContext } from "../ToolContext";
import MaterialModel from "./MaterialModel";

const PropertyModel = () => {
	const { selectModel, showPropertyModel, handleGeneratePropertyModel, handleCancelPropertyModel } =
		useContext(ToolContext);

	return (
		<Modal
			size="sm"
			show={showPropertyModel}
			animation={true}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			backdrop="static"
			keyboard={false}
		>
			<Modal.Header>
				<Modal.Title>
					<div className="property-model-title">uuid : {selectModel?.uuid}</div>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<MaterialModel></MaterialModel>
			</Modal.Body>
			<Modal.Footer>
				<button className="btn btn-secondary" onClick={handleCancelPropertyModel}>
					Cancel
				</button>
				<button className="btn btn-primary" onClick={handleGeneratePropertyModel}>
					OK
				</button>
			</Modal.Footer>
		</Modal>
	);
};

export default PropertyModel;
