import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import PatientDetailsTab from './PatientDetailsTab';

function SideBar(props) {
  const [sidebarWidth, setsidebarWidth] = useState("23vw");
  const [gotoReports, setGotoReports] = useState(false)

  return (
    <>
    <div className={props.isOpen ? "sidebar open" : "sidebar"} style={{width:sidebarWidth}}>
      <PatientDetailsTab 
        setsidebarWidth={setsidebarWidth}
        gotoReports={gotoReports}
        setGotoReports={setGotoReports}
      />
      <Button 
        variant="primary" 
        onClick={() => {
          props.toggleSidebar();
          if(sidebarWidth === '70vw') {
            setsidebarWidth('23vw')
            setGotoReports(!gotoReports)
          }
        }}
        className="sidebar-toggle"
      >
        click
      </Button>
    </div>
    </>
  )
}

export default SideBar
