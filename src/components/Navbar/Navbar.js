import React from 'react';
import { NavContainer, NavItem } from './Navbar.styles';

const Navbar = ({ onNavClick }) => (
  <NavContainer>
    <NavItem onClick={() => onNavClick('home')}>Home</NavItem>
    <NavItem onClick={() => onNavClick('bio')}>Bio</NavItem>
    <NavItem onClick={() => onNavClick('projects')}>Projects</NavItem>
    <NavItem onClick={() => onNavClick('skills')}>Skills</NavItem>
    <NavItem onClick={() => onNavClick('experience')}>Experience</NavItem>
  </NavContainer>
);

export default Navbar;
