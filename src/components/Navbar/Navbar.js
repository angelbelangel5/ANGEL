import React from 'react';
import { NavContainer, NavItem } from './Navbar.styles';

const Navbar = () => (
  <NavContainer>
    <NavItem href="#home">Home</NavItem>
    <NavItem href="#projects">Projects</NavItem>
    <NavItem href="#skills">Skills</NavItem>
    <NavItem href="#experience">Experience</NavItem>
  </NavContainer>
);

export default Navbar;
