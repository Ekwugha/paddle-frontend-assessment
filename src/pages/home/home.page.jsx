import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import CustomButton from '../../components/button/button.component'
import Landingpage from '../../components/landingpage/landingpage.component';
import User from '../../components/users/users.component';
import Features from '../../components/features/features.component';
import Pricing from '../../components/pricing/pricing.component';
import Title from '../../components/title/title.component';
import Paragraph from '../../components/title-paragraph/title-paragraph.component';
import Subscribe from '../../components/subscribe/subscribe.component';
import { faDiscord, faSpotify, faAmazon, faReddit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
    return (
        <section>
            <Landingpage />
            <User />
            <Features />
            <Pricing />
            <div className="bg-light py-5">
            <Container>
                <Row>
                    <Col>
                        <div className="py-5 text-center">
                            <Title> get started with <br/> paddle today </Title>
                            <Paragraph> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi quibusdam <br/> veritatis quisquam. </Paragraph>
                            <CustomButton> Start Today </CustomButton>
                        </div>
                        <Row className="py-5">   
                            <Col xs={12} md={2}>
                                <span className="text-secondary mauto ml-5"> <FontAwesomeIcon icon={faSpotify} size = '3x' /> </span>
                            </Col>

                            <Col xs={12} md={3}>
                                <span className="text-secondary mauto">  <FontAwesomeIcon icon={faDiscord} size = '3x'  /> </span>
                            </Col>

                            <Col xs={12} md={2}>
                                <span className="text-secondary">  <FontAwesomeIcon icon={faAmazon} size = '3x'  /> </span>                        
                            </Col>

                            <Col xs={12} md={3}>
                                <span className="text-secondary">  <FontAwesomeIcon icon={faReddit} size = '3x'  /> </span>
                            </Col>
                            
                            <Col xs={12} md={2}>
                                <span className="text-secondary">  <FontAwesomeIcon icon={faGithub} size = '3x'  /> </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
            <Subscribe />
        </section>
    )
}

export default HomePage;