import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>


            <div className="">
                <div className='bg-white bg-opacity-80'>
                    <Banner />
                    <Products callFrom="home" />
                    <Reviews />
                </div>

            </div >

            {/* <Contact /> */}








        </div>
    );
};

export default Home;