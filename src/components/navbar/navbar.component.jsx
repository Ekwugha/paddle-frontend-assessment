import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navbar.styles.css';

export default function CustomNavbar() {        
    return (
        <Navbar scrolling='true' expand="md" className="py-3">

            {/* navbar links */}
            <Container>
                <Navbar.Brand as={Link} to="/"  >PEDDLE</Navbar.Brand>
                
                <Navbar.Toggle >
                    <FontAwesomeIcon icon={faBars}  size="lg"/>
                </Navbar.Toggle  >

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                <Nav className="mx-auto text-dark">
                    <Nav.Link as={Link} to="/homepage"  > Home </Nav.Link>

                    <Nav.Link as={Link} to="/about"  > About </Nav.Link>

                    <Nav.Link as={Link} to="/faqs"  >  FAQS </Nav.Link>

                    <Nav.Link as={Link} to="/pricing"  >  Pricing </Nav.Link>

                    <Nav.Link as={Link} to="/testimonials"  >  Testimonials </Nav.Link>
                </Nav>

            
                <Nav>
                    <Nav.Link as={Link} to="/signin" className="mx-3 sign-in" >  Sign In </Nav.Link>

                    <Link to='/about' className="btn-color bg-color nounderline btn btnoutline btn-lg px-5">
                        Sign Up
                    </Link>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}