import { Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import Details from "./IncidentScreen/Details";
import Links from "./IncidentScreen/Links";
import CustomFields from "./IncidentScreen/CustomFields";
import InvestigatorNote from "./IncidentScreen/InvestigatorNote";
import Attachments from "./IncidentScreen/Attachments";
import '../style/incident.css';

const IncidentScreen = () => {
    const [key, setKey] = useState('Details');

    return(
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="m-3"    
        >
            <Tab eventKey="Details" title="Details">
                <Details />
            </Tab>
            <Tab eventKey="CustomFields" title="CustomFields">
                <CustomFields />
            </Tab>
            <Tab eventKey="Investigator Notes" title="Investigator Notes">
                <InvestigatorNote />
            </Tab>
            <Tab eventKey="Attachments" title="Attachments">
                <Attachments />
            </Tab>
            <Tab eventKey="Links" title="Links">
                <Links />
            </Tab>
        </Tabs>
    )
}

export default IncidentScreen;