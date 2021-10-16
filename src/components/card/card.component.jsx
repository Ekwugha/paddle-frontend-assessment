import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import './card.styles.css';

export default function CardBody( {title, price, btn, image, id, content1, content2, content3, content4, content5} ) {
    return (
        <Col data-aos='zoom-in' md={4} className="my-4">
            <Card className="d-card">
                <div className="card shadow border-0 rounded-0 img img-fluid">
                    <div style={{ 
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: "15rem",
                    width:"100%",
                    backgroundBlendMode:'darken',
                    backgroundColor:"#04040475" 
                    }}></div>
                    <Card.Body className="m-3">
                        <Card.Title className="my-4 text-capitalize text-center"> { title } </Card.Title>
                        <Card.Text className="text-muted text-center">  { content1 } </Card.Text>
                        <Card.Text className="text-muted text-center">  { content2 } </Card.Text>
                        <Card.Text className="text-muted text-center">  { content3 } </Card.Text>
                        <Card.Text className="text-muted text-center">  { content4 } </Card.Text>
                        <Card.Text className="text-muted text-center">  { content5 } </Card.Text>
                    <h5 className="text-center"> { price } </h5>
                    <div className="text-center my-4"> { btn } </div>
                    </Card.Body>
                </div>
            </Card>
        </Col> 
    );
}
