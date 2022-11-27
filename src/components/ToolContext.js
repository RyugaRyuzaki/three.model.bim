import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
			documentModel.evenClick((model) => {
				if (model) {
				} else {
					setShowMR(false);
				}
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
	const [showPropertyModel, setShowPropertyModel] = useState(false);
	const handlePropertyModel = () => {
		if (documentModel) {
			setShowPropertyModel(true);
			setShowMR(false);
		}
	};
	const handleGeneratePropertyModel = () => {
		if (documentModel) {
			setShowPropertyModel(false);
		}
	};
	const handleCancelPropertyModel = () => {
		if (documentModel) {
			setShowPropertyModel(false);
		}
	};
	const handleShowAllModel = () => {
		if (documentModel) {
			documentModel.handleShowAllModel();
			setShowMR(false);
		}
	};
	const [modelType, setModelType] = useState(null);
	const [showProfile, setShowProfile] = useState(false);
	const [profile, setProfile] = useState(null);

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
		if (!profile) {
			if (window.confirm("Can not create Extrude! \n Do you want to continue? ")) {
			} else {
				setModelType(null);
				setShowProfile(false);
				refreshModelingType(dispatch);
			}
		} else {
			if (deepExtrude <= 0) {
				alert("Deep is invalid, please try again");
				return;
			}
			if (modelType) {
				modelType.createExtrude(profile, deepExtrude, documentModel.workPlane.plane);
				modelType.dispose();
			}
			setModelType(null);
			setProfile(null);
			setShowProfile(false);
			refreshModelingType(dispatch);
		}
	};
	const handleCancel = () => {
		setModelType(null);
		setProfile(null);
		setShowProfile(false);
		refreshModelingType(dispatch);
	};
	const handleShowProfile = () => {
		setShowProfile(true);
	};
	const handleFinishProfile = () => {
		if (modelType) {
			modelType.canCreateProfile((lines) => {
				if (!lines) {
					alert("Can not create a profile");
				} else {
					setShowProfile(false);
					setProfile(lines);
					refreshModelingType(dispatch);
				}
			});
		}
	};
	const handleCancelProfile = () => {
		setShowProfile(false);
		setProfile(null);
		if (modelType) {
			modelType.dispose();
			refreshModelingType(dispatch);
		}
	};
	const [deepExtrude, setDeepExtrude] = useState(0);
	const handleChangeDeepExtrude = (e) => {
		if (isNaN(parseFloat(e.target.value * 1.0))) {
			setDeepExtrude(0);
		} else {
			setDeepExtrude(e.target.value);
		}
	};
	//#region workPlane
	const [showWorkPlane, setShowWorkPlane] = useState(false);
	const [pickWorkPlane, setPickWorkPlane] = useState(false);
	const [workPlaneType, setWorkPlaneType] = useState(documentModel.workPlane.listWorkPlanes[0].type);
	const handleSetWorkPlane = () => {
		setPickWorkPlane(!pickWorkPlane);
	};
	const handleApplyWorkPlane = () => {
		documentModel.workPlane.setWorkPlane(workPlaneType);
		setShowWorkPlane(true);
	};
	const handleOnChangeWorkPlaneType = (e) => {
		setWorkPlaneType(e.target.value);
	};
	const handleShowWorkPlane = () => {
		setShowWorkPlane(!showWorkPlane);
	};
	useEffect(() => {
		documentModel.workPlane.showWorkPlane(showWorkPlane);
	}, [showWorkPlane]);

	//#endregion
	const value = {
		documentModel: documentModel,
		modelType: modelType,
		showProfile: showProfile,
		handleExtrude: handleExtrude,
		handleSweep: handleSweep,
		handleRevolve: handleRevolve,
		handleGrid: handleGrid,
		handleLevel: handleLevel,
		handleFinish: handleFinish,
		handleCancel: handleCancel,
		handleShowProfile: handleShowProfile,
		handleFinishProfile: handleFinishProfile,
		handleCancelProfile: handleCancelProfile,
		deepExtrude: deepExtrude,
		handleChangeDeepExtrude: handleChangeDeepExtrude,
		showMR: showMR,
		visibilityMR: visibilityMR,
		handleDeleteModel: handleDeleteModel,
		handleHideModel: handleHideModel,
		handlePropertyModel: handlePropertyModel,
		handleShowAllModel: handleShowAllModel,
		showPropertyModel: showPropertyModel,
		handleGeneratePropertyModel: handleGeneratePropertyModel,
		handleCancelPropertyModel: handleCancelPropertyModel,

		pickWorkPlane: pickWorkPlane,
		workPlaneType: workPlaneType,
		handleSetWorkPlane: handleSetWorkPlane,
		handleApplyWorkPlane: handleApplyWorkPlane,
		handleOnChangeWorkPlaneType: handleOnChangeWorkPlaneType,
		handleShowWorkPlane: handleShowWorkPlane,
	};
	return <ToolContext.Provider value={value}>{children}</ToolContext.Provider>;
};
