import React from 'react';
import { Fade } from 'react-reveal';

const Portfolio = () => {
    return (
        <div>

            <div className='flex flex-col justify-center items-center gap-5'>

                <div className="info">
                    <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />

                    <h1 className='text-4xl text-center font-bold'>Md. Aman ullha
                    </h1>
                    <h1 className='text-2xl text-center text-gray-600'>md.amanullha03@gmail.com</h1>
                    <hr />

                </div>


                <div className="eduBackground">
                    <div className='text-2xl text-yellow-900 py-8'>
                        <h1> Final year undergrad student</h1>
                        <h1> Department of CSE</h1>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-yellow-700'>Language: </h1>
                        <p className='pl-8 pt-2 pb-5 text-gray-600'>C/C++/javascript</p>
                        <h1 className='text-2xl font-bold text-yellow-700'>Tools:</h1>
                        <h1 className='pl-8 pt-2 pb-5 text-gray-600'>git, github</h1>
                        <h1 className='text-2xl font-bold text-yellow-700'>Others: </h1>
                        <h1 className='pl-8 pt-2 pb-5 text-gray-600'>Node js, Express js,Mongodb, </h1>
                    </div>

                </div>


                <div className='grid grid-cols-1 lg:grid-cols-2'>



                    <Fade top>
                        <a href="https://book-shomachar.netlify.app/" target='_blank'>
                            <div className="projects max-w-lg mx-2">

                                <div className='shadow-2xl p-5 my-5 mx-2 cursor-pointer min-h-[450px]'>
                                    <div className='flex justify-center'>
                                        <img width={400} src="https://i.ibb.co/tqYYL37/Screenshot-from-2022-05-27-23-58-54.png" alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-3xl text-yellow-700 font-bold text-center py-5'>BookShomachar</h1>
                                    </div>
                                    <div>
                                        This website help user to comment or express experience about book
                                    </div>
                                </div>


                            </div>
                        </a>
                    </Fade>


                    <Fade right>
                        <a href="https://stock-binder-ef7f4.web.app/" target='_blank'>
                            <div className="projects max-w-lg mx-2">

                                <div className='shadow-2xl p-5 my-5 mx-2 cursor-pointer min-h-[450px]'>
                                    <div className='flex justify-center'>
                                        <img width={400} src="https://i.ibb.co/7Vgd3Cx/Screenshot-from-2022-05-28-00-02-27.png" alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-3xl text-yellow-700 font-bold text-center py-5'>StockBinder</h1>
                                    </div>
                                    <div>
                                        This is a inventory management website . user will be able to add item and update item . but a user can only delete those items which was added by this user. but all user will be able to update/restock the items.

                                    </div>
                                </div>


                            </div>
                        </a>
                    </Fade>



                    <Fade bottom>
                        <a href="https://careex-1161d.web.app/" target='_blank'>
                            <div className="projects max-w-lg mx-2">

                                <div className='shadow-2xl p-5 my-5 mx-2 cursor-pointer min-h-[450px]'>
                                    <div className='flex justify-center'>
                                        <img width={400} src="https://i.ibb.co/vJ9mLZg/Screenshot-from-2022-05-27-23-59-04.png" alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-3xl text-yellow-700 font-bold text-center py-5'>Carteex</h1>
                                    </div>
                                    <div>
                                        This website help user to get appoint from doctor. They will be able to take appointment form doctor
                                    </div>
                                </div>


                            </div>
                        </a>
                    </Fade>

                </div>

            </div>

        </div>
    );
};

export default Portfolio;

