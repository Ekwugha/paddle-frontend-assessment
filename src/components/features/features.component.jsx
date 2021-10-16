import React from 'react'
import CustomButton from '../button/button.component';
import { Container, Col, Row, Image, ListGroup } from 'react-bootstrap';
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './features.styles.css';

function Features() {
    return (
        <section className="bglight">
            <Container>
                <Row>
                    <Col className="justify-content-center">
                        <Row className="my-5">
                            <Col md={7} className="m-auto">
                                <Image src="assest/pianno.jpg" className="img" alt="peddle-image"/>
                            </Col>

                            <Col md={5} className="m-auto">
                                <h1 className="text-capitalize display-5"> features we provide for you </h1>
                                <p className="py4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptate consectetur omnis, accusamus sit pariatur? </p>
                                <ListGroup>
                                    <ListGroup.Item> <FontAwesomeIcon className="color" icon={faSquare} /> <span className="margin"> Cras justo odio </span> </ListGroup.Item>
                                    <ListGroup.Item> <FontAwesomeIcon className="color" icon={faSquare} /> <span className="margin"> Dapibus ac facilisis in </span> </ListGroup.Item>
                                    <ListGroup.Item> <FontAwesomeIcon className="color" icon={faSquare} /> <span className="margin"> Morbi leo risus </span> </ListGroup.Item>
                                    <ListGroup.Item> <FontAwesomeIcon className="color" icon={faSquare} /> <span className="margin"> Porta ac consectetur ac  </span> </ListGroup.Item>
                                    <ListGroup.Item> <FontAwesomeIcon className="color" icon={faSquare} /> <span className="margin"> Vestibulum at eros </span> </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}

export default Features;
