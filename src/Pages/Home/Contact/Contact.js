import React from 'react';
import bgg from '../../../assets/images/bg.png'
const Contact = () => {


    const SubmitForm = (e) => {
        e.preventDefault();
    }
    return (
        // <div style={{
        //     background: `url(${bgg})`
        // }} className='my-16 p-5 bg-yellow-600'>
        <div className='bg-black bg-opacity-90 py-8'>

            <div className='py-8'>
                <h1 className='text-center text-primary'>Contact Us</h1>
                <h1 className='text-center text-2xl text-white'>Stay connected with us</h1>
            </div>

            <div className='flex items-center justify-center '>
                <form className='flex flex-col gap-4 w-full md:w-1/2 lg:w-1/4 mx-3'>
                    <input className='border-b-2 pt-1 px-3 text-xl bg-white text-black' type="email" name="email" id="" placeholder='Email' />
                    <input className='border-b-2 pt-1 px-3 text-xl bg-white text-black' type="text" name="subject" id="" placeholder='Subject' />
                    <textarea className='border-b-2 pt-1 px-3 text-xl bg-white text-black' type="text" name="message" id="" placeholder='Message' />
                    <button onClick={SubmitForm} className="btn border-0 bg-gradient-to-r from-primary to-secondary  first-letter:
                        tracking-wider text-white font-bold mt-5 ">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;