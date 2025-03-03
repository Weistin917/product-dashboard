import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function Appbar({ numItems }) {
    return (
        <Navbar expand="lg" className="sticky-nav   " bg="primary" fixed="top" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Product Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className='justify-content-end'>
                    <Nav className="me-auto">
                        <NavLink to="/" end style={({ isActive }) => ({color: isActive ? 'white':'#bdbdbd', fontWeight: isActive ? 'bold':'', textDecoration:'none', padding:10})}>Home</NavLink>
                        <NavLink to="/shoppingcart" end style={({ isActive }) => ({color: isActive ? 'white':'#bdbdbd', fontWeight: isActive ? 'bold':'', textDecoration:'none', padding:10})}>View Cart ({numItems})</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Appbar;