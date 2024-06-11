import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useTheme } from '../context/ThemeProvider';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar color={isDarkMode ? 'dark' : 'light'} dark={isDarkMode} expand="md">
        <NavbarBrand href="/">GK Renovations</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto justify-content-end" navbar> {/* Added justify-content-end class */}
            <NavItem>
              <NavLink href="/cart"><AiOutlineShoppingCart size={24} /></NavLink>
            </NavItem>
            <NavItem className="ml-md-2">
              <NavLink onClick={toggleTheme}>{isDarkMode ? <BsSun size={24} /> : <BsMoon size={24} />}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <SpeedInsights />
    </>
  );
};

export default AppNavbar;
