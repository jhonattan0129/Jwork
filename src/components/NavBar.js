import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">          
            <NavbarBrand>
              <Link to="/">
                <img src={process.env.PUBLIC_URL + '/images/jwork.png'} style={{ width: '5em'}} />
              </Link>
            </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Link to="/developer/login" style={{ color: 'black', marginLeft: '1em' }}><NavItem>LogIn Developer</NavItem></Link>
            <Link to="/recruiter/login" style={{ color: 'black', marginLeft: '1em' }}><NavItem>LogIn Recruiter</NavItem></Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}