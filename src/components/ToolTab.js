import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ToolProvider } from "./ToolContext";
import ModelInPlaceMenu from "./ModelInPlace/ModelInPlaceMenu";
import ModelDetailMenu from "./ModelDetail/ModelDetailMenu";
import ModelingMenu from "./Modeling/ModelingMenu";
import MouseRight from "./MouseRight/MouseRight";
import PropertyModel from "./Property/PropertyModel";
import Modify from "./Modify/Modify";
import ExportModelMenu from "./ExportModel/ExportModelMenu";

const ToolTab = (props) => {
	const { documentModel } = props;
	const [tabType, setTabType] = useState(0);
	const handleSelectTab = (k) => {
		setTabType(k);
	};

	return (
		<ToolProvider documentModel={documentModel}>
			<div className="d-flex justify-content-between">
				<div className="toolTab" style={{ width: "50%" }}>
					<Tabs activeKey={tabType} onSelect={handleSelectTab} className="mb-3">
						{/* <Tab eventKey={0} title="Model Free">
							<ModelFreeMenu></ModelFreeMenu>
						</Tab> */}
						<Tab eventKey={0} title="Model In Place">
							<ModelInPlaceMenu></ModelInPlaceMenu>
						</Tab>
						<Tab eventKey={1} title="Model Detail">
							<ModelDetailMenu></ModelDetailMenu>
						</Tab>
						<Tab eventKey={2} title="Export Model">
							<ExportModelMenu></ExportModelMenu>
						</Tab>
					</Tabs>
				</div>
				<div className="toolTab" style={{ width: "20%" }}>
					<Tabs activeKey={0} className="mb-3">
						<Tab eventKey={0} title="Modeling">
							<ModelingMenu></ModelingMenu>
						</Tab>
					</Tabs>
				</div>
				<div className="toolTab" style={{ width: "30%" }}>
					<Modify></Modify>
				</div>
			</div>

			<MouseRight></MouseRight>
			<PropertyModel></PropertyModel>
		</ToolProvider>
	);
};

export default ToolTab;
