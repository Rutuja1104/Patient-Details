import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBar from './Components/SideBar';

 
function App(props) {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <div >
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </div>
  );
}

export default App;
