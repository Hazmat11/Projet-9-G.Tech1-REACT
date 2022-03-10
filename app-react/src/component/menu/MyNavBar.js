import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import React, { Component } from 'react';
import "./MyNavBar.css";
import OpenMB from '../basket/OpenMB';

class MyNavBar extends Component {

    render() {
        return <div>
            <Navbar className="Navbar" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="http://localhost:1337/uploads/Exotic_Taste_54b7357042.png?updated_at=2022-03-04T09:02:28.976Z"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
  
                            </NavDropdown>
                            <OpenMB />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    }
}

export default MyNavBar;