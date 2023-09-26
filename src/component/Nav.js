import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from "../Asset/logo2.png";
import "./Nav.css"

export default class MenuExampleSecondaryPointing extends Component {
  

  render() {

    return (
        <Navbar className='nav' bg="light" expand="lg">
          <Navbar.Brand >
              <div className='img-bus'>
                <div style={{ 'margin-top': '-15px' }} id='img'>
                  <img style={{ height: '60px' }} src={Logo} alt="not found" />
                </div>
              </div>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='test' id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="MenuItem">Home</Nav.Link>
              <Nav.Link className="MenuItem">How it work</Nav.Link>
              <Nav.Link className="MenuItem">Features</Nav.Link>
              <Nav.Link className="MenuItem">About us</Nav.Link>
              <Nav.Link className="MenuItem">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}