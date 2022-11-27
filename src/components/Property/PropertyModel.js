import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { ToolContext } from "../ToolContext";

const PropertyModel = () => {
	const { showPropertyModel, handleGeneratePropertyModel, handleCancelPropertyModel, documentModel } =
		useContext(ToolContext);
	const [property, setProperty] = useState(null);
	useEffect(() => {
		if (showPropertyModel && documentModel?.view?.selectModel) {
			setProperty(documentModel.view.selectModel);
		}
	}, [showPropertyModel]);
	useEffect(() => {
		if (property) {
			console.log(property);
		}
	}, [property]);
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
				<Modal.Title></Modal.Title>
			</Modal.Header>
			<Modal.Body></Modal.Body>
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
