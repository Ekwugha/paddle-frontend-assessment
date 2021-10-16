import React from 'react';
import Landingpage from '../../components/landingpage/landingpage.component';
import User from '../../components/users/users.component';
import Features from '../../components/features/features.component';
import Pricing from '../../components/pricing/pricing.component';

function HomePage() {
    return (
        <div>
            <Landingpage />
            <User />
            <Features />
            <Pricing />
        </div>
    )
}

export default HomePage;