import Sidebar from './components/Sidebar';
import SwitchMode from './components/SwitchMode';
import Chatboard from './components/Chatboard';
import { useState } from 'react';
import { Container} from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import './style/main.css';
import './style/scrollbar.css';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="App">
      <Sidebar visible={sidebarVisible} toggleSidebar={toggleSidebar} />
      <Container style={{marginLeft: sidebarVisible ? '310px' : '0'}} className="container-main">
        <Container className="sidebar-toggle-button" onClick={toggleSidebar}>
          <FaBars />
        </Container>
        <Outlet />
      </Container>
      <SwitchMode />
      <Chatboard />
    </div>
  );
}

export default App;
