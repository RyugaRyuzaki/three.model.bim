import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshModelingType } from "./general/setModeling";
export const ToolContext = createContext();

export const ToolProvider = (props) => {
	const { children, documentModel } = props;
	//#region MouseRight
	const [showMR, setShowMR] = useState(false);
	const [visibilityMR, setVisibilityMR] = useState({ top: 0, left: 0, showAll: false });
	const [selectModel, setSelectModel] = useState(null);
	const dispatch = useDispatch();
	useEffect(() => {
		if (documentModel) {
			documentModel.evenMouseDown((show, vis) => {
				setShowMR(show);
				setVisibilityMR(vis);
			});
			documentModel.evenClick((model) => {
				setSelectModel(model);
				setShowMR(false);
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
	//#endregion
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
		if (!profile) {
			if (window.confirm("Can not create Extrude!\nDo you want to continue? ")) {
				return;
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
	//#region Profile
	const [showProfile, setShowProfile] = useState(false);
	const [profile, setProfile] = useState(null);
	const handleShowProfile = () => {
		setShowProfile(true);
	};
	const handleFinishProfile = () => {
		if (modelType) {
			modelType.canCreateProfile((profile) => {
				// if (!profile) {
				// 	alert("Can not create a profile");
				// }
				console.log(profile);
				// modelType.dispose();
				setShowProfile(false);
				setProfile(profile);
				refreshModelingType(dispatch);
			});
		}
	};
	const handleCancelProfile = () => {
		if (modelType) {
			modelType.dispose();
			setShowProfile(false);
			setProfile(null);
			refreshModelingType(dispatch);
		}
	};
	//#endregion
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
		setPickWorkPlane(false);
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
		view: documentModel.view,
		factor: documentModel.unit.factor,
		modelType: modelType,
		profile: profile,
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
		selectModel: selectModel,
	};
	return <ToolContext.Provider value={value}>{children}</ToolContext.Provider>;
};
