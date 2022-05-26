import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TopHeader = () => {
    return (
        <div className='hidden md:block'>
            <ul className="flex justify-evenly items-center bg-green-700 font-bold tracking-wide bg-opacity-30 py-2  rounded-bl-full rounded-br-full">
                <li className="text-green-700"><FontAwesomeIcon className='text-green-900' icon={faLocationPin} /> Forusbeen 50, 4035 Stavanger, Norway</li>
                <li className="text-green-700"><FontAwesomeIcon className='text-green-900' icon={faPhone} /> +84 0378 260 852</li>
                <li className="text-green-700"><FontAwesomeIcon className='text-green-900' icon={faEnvelope} /> info.paintingvila@gmail.com</li>
            </ul>

        </div>
    );
};

export default TopHeader;