import React from 'react';
import Title from '../title/title.component'
import Paragragh from '../title-paragraph/title-paragraph.component';
import CustomButton from '../button/button.component'
import { Container, Col, Row } from 'react-bootstrap';
import './subscribe.styles.css'

function Subscribe() {
    return (
        <section className="bg-light">
            <Container className="box-shadow">
                <Row>
                    {/* <Col> */}
                        {/* <Row className="my-5 m-auto"> */}
                                <Col md={9} className="mr-5">
                                    <Title> Subcribe Now For <br/> Get Special Features </Title>
                                    <Paragragh> Lorem ipsum dolor sit amet. </Paragragh>
                                </Col>

                                <Col md={3} className="m-auto pl-5">
                                    <CustomButton> Get Started </CustomButton>
                                </Col>
                            {/* </Row> */}
                    {/* </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Subscribe
