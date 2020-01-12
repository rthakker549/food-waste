import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function TopNavbar() {

  return (
    <Navbar className="navBar">
      <NavbarBrand href="/">Food Waste Solution</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/offers">
              Make Offer
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/requests">
              Make Request
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/metrics">
              Metrics
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="/login">
              Login
            </NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  );
}

export default TopNavbar;