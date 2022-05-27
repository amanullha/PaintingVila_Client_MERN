import React from 'react';
import Banner from '../Banner/Banner';
import BruchOn from '../BruchOn/BruchOn';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import PartnerShip from '../PartnerShip/PartnerShip';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>


            <div className="">
                <div className='bg-white bg-opacity-80'>

                    <Banner />
                    <Products callFrom="home" />
                    <BusinessSummary />
                    <BruchOn />

                    <Reviews />
                    <PartnerShip />

                </div>

            </div >

            {/* <Contact /> */}








        </div>
    );
};

export default Home;