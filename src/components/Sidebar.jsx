import { Stack, Container, Row, Col, Accordion, useAccordionButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/sidebar.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiNotePencil } from 'react-icons/pi';
import { VscTools } from "react-icons/vsc";
import { TbSettings } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { Fragment } from 'react';

const items = [
  {title: "Dashboard",},
  {title: "Register", subitems: ["Address", "Assessment", "Decision", "Event", "Incident", "Intelligence", "Material", "Organization", "Outcome", "Person", "Staff", "Statement", "Vehicle"]},
  {title: "Tools"},
  {title: "Settings"},
]

const IconComponent = ({ iconName }) => {
  switch (iconName) {
    case 'Dashboard':
      return <LuLayoutDashboard />;
    case 'Register':
      return <PiNotePencil />;
    case 'Tools':
      return <VscTools />;
    case 'Settings':
      return <TbSettings />;
    default:
      return null;
  }
};

const CustomToggle = ({children, eventKey}) => {
  const handleClick = useAccordionButton(eventKey);

  return(
    <div className="mainitem" onClick={handleClick}>
      {children}
    </div>
  );
}

const Sidebar = ({ visible, toggleSidebar }) => {
  return (
    <Container
      style={{
        width: visible ? '310px' : '0',
      }} className="sidebar-main"
    >
      <Row>
        <Col>
          <Stack direction="horizontal">
            <div className="mx-auto pt-2"><h1>P S I G</h1></div>
          </Stack>
          <hr/>
          <Accordion flush>
            {
              items.map((item, idx) => item.subitems ? 
                <Fragment key={idx}>
                  <CustomToggle eventKey={idx}>
                    <h4 style={{cursor:'pointer', fontWeight:"bolder"}} className='d-flex align-items-end'>
                      <IconComponent iconName={item.title} />
                      <span style={{paddingLeft: '0.8rem'}}>{item.title}</span>
                      <IoIosArrowDown style={{marginLeft:"auto"}} className="arrow-icon" id="arrow"/>
                    </h4>
                  </CustomToggle>
                  <Accordion.Collapse eventKey={idx}>
                    <Stack className="ps-4 pt-1 pb-1">
                      {
                        item.subitems.map((subitem) => 
                          <div key={subitem} className="subitem">
                            <Link to={"/"+item.title.toLowerCase()+"/"+subitem.toLowerCase()} 
                              className="items"><h5>{subitem}</h5></Link>
                          </div>)
                      }
                    </Stack>
                  </Accordion.Collapse>
                </Fragment>
                :
                <CustomToggle key={item.title} eventKey={idx}>
                  <Link to={"/" + item.title.toLowerCase()} className="items">
                    <h4 style={{fontWeight: 'bolder'}}><IconComponent iconName={item.title} />
                      <span style={{paddingLeft: '0.8rem'}}>{item.title}</span></h4>
                  </Link>
                </CustomToggle>
                )
            }
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;