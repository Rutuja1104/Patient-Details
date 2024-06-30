import React from 'react'
import { Container, Table } from 'react-bootstrap'

const PatientsGapAlerts = () => {
  return (
    <div className='PatientsGapAlerts'>
      <div className='gapsAlerts'>
      <Container fluid className="d-flex flex-column " id="gapsAlertsContainer">
      <div className='gapAlert'>Gap Alerts</div>
              <div className="gapAlertsPoweredby d-flex gap-2">
                <span>Powered by</span>
                <span>Insightflow</span>
              </div>
            </Container>
      </div>
      <div>
      <p className="activeAlerts">ACTIVE ALERTS</p>
      <Table style={{textAlign:"center", borderColor:"transparent"}}>
          <thead>
            <tr style={{fontWeight: "100"}}>
              <th style={{ color: "gray" }}></th>
              <th style={{ color: "darkblue" }}>
                UNCAPTURED
              </th>
              <th style={{ color: "lightgreen" }}>
                CAPTURED
              </th>
            </tr>
          </thead>
          <tbody className="patientGapTable" style={{textAlign:"center",fontSize:"14px"}}>
            <tr>
                <td>Bachus,Manie</td>
                <td style={{color:"#0d6efd"}}>3 Gaps</td>
                <td style={{color:"#0d6efd"}}>2 Gaps</td>
            </tr>
          </tbody>
        </Table>
        <div className='evenGapAlerts'>E11.9: Type 2 diabetes without complicarions</div>
        <div className='bottomBorderGapAlerts'/>
        <div className='oddGapAlerts'>E66.01: Morbid Obesity</div>
        <div className='bottomBorderGapAlerts'/>
        <div className='evenGapAlerts'>N18.4: Servere Chronic Kidney Disease</div>
       </div>
    </div>
  )
}

export default PatientsGapAlerts
