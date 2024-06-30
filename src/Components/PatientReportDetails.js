import React from "react";
import { Table } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
function PatientReportDetails() {
  const width = 78;
  let cal = (78 * 8 - 100) / 100;
  let calpercentage = cal.toString() + "rem";
  let array=[{
    width:78
  },
  {
    width:100
  },
  {
    width:90
  },
  {
    width:55
  }];

  // array.map(index=>{
  //   console.log(index.width);
  // })
  return (
    <div className=" flex" style={{}}>
      <div className="d-flex flex-row gap-2" id="TotalMembers"style={{marginLeft:"10px"}}>
        <span  style={{ }}>Total Members:</span>
        <span className="text-muted"><u>970</u></span>
      </div>
      <div className="d-flex flex-row gap-3 justify-content-center" style={{marginLeft:"10px",marginRight:"10px" }}>
        <div className="d-flex flex-column col-6" >
          <span><hr style={{margin: "5px"}}/></span>
          <p
            className="mx-auto"
            style={{ color: "green", alignContent: "center"}}
          >
            <b >CAPTURED</b>
          </p>
          <div id="patient-reporting-details">      
            <Table style={{}}>
              <thead className="reporting-table-header1" style={{textAlign: "right"}}>
                <tr>
                  <td>HCCS</td>
                  <td>MEMBERS</td>
                  <td>AVG. SCORE</td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ textAlign: "right",fontSize:"13px" }}>
                  <td>1,210</td>
                  <td>
                    <a href="/">780</a>
                  </td>
                  <td>1.6</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="d-flex flex-column col-6" >
          <span><hr style={{margin: "5px"}}/></span>
          <p className="mx-auto" style={{ color: "darkblue"}}>
            <b >UNCAPTURED</b>
          </p>
          <div id="patient-reporting-details"> 
             <Table>
             <thead className="reporting-table-header1">
               <tr
                 style={
                   {
                    textAlign: "right"
                     // color: "grey",
                     // fontSize: "12px",
                     // border: "transparent",
                   }
                 }
               >
                 <td>HCCS</td>
                 <td>MEMBERS</td>
                 <td>AVG. SCORE</td>
               </tr>
             </thead>
             <tbody style={{fontSize:"12px"}}>
             
               <tr className="reporting-table-body">
                 <td>312</td>
                 <td>
                   <a href="/">190</a>
                 </td>
                 <td>0.7</td>
               </tr>
             </tbody>
           </Table>
          </div>
        </div>
      </div>
      <hr id="breakline"/>
      <div className="d-flex flex-row gap-2">
        <h6 className="reportingAlerts">Active Alerts</h6>
        {/* <h6 className="reportingAlerts">Active Alerts</h6> */}
      </div>
      <div className="container">
      {array.map((item, idx) => (
        <div className="hccsstableRow row" id="hccstable">
          <div className="col-6">
          
            <div>
              <div className="progressLable flex fw-bold">
                <span className="hcc12" style={{}}>
                  HCC12
                </span>
                <span
                  className="hccPercent"
                  style={{ marginLeft: calpercentage }}
                >
                  {item.width}%
                </span>
                {item.width !== 100 && <span className="hccRemainPercent col-3" style={{}}>
                 {100-item.width}%
                </span>}
              </div>
              <div className="wrapper">
                <div
                  className="peogressbarcontainer"
                  style={{ width: `${item.width}%` }}
                ></div>
              </div>
              <div>
                <span id="progressBarbottom_text">Breast, Prostate,and other Cancer Tumors</span>
              </div>
            </div>
          </div>
          <div className="col-6" id="hccstable">
            <Table>
              <thead className="reporting-table-header1">
                <tr style={{ textAlign: "right",
                fontSize:"13px"

              }}>
                  <td>HCCS</td>
                  <td>MEMBERS</td>
                  <td>AVG. SCORE</td>
                </tr>
              </thead>
              <tbody style={{ borderColor: "transparent" }}>
                <tr style={{ textAlign: "right" }}>
                  <td>1,210</td>
                  <td>
                    <a href="/">780</a>
                  </td>
                  <td>1.6</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default PatientReportDetails;
