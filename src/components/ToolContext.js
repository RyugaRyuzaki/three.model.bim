import React, { createContext, useState } from "react";
export const ToolContext = createContext();

export const ToolProvider = (props) => {
	const { children, documentModel } = props;
	const [modelType, setModelType] = useState(null);
	const handleFree = () => {
		setModelType(documentModel.modelFree);
	};
	const handleInPlace = () => {
		setModelType(documentModel.modelInPlace);
	};
	const handleFinish = () => {
		if (modelType) {
			modelType.finish((canCreate) => {
				if (canCreate) {
					setModelType(null);
				}
			});
		}
	};
	const handleCancel = () => {
		if (modelType) {
			modelType.cancel();
		}
		setModelType(null);
	};
	const value = {
		documentModel: documentModel,
		modelType: modelType,
		handleFree: handleFree,
		handleInPlace: handleInPlace,
		handleFinish: handleFinish,
		handleCancel: handleCancel,
	};
	return <ToolContext.Provider value={value}>{children}</ToolContext.Provider>;
};
