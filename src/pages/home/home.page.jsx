import React from 'react';
import Landingpage from '../../components/landingpage/landingpage.component';
import User from '../../components/users/users.component';
import Features from '../../components/features/features.component';
import Pricing from '../../components/pricing/pricing.component';
import Subscribe from '../../components/subscribe/subscribe.component';
import Testimonial from '../../components/testimonial/testimonial.component';
import BrandIcons from '../../components/brand-icons/brand-icons.component';

function HomePage() {
    return (
        <section>
            <Landingpage />
            <User />
            <Features />
            <Pricing />
            <BrandIcons />
            <Testimonial />
            <Subscribe />
        </section>
    )
}

export default HomePage;