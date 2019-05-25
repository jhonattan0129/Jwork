import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/recruiter/">Jwork</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Link to="/recruiter/me" style={{ color: 'black', marginLeft: '1em' }}><NavItem>Profile</NavItem></Link>
            <Link to="/recruiter/search" style={{ color: 'black', marginLeft: '1em' }}><NavItem>Search Developers</NavItem></Link>
            <Link to="/messages" style={{ color: 'black', marginLeft: '1em' }}><NavItem>Message</NavItem></Link>
            <Link to="/" style={{ color: 'black', marginLeft: '1em' }}><NavItem>LogOut</NavItem></Link> 
          </Nav>
        </Navbar>
      </div>
    )
  }
}