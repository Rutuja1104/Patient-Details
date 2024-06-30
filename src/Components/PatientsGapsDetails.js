import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "../assets/sidebar.css";
// import { BrowserRouter, Routes, Route,Outlet, Link  } from "react-router-dom";
import { BrowserRouter,Routes, Switch, Route, Link } from "react-router-dom";
// import { createMemoryHistory } from "history";
import { createMemoryRouter } from "react-router-dom";

import ButtonDropper from "./PatientsGotoReports";
import PatientsGapAlerts from "./PatientsGapAlerts";

function PatientsGapsDetails(props) {
  // const history = createMemoryRouter();

  const [newPage,setNewPage]=useState(false);
  const GapAlerts=()=>{
    console.log("GapAlerts");
    <ButtonDropper/>
  }
  return (
     <div id="patient-gap-details">
      <div style={{ padding: "1px" }}>
        <p className="activeAlerts">ACTIVE ALERTS: 5</p>
        <Table>
          <thead>
            <tr style={{textAlign:"left",fontWeight: "bold"}}>
              <th style={{ width: "0px" }}></th>
              <td style={{ color: "gray",  }}>NAME</td>
              <td style={{ color: "darkblue" }}>
                UNCAPTURED
              </td>
              <td style={{ color: "lightgreen" }}>
                CAPTURED
              </td>
            </tr>
          </thead>
          <tbody className="patientGapTable">
            {["", "", "", "", ""].map((item, idx) => (
              <tr key={`gap-${idx}`}>
                {/* <td className={(idx === 0 || idx === 1) ? 'red-flag' : 'yellow-flag'} style={{background:(idx==0 ||idx==1)? 'red':'yellow',width:"1px",maxWidth:"1px",minWidth:"1px"}}>&nbsp;</td> */}
                <td
                  className={
                    idx === 0 || idx === 1 ? "red-flag" : "yellow-flag"
                  }
                  // const result = condition1 ? value1 : condition2 ? value2 : value3;
                  id={idx === 0 || idx === 1 ? "nameRedFlag"  : idx===4 ? "nameGreenFlag": "nameYellowFlag"}
                ></td>
                <td style={{cursor:"pointer"}}>
                <p onClick={()=>{props.setIsclicked(true)}} style={{marginBottom: "0rem"}} ><u>Bachus,Manie</u></p>
                </td>
                <td>3 Gaps</td>
                <td>2 Gaps</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PatientsGapsDetails;
