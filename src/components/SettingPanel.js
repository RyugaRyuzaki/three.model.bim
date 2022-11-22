import React, { useEffect, useRef } from "react";

const SettingPanel = (props) => {
	const { showGUI, documentModel } = props;
	const guiRef = useRef(null);
	useEffect(() => {
		documentModel?.settingModel.init(documentModel, guiRef.current);
	}, []);
	return (
		<>
			<div id="guiID" ref={guiRef} className="guiID" style={{ display: showGUI ? "block" : "none" }}></div>
		</>
	);
};

export default SettingPanel;
