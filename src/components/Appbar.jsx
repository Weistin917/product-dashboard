import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";

function Appbar() {
    return (
        <Navbar expand="lg" className="sticky-nav   " bg="primary" fixed="top" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Product Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className='justify-content-end'>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/shoppingcart">View Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Appbar;