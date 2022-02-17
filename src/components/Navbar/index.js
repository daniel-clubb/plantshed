import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';

import logo from '../../images/plantshedLogo.png'
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' onClick='refresh' activeStyle>
            <img src={logo} />
          </NavLink>
          <NavLink to='/Products' onClick='refresh' activeStyle>
            Products
          </NavLink>
          <NavLink to='/Countries' onClick='refresh' activeStyle>
            Countries
          </NavLink>
          <NavLink to='/About' onClick='refresh' activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;