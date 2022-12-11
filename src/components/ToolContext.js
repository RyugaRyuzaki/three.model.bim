import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawList } from "../doc/model";
import { refreshModelingType, setModelingType } from "./general/setModeling";
export const ToolContext = createContext();

export const ToolProvider = (props) => {
	const { children, documentModel } = props;
	const drawing = useSelector((state) => state.model?.drawing);
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
			documentModel.evenDoubleClick((isModel) => {
				setShowPropertyModel(isModel);
			});
		}
	}, []);
	useEffect(() => {
		if (documentModel) {
			documentModel.view.drawing = drawing;
		}
	}, [drawing]);

	const handleDeleteModel = () => {
		if (documentModel) {
			documentModel.handleDeleteModel();
			if (modelType) {
				modelType.listProfile.splice(modelType.listProfile.indexOf(selectModel), 1);
			}
			documentModel.models = documentModel.models.splice(documentModel.models.indexOf(selectModel), 1);
			setListModel([...documentModel.models]);
			setShowMR(false);
		}
	};
	const handleHideModel = () => {
		if (documentModel) {
			documentModel.handleHideModel();
			setShowMR(false);
		}
	};

	const handleShowAllModel = () => {
		if (documentModel) {
			documentModel.handleShowAllModel();
			setShowMR(false);
		}
	};
	//#endregion
	//#region modeltype
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
				modelType.createExtrude(profile, deepExtrude, documentModel.workPlane.plane, listMaterial[0]);
				modelType.dispose();
				setListModel([...documentModel.models]);
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
	//#endregion
	//#region Profile
	const [showProfile, setShowProfile] = useState(false);
	const [profile, setProfile] = useState(null);
	const handleShowProfile = () => {
		setShowProfile(true);
		setShowWorkPlane(true);
		if (profile && modelType) {
			modelType.showProfile(profile);
		}
	};
	const handleFinishProfile = () => {
		if (modelType) {
			modelType.canCreateProfile((result, profile) => {
				if (!result) {
					alert("Can not create a profile");
				} else {
					setShowProfile(false);
					setProfile(profile);
					refreshModelingType(dispatch);
				}
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
	//#region extrude
	const [deepExtrude, setDeepExtrude] = useState(2);
	const handleChangeDeepExtrude = (e) => {
		if (isNaN(parseFloat(e.target.value * 1.0))) {
			setDeepExtrude(0);
		} else {
			setDeepExtrude(e.target.value);
		}
	};
	//#endregion
	//#region workPlane
	const [showWorkPlane, setShowWorkPlane] = useState(false);
	const [pickWorkPlane, setPickWorkPlane] = useState(false);
	const [workPlaneType, setWorkPlaneType] = useState(documentModel.workPlane.listWorkPlanes[0].type);
	const handleSetWorkPlane = () => {
		setPickWorkPlane(!pickWorkPlane);
	};
	const handleApplyWorkPlane = () => {
		setModelingType(drawList.workPlane, dispatch);
		documentModel.workPlane.setWorkPlane(workPlaneType, () => {
			setShowWorkPlane(true);
			setPickWorkPlane(false);
			refreshModelingType(dispatch);
		});
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
	//#region export
	const [showListMaterial, setShowListMaterial] = useState(false);
	const [listModel, setListModel] = useState([...documentModel.models]);
	const [listMaterial, setListMaterial] = useState([...documentModel.materials]);

	const handleShowListMaterial = () => {
		setShowListMaterial(!showListMaterial);
	};
	const handleAddMaterial = () => {
		documentModel.addMaterial();
		setListMaterial([...documentModel.materials]);
	};
	const handleExportBimModel = () => {
		if (documentModel) {
			if (listModel.length == 0) {
				alert("No Model to export.");
				return;
			}
			documentModel.exportBim.exportModels(listModel);
		}
	};
	const handleExportIfcModel = () => {
		if (documentModel) {
			console.log("first");
		}
	};
	//#endregion
	//#region Property
	const [showPropertyModel, setShowPropertyModel] = useState(false);
	const handlePropertyModel = (e) => {
		var uuid = e.target.getAttribute("uuid");
		if (!uuid) return;
		if (documentModel) {
			var model = documentModel.getModelById(uuid);
			if (model) {
				setSelectModel(model);
				setShowPropertyModel(true);
			}
		}
	};

	const handleGeneratePropertyModel = () => {
		if (documentModel) {
			console.log(selectModel);
			setShowPropertyModel(false);
		}
	};
	const handleCancelPropertyModel = () => {
		if (documentModel) {
			setShowPropertyModel(false);
		}
	};

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
		handleShowAllModel: handleShowAllModel,

		pickWorkPlane: pickWorkPlane,
		workPlaneType: workPlaneType,
		handleSetWorkPlane: handleSetWorkPlane,
		handleApplyWorkPlane: handleApplyWorkPlane,
		handleOnChangeWorkPlaneType: handleOnChangeWorkPlaneType,
		handleShowWorkPlane: handleShowWorkPlane,
		selectModel: selectModel,

		listModel: listModel,
		listMaterial: listMaterial,
		showListMaterial: showListMaterial,
		handleShowListMaterial: handleShowListMaterial,
		handleAddMaterial: handleAddMaterial,

		showPropertyModel: showPropertyModel,
		handlePropertyModel: handlePropertyModel,
		handleGeneratePropertyModel: handleGeneratePropertyModel,
		handleCancelPropertyModel: handleCancelPropertyModel,
		handleExportBimModel: handleExportBimModel,
		handleExportIfcModel: handleExportIfcModel,
	};
	return <ToolContext.Provider value={value}>{children}</ToolContext.Provider>;
};
