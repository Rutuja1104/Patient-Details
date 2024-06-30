import React from 'react'
import { Button, Container } from 'react-bootstrap'
import PatientReportDetails from './PatientReportDetails'

const PatientsGotoReports = (props) => {
  const handleGoToReports=()=>{
    props.setGotoReports(false)
    if(props.setsidebarWidth) {
        props.setsidebarWidth("26vw");
    }
  }
  return (
  <div className='gapsAlerts'>
      <div className='d-flex' id="gapsAlertsContainer">
        <div className="d-flex flex-column">
          <div className='gapAlert '>Reporting</div>
          <div className="gapAlertsPoweredby d-flex  flex-row gap-2">
            <span>Powered by</span>
            <span>Insightflow</span>
          </div>
        </div>
        <div className='d-flex justify-content-end'>
          <Button className="BacktoDashboard" id='backtoDash' style={{paddingRight:"20px"}} onClick={handleGoToReports}>
                <span>Back to Dashboard &nbsp; <span id='arrowgapsAlerts'> &nbsp; &nbsp; &nbsp;</span></span>
          </Button>
        </div>
      </div>
      <div className='gapsAlertsBody d-flex flex-column'>
        <h1 className='ExampleResports ' style={{}}>Example Reports/Dashboard Page</h1>
        <div className='dashboardReportDetails'>
          <PatientReportDetails className=""/>
        </div>
      </div>
  </div>
  )
}

export default PatientsGotoReports

