import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport, faPumpSoap } from "@fortawesome/free-solid-svg-icons";
import { ToolContext } from "../ToolContext";
import ToolButton from "../general/ToolButton";
import ListMaterial from "./ListMaterial";
import { imageExport } from "../general/ImageTool";
import "./ExportModel.css";
const ExportModelMenu = () => {
	const { listModel, handleShowListMaterial, handleExportBimModel, handleExportIfcModel } = useContext(ToolContext);
	const idTooltip = "export";
	const targetShowListMaterialRef = useRef(null);
	const targetExportBimRef = useRef(null);
	const targetExportIfcRef = useRef(null);
	useEffect(() => {
		targetExportBimRef.current.disabled = listModel.length == 0;
		targetExportIfcRef.current.disabled = listModel.length == 0;
	}, [listModel]);
	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="card card-menu">
					<ToolButton
						title="List Material"
						handleClick={handleShowListMaterial}
						target={targetShowListMaterialRef}
						idTooltip={idTooltip}
					>
						{<FontAwesomeIcon icon={faPumpSoap} size="lg" />}
					</ToolButton>
				</div>

				<div className="card card-menu">
					<ToolButton
						title="Export .bim"
						handleClick={handleExportBimModel}
						target={targetExportBimRef}
						idTooltip={idTooltip}
					>
						{<FontAwesomeIcon icon={faFileExport} size="lg" />}
					</ToolButton>
				</div>
				<div className="card card-menu">
					<ToolButton
						title="Export .ifc"
						handleClick={handleExportIfcModel}
						target={targetExportIfcRef}
						idTooltip={idTooltip}
					>
						{<img src={imageExport.ifc} alt="" />}
					</ToolButton>
				</div>
			</div>
			<ListMaterial></ListMaterial>
		</>
	);
};

export default ExportModelMenu;
