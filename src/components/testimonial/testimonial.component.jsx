import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './testimonial.styles.css';

function Testimonial() {
    return (
        <div>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={5000}
                className="py-5 overlay-mf"
            >
                <div>
                    <img src="assest/testimonial4.jpg" alt="John Doe" className="" style={{maxWidth: '30%'}}/>
                    <div className="myCarousel pb-2">
                        <h3>Viezh Robert</h3>
                        <h4>Warsaw, Poland</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos nostrum rem eius impedit. Provident?</p>
                    </div>
                </div>

                <div>
                    <img src="assest/testimonial1.jpg" alt="ifeanyi nwankwo" className="" style={{maxWidth: '30%'}}/>
                    <div className="myCarousel">
                        <h3>John Doe</h3>
                        <h4>USA</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quis dolores a doloribus sequi nesciunt?</p>
                    </div>
                </div>

                <div>
                    <img src="assest/testimonial2.jpg" alt="ifeanyi nwankwo" className="" style={{maxWidth: '30%'}}/>
                    <div className="myCarousel">
                        <h3>Yiesita Christy</h3>
                        <h4>China</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quis dolores a doloribus sequi nesciunt?</p>
                    </div>
                </div>

                <div>
                    <img src="assest/testimonial3.jpg" alt="ifeanyi nwankwo" className="" style={{maxWidth: '30%'}}/>
                    <div className="myCarousel">
                        <h3>Kim Young Jou</h3>
                        <h4>South Korea</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quis dolores a doloribus sequi nesciunt?</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Testimonial;
