import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function TopNavbar() {
  return (
    <Navbar>
      <NavbarBrand href="/">Food Waste Solution</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink active href="#">
            Register
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              Update Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              Metrics
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/login">
              Login
            </NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  );
}

export default TopNavbar;