import React, { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshModelingType } from "./general/setModeling";
export const ToolContext = createContext();

export const ToolProvider = (props) => {
	const { children, documentModel } = props;
	const [showMR, setShowMR] = useState(false);
	const [visibilityMR, setVisibilityMR] = useState({ top: 0, left: 0, showAll: false });
	const dispatch = useDispatch();
	useEffect(() => {
		if (documentModel) {
			documentModel.evenMouseDown((show, vis) => {
				setShowMR(show);
				setVisibilityMR(vis);
			});
		}
	}, []);
	const handleDeleteModel = () => {
		if (documentModel) {
			documentModel.handleDeleteModel();
			setShowMR(false);
		}
	};
	const handleHideModel = () => {
		if (documentModel) {
			documentModel.handleHideModel();
			setShowMR(false);
		}
	};
	const handleMoveModel = () => {};
	const handleShowAllModel = () => {
		if (documentModel) {
			documentModel.handleShowAllModel();
			setShowMR(false);
		}
	};
	const [modelType, setModelType] = useState(null);

	const handleExtrude = () => {
		setModelType(documentModel.extrude);
	};
	const handleSweep = () => {
		setModelType(documentModel.sweep);
	};
	const handleRevolve = () => {
		setModelType(documentModel.revolve);
	};
	const handleGrid = () => {
		setModelType(documentModel.grid);
	};
	const handleLevel = () => {
		setModelType(documentModel.level);
	};
	const handleFinish = () => {
		setModelType(null);
		refreshModelingType(dispatch);
	};
	const handleCancel = () => {
		setModelType(null);
		refreshModelingType(dispatch);
	};
	const value = {
		documentModel: documentModel,
		modelType: modelType,
		handleExtrude: handleExtrude,
		handleSweep: handleSweep,
		handleRevolve: handleRevolve,
		handleGrid: handleGrid,
		handleLevel: handleLevel,
		handleFinish: handleFinish,
		handleCancel: handleCancel,
		showMR: showMR,
		visibilityMR: visibilityMR,
		handleDeleteModel: handleDeleteModel,
		handleHideModel: handleHideModel,
		handleMoveModel: handleMoveModel,
		handleShowAllModel: handleShowAllModel,
	};
	return <ToolContext.Provider value={value}>{children}</ToolContext.Provider>;
};
