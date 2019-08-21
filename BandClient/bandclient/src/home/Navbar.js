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




const Sitebar = (props) => { 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  }
    
  return ( 
    <Navbar color="faded" light expand="md">  
      <NavbarBrand href="/">BandODex</NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="m1-auto" navbar>
          <NavItem>
            <Button onClick={props.clearToken}>Outro</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Sitebar;