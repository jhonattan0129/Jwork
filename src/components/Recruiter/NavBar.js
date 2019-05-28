import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  signOut() {
    localStorage.removeItem('recruiterId')
    window.location = '/'
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/recruiter/home"><img src={process.env.PUBLIC_URL + '/images/jwork.png'} style={{ width: '10em' }} /></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Link to="/recruiter/me" style={{ color: '#8d8d8d', marginLeft: '1em', textDecoration: 'none' }}><NavItem>Profile</NavItem></Link>
            <Link to="/recruiter/search" style={{ color: '#8d8d8d', marginLeft: '1em', textDecoration: 'none' }}><NavItem>Search Developers</NavItem></Link>
            <Link to="/messages" style={{ color: '#8d8d8d', marginLeft: '1em', textDecoration: 'none' }}><NavItem>Message</NavItem></Link>
            <Link onClick={this.signOut} style={{ color: '#8d8d8d', marginLeft: '1em', textDecoration: 'none' }}><NavItem>LogOut</NavItem></Link> 
          </Nav>
        </Navbar>
      </div>
    )
  }
}