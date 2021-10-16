import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { faServer, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './users.styles.css';

function Users() {
    return (
        <Container className="box-shadow-full mb-5">
            <Row>
                <Col>
                    <Row className="mx-auto mb-5">
                        <Col xs={4}>
                            <span className="color m-3"> <FontAwesomeIcon icon={faUser} size = '2x' /> </span>
                            <span className="display"> 90+ </span>
                            <h5 className="text-muted m-3"> Users </h5>
                        </Col>

                        <Col xs={4}>
                            <span className="color m-3"> <FontAwesomeIcon icon={faMapMarkerAlt} size = '2x' /> </span>
                            <span className="display"> 30+ </span>
                            <h5 className="text-muted m-3"> Locations </h5>
                        </Col>

                        <Col xs={4}>
                            <span className="color m-3"> <FontAwesomeIcon icon={faServer} size = '2x' /> </span>
                            <span className="display"> 50+ </span>
                            <h5 className="text-muted m-3"> Servers </h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container> 
    )
}

export default Users
