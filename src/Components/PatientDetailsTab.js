import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import PatientsGapsDetails from "./PatientsGapsDetails";
import PatientReportDetails from "./PatientReportDetails";
import { BrowserRouter, Routes, Route,Outlet, Link  } from "react-router-dom";
import { Button } from "react-bootstrap";
import ButtonDropper from "./PatientsGotoReports";
import PatientsGapAlerts from "./PatientsGapAlerts";
import PatientsGotoReports from "./PatientsGotoReports";

// export const setWidth="60vw"
const PatientDetailsTab = (props) => {
  const [firstvalue, setfirstvalue] = useState("");
  const [openAccordionItems, setOpenAccordionItems] = useState([0]);
  const [displayAccordion,setdisplayAccordion]=useState(false)
  const [isClicked, setIsclicked] = useState(false)

  const {setsidebarWidth, gotoReports, setGotoReports } = props;
  // const [gotoReports,setGotoReports] = useState(false)
  const handleAccordionToggle = (eventKey) => {
    setfirstvalue(eventKey);
    if (
      openAccordionItems.length === 3 &&
      !openAccordionItems.includes(eventKey)
    ) {
      return;
    }
    const nextOpenAccordionItems = [...openAccordionItems];
    if (nextOpenAccordionItems.includes(eventKey)) {
      setOpenAccordionItems(
        nextOpenAccordionItems.filter((key) => key !== eventKey)
      );
    } else {
      setOpenAccordionItems([...nextOpenAccordionItems, eventKey]);
    }
  };
  const handleGoToReports=()=>{
    setGotoReports(true)
    // {setsidebarWidth,setIsclicked}
    // setdisplayAccordion(true)
    if(setsidebarWidth) {
      setsidebarWidth("70vw");
    }
  }
  return (
    <>
    { gotoReports ? (
        <div><PatientsGotoReports setGotoReports={setGotoReports} setsidebarWidth={setsidebarWidth} /></div>
      ):
    isClicked ? (
        <div><PatientsGapAlerts /></div>
      ) : (
    <div>
      <Accordion
        // activeKey={openAccordionItems.length===1?["0"]:openAccordionItems}
        activeKey={firstvalue === "" ? "0" : openAccordionItems}
        onClick={console.log(openAccordionItems.length)}
        onSelect={handleAccordionToggle}
        >
        <Accordion.Item eventKey="0" className="accord-body">
          <Accordion.Header
                  style={{display:displayAccordion?"none":""}}
                  >
            <Container fluid className="d-flex flex-column " id="accordion-btn">
              <h5>Gaps(Coding,Documentation,Quality)</h5>
              <div className="d-flex gap-2">
                <span>Powered by</span>
                <span>Insightflow</span>
              </div>
            </Container>
          </Accordion.Header>
          <Accordion.Body id="accordBody"  style={{display:displayAccordion?"none":""}}>
            <PatientsGapsDetails setIsclicked={setIsclicked} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accord-body">
          <Accordion.Header style={{}}>
            <Container fluid className="d-flex flex-column" id="accordion-btn">
              <h5>Reporting</h5>
              <div className="d-flex">
                <div className="d-flex gap-2">
                <span>Powered by</span>
                <span className="">Insightflow</span>
                </div>
                {displayAccordion ? <Button id="BacktoDashboard"style={{}}>Back to Dashboard</Button>
                :
                <span className="GoToReports" onClick={handleGoToReports}>Go to Reports</span>}
              </div>
              {/* onClick={handleGoToReports} */}
            </Container>
          </Accordion.Header>
          <Accordion.Body 
        //   id= "accordBody"
          style={{backgroundColor:"transparent"}}
         id= {displayAccordion ? "setPaddingAccordBody":"accordBody"}
           >
               <PatientReportDetails name={displayAccordion} />

             <BrowserRouter>
            <Routes>
            <Route path="blogs" element={<PatientReportDetails />}/>
            </Routes>
            </BrowserRouter>
            {/* <PatientReportDetails  /> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="accord-body" style={{borderBottomColor:"transparent"}}>
          <Accordion.Header
                  style={{display:displayAccordion?"none":""}}
                  >
            <Container fluid className="d-flex flex-column" id="accordion-btn">
              <h5>Unsheduled</h5>
              <div className="d-flex gap-2">
                <span>Powered by</span>
                <span>Insightflow</span>
              </div>
            </Container>
          </Accordion.Header>
          <Accordion.Body id="accordBodyy"style={{display:displayAccordion?"none":"",borderBottomColor:"transparent"}}>
            <PatientsGapsDetails />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
      )}
    </>
  );
}

export default PatientDetailsTab;
