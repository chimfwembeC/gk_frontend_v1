import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const AppNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">GK Renovations</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/cart">Cart</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
