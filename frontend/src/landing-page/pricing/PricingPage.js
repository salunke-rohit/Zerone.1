 import React from 'react';
import Brokrage from './Brokrage';
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Openaccount from '../Openaccount'
 function PricingPage() {
    return ( 
        <div>
            <Hero/>
            <Openaccount/>
            <Brokrage/>
        </div>
     );
 }
 
 export default PricingPage;