import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Collapse,
  NavbarToggler,
} from 'reactstrap';

const MyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
        {/* <img
          src="/brandname.png" // Replace with your image path
          alt="Image"
          className="img-fluid"
        /> */}
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
          <NavItem></NavItem>
        </Nav>
        <div className="headerLogo">
        <img
                src="/coldwell_banker_logo.png" // Replace with your image path
                alt="Image"
                className="img-fluid"
              />
        </div>
           
      </Collapse>
    </Navbar>
  );
};

export default MyHeader;
