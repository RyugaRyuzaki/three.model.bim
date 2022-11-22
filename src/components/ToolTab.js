import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ToolProvider } from "./ToolContext";
import ModelFreeMenu from "./ModelFree/ModelFreeMenu";
import ModelInPlaceMenu from "./ModelInPlace/ModelInPlaceMenu";

const ToolTab = (props) => {
	const { documentModel } = props;
	const [tabType, setTabType] = useState(0);
	const handleSelectTab = (k) => {
		setTabType(k);
	};
	return (
		<ToolProvider documentModel={documentModel}>
			<Tabs activeKey={tabType} onSelect={handleSelectTab} className="mb-3">
				<Tab eventKey={0} title="Model Free">
					<ModelFreeMenu></ModelFreeMenu>
				</Tab>
				<Tab eventKey={1} title="Model In Place">
					<ModelInPlaceMenu></ModelInPlaceMenu>
				</Tab>
			</Tabs>
		</ToolProvider>
	);
};

export default ToolTab;
