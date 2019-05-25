import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  logout() {
    localStorage.removeItem('id')
    window.location = '/'
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/developer/"><img src={process.env.PUBLIC_URL + '/images/jwork.png'} style={{ width: '10em' }} /></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Link to="/developer/me" style={{ color: 'black', marginLeft: '1em' }}><NavItem>Profile</NavItem></Link>
            <Link to="/messages" style={{ color: 'black', marginLeft: '1em' }}><NavItem>Message</NavItem></Link>
            <Link onClick={this.logout} style={{ color: 'black', marginLeft: '1em' }}><NavItem>LogOut</NavItem></Link>           
          </Nav>
        </Navbar>
      </div>
    )
  }
}