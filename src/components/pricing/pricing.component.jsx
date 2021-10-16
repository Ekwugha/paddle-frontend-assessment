import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Title from '../title/title.component';
import Paragraph from '../title-paragraph/title-paragraph.component';
import PricingData from '../pricingdata/pricingdata.component';

function Pricing() {
  return (
    <section className="bg-light">
            <Container>
                <Row>
                    <Col>
                    <div className="mt-5 text-center">
                        <Title> choose your plan </Title>
                        <Paragraph> Let's choose the package that is best for you and explore it happily and <br/> cheerfully </Paragraph>
                    </div>
                    </Col>
                    <Col xs={12} className="my-5">
                        <Row>
                            <PricingData />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default Pricing;
