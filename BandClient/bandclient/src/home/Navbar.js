import React, {useState} from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import {
  Route, 
  Link,
  Switch
} from 'react-router-dom'


const Sitebar = (props) => { 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  }



    
  return ( 
    <Navbar color="faded" light expand="md">  
      <NavbarBrand className="navheader" >Band O Dex <p>Local music rolodex for venues and fans in Indiana</p></NavbarBrand>
       <NavbarToggler onClick={toggle}/> 
      <Collapse isOpen={isOpen} navbar>
        <Nav className="m1-auto" navbar>y

          <NavItem>
          <Button className="navhead-button" onClick={props.clickLogout}>Outro</Button>
          <Link to ="/fav" className="mybutton">My Artists</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Sitebar;