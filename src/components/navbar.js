import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Resume from '../resume/Justin_Martinelli_Technical_Resume.pdf';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar className="border-bottom" collapseOnSelect expand="lg">
                <Navbar.Brand className="nav-button" id="nav-button" href="/">JUSTIN MARTINELLI</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-button" id="nav-button" href="/#work">WORK</Nav.Link>
                        <Nav.Link className="nav-button" id="nav-button" href="about">ABOUT</Nav.Link>
                        <Nav.Link className="nav-button" id="nav-button" target="_blank" href={Resume}>RESUME</Nav.Link>
                        <Nav.Link className="nav-button" id="nav-button" href="contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;
