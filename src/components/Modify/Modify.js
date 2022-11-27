import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ModifyMenu from "./ModifyMenu";
import WorkPlaneMenu from "./WorkPlaneMenu";

const Modify = () => {
	const [tabType, setTabType] = useState(0);
	const handleSelectTab = (k) => {
		setTabType(k);
	};
	return (
		<Tabs activeKey={tabType} className="mb-3" onSelect={handleSelectTab}>
			<Tab eventKey={0} title="Work Plane">
				<WorkPlaneMenu></WorkPlaneMenu>
			</Tab>
			<Tab eventKey={1} title="Modify">
				<ModifyMenu></ModifyMenu>
			</Tab>
		</Tabs>
	);
};

export default Modify;
