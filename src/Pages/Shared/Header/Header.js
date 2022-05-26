import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import TopHeader from './TopHeader';

const Header = () => {

    const [scrollDirection, setScrollDirection] = useState(null)
    const [prevOffset, setPrevOffset] = useState(0)

    const toggleScrollDirection = () => {
        let scrollY = window.scrollY
        if (scrollY === 0) {
            setScrollDirection(null)
        }
        if (scrollY > prevOffset) {
            setScrollDirection("down")
        } else if (scrollY < prevOffset) {
            setScrollDirection("up")
        }
        setPrevOffset(scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleScrollDirection)
        return () => {
            window.removeEventListener("scroll", toggleScrollDirection)
        }
    })


    // window.onscroll = function (e) {

    //     console.log(e.target);
    // }


    return (
        <div className={`w-full bg-white flex justify-center items-center  sticky top-0 z-50 mt-0 ${scrollDirection === 'down' ? "shadow-lg" : ""}`}>

            <div className='md:mx-5 lg:mx-16 xl:mx-20 w-full'>
                <NavBar />
            </div>







        </div>
    );
};

export default Header;