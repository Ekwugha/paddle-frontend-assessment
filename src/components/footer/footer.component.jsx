import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './footer.styles.css';

const Footer = () => (
    <footer className="py-5 bg-light">
        <Container  id="footer">
            <Row>   
                <Col xs={12} md={6}>
                    <h2 className="footer-brand">PEDDLE</h2>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Facere fuga nobis deserunt ratione, quas earum enim <br/> molestiae in ut eos?z</p>
                    <p className="footer-text text-muted pt-3">&copy; 2020PADDLE</p>
                </Col>

                <Col xs={12} md={2}>
                    <h5>Products</h5>
                    <ul className="list-unstyled text-secondary">
                        <li>Loremetu.</li>
                        <li>Loremetu.</li>
                        <li>Loremetu.</li>
                        <li>Loremetu.</li>
                        <li>Loremetu.</li>
                    </ul>
                </Col>

                <Col xs={12} md={2}>
                    <h5>Engage</h5>
                    <ul className="list-unstyled text-secondary">
                        <li>Loremetu.</li>
                        <li>Loremetu.</li>
                        <li>Loremetu.</li>
                        <li>Loremetu.</li>
                        <li>Loremetu.</li>
                    </ul>
                </Col>

                <Col xs={12} md={2}>
                    <h5>Earn Money</h5>
                    <ul className="list-unstyled text-secondary">
                        <li>Ulterices</li>
                        <li>Fuseses</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>
);
  
export default Footer;