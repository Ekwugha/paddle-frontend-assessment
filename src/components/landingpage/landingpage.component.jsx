import React from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../button/button.component';
import { Container, Col, Row, Image } from 'react-bootstrap';
import './landingpage.styles.css';

function LandingPage() {
    return (
        <Container data-aos='fade-up'>
            <Row className="box">
                <Col className="justify-content-center">
                    <Row className="my-5">
                        <Col md={6} className="m-auto">
                            <h1 className="text-capitalize display-5 text-shadow"> we are everything we aspire to be </h1>
                            <p className="py-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui laborum, nesciunt dolorum tempore eligendi quo mollitia, reprehenderit consequuntur facere et cumque quibusdam praesentium odit? </p>
                            <Link as={Link} to="/homepage" className="link"> <CustomButton> Get Started </CustomButton> </Link>
                        </Col>

                        <Col md={6} className="m-auto">
                            <Image src="assest/landingpage.jpg" className="img" alt="peddle-image"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container> 
    )
}

export default LandingPage;
