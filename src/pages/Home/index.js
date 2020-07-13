// --- Post bootstrap -----
import React from 'react';
import ProductCategories from '../../components/ProductCategories';
import ProductSmokingHero from '../../components/ProductSmokingHero';
import AppFooter from '../../components/AppFooter';
import ProductHero from '../../components/ProductHero';
import ProductValues from '../../components/ProductValues';
import ProductHowItWorks from '../../components/ProductHowItWorks';
import ProductCTA from '../../components/ProductCTA';

function Index() {
    console.log('home');
    return (
        <React.Fragment>
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
            <AppFooter />
        </React.Fragment>
    );
}

export default Index;
