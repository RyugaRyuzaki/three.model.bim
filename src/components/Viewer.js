import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog } from "@fortawesome/free-solid-svg-icons";
import { DocumentModel } from "../doc/DocumentModel";
import ToolTab from "./ToolTab";
import SettingPanel from "./SettingPanel";

const Viewer = () => {
	const mainView = useRef(null);
	const mainCanvas = useRef(null);
	const cubeView = useRef(null);
	const cubeCanvas = useRef(null);
	const [documentModel, setDocumentModel] = useState(null);
	useEffect(() => {
		var model = new DocumentModel(mainView.current, mainCanvas.current, cubeView.current, cubeCanvas.current);
		setDocumentModel(model);
	}, []);
	const [showGUI, setShowGUI] = useState(false);
	return (
		<>
			<div className="mainView" ref={mainView}>
				<canvas ref={mainCanvas}></canvas>
				<div className="cubeView" ref={cubeView}>
					<div className="cubeViewHome">
						<button className="btn" id="cubeViewHome">
							{<FontAwesomeIcon icon={faHome} size="lg" />}
						</button>
					</div>
					<div className="cubeViewSetting">
						<button className="btn" id="cubeViewSetting" onClick={(e) => setShowGUI(!showGUI)}>
							{<FontAwesomeIcon icon={faCog} size="lg" />}
						</button>
					</div>

					<canvas ref={cubeCanvas}></canvas>
				</div>
			</div>
			{documentModel ? (
				<>
					<ToolTab documentModel={documentModel}></ToolTab>
					<SettingPanel showGUI={showGUI} documentModel={documentModel}></SettingPanel>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default Viewer;
