import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import React, { Component } from 'react';
import { getImages } from '../api/Pictures';

class ArticlesCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    async componentDidMount() {
        const images = await getImages()
        this.setState({
            images: images
        })
    }

    render() {
        return <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={"http://localhost:1337"+images.attributes.image.data.attributes.url}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Birds</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Mammals</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Amphibians</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Crustaceans</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Reptiles</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Shark & Rays</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    }
}

export default ArticlesCards;