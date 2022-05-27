import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { Fade, LightSpeed } from 'react-reveal';

const ContactUs = () => {
    return (
        <div>
            {/* animate-bounce */}
            <div className='mx-5 lg:mx-10 xl:mx-20 py-12 scroll-smooth	'>


                <LightSpeed bottom>
                    <div className=' flex items-center  justify-center my-10'>

                        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider text-transparent  bg-clip-text bg-gradient-to-r from-yellow-700 to-green-800'>Hello!  </h1>
                        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold tracking-wider text-transparent  bg-clip-text bg-gradient-to-r from-yellow-700 to-green-800 ml-2'>How can we help You?</h1>

                    </div>
                </LightSpeed>

                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-5 my-12'>

                    <Fade left>
                        <div className='	 bg-gradient-to-r from-[#b7f0f2] to-[#f2f2f9] rounded-xl p-5'>
                            <h1 className='text-2xl font-bold'>Bangladesh Office. </h1>
                            <h1 className='text-xl my-3'>xyz,dhanmondhi,Dhaka</h1>
                            <h1>+88-0199999999999</h1>
                            <h1>+88-0177777777777</h1>
                            <h1 className='my-2'>info@stackbinder.com</h1>
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className='bg-gradient-to-r from-[#e8ebb9] to-[#f2f2f9] rounded-xl p-5'>
                            <h1 className='text-2xl font-bold'>USA Office. </h1>
                            <h1 className='text-xl my-3'>xyz,dhanmondhi,Dhaka</h1>
                            <h1>+1 929-431-424155</h1>
                            <h1 className='my-2'>info@stackbinder.com</h1>
                        </div>
                    </Fade>





                    <Fade right>
                        <div className='bg-gradient-to-r from-[#EEEEEE] to-[#8181df] rounded-xl p-5'>
                            <h1 className='text-2xl font-bold'>Careers </h1>
                            <h1 className='text-xl my-3'>Recruiting</h1>
                            <h1>+1 929-431-424155</h1>
                            <h1 className='my-2'>hr@stackbinder.com</h1>
                        </div>
                    </Fade>
                </div>


            </div>

            <div className='bg-gradient-to-r from-[#a4ced1] to-[#96c79a6f] '>
                <div className=' mx-5 lg:mx-10 xl:mx-20 grid grid-cols-1 md:grid-cols-2  '>

                    <Fade bottom>
                        <div className='p-5'>
                            <form className='flex flex-col gap-8 p-5'>
                                <div className='flex flex-col gap-3'>
                                    <label htmlFor="FullName">Full Name</label>
                                    <input className='border-yellow-900 bg-transparent border-b-2 text-xl' type="text" name="FullName" id="" />
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <label htmlFor="Email">Email*</label>
                                    <input className='border-yellow-900 bg-transparent border-b-2 text-xl' type="text" name="Email" id="" />
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <label htmlFor="Message">Your Message*</label>
                                    <textarea className='border-yellow-900 bg-transparent border-b-2 text-xl' type="text" name="Message" id="" />
                                </div>

                                <div className='flex justify-center py-5'>

                                    <button className='active:text-yellow-400 px-8 py-2 bg-green-700 text-white font-bold tracking-widest rounded-lg'>Send Message</button>

                                </div>

                            </form>
                        </div>
                    </Fade>






                    <Fade right>
                        <div className='p-5'>

                            <h1 className='text-3xl font-bold'>Don't Hesitate to
                                contact with us for any
                                kind of information
                            </h1>

                            <h1 className='text-xl my-2'>Call us for query
                            </h1>
                            <h1>+880-88-758-5986
                            </h1>

                            <div className='flex gap-5 my-5'>
                                <svg className='w-[50px] cursor-pointer ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                                <svg className='w-[50px] cursor-pointer ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>

                                <svg className='w-[50px] cursor-pointer ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                            </div>



                        </div>
                    </Fade>








                </div>
            </div>

        </div>
    );
};

export default ContactUs;