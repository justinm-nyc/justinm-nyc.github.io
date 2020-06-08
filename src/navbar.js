import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar className="border-bottom" collapseOnSelect expand="lg">
                <Navbar.Brand className="nav-button" href="#home">JUSTIN MARTINELLI</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-button" href="#projects">PROJECTS</Nav.Link>
                        <Nav.Link className="nav-button" href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;