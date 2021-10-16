import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import PricingData from '../pricingdata/pricingdata.component'

function Pricing() {
  return (
    <section>
            <Container>
                <Row>
                    <Col>
                    <div className="mt-5">
                        {/* <Title>Technical Skill set</Title> */}
                    </div>
                    {/* <Paragraph>I'm constantly learning and keeping up to date with the latest technologies so I can pick the best tech for the job </Paragraph> */}
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
