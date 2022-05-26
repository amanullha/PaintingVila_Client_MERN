import { faCommentMedical, faMessage, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const SingleBlog = ({ blogText, blogQuestion, blogWriter, blogWriterImg, blogWritingDate }) => {


    const [less, setLess] = useState(0);
    const [addComment, setAddComment] = useState(0);
    const [command, setCommand] = useState("Read More..");

    const lessClicked = () => {
        setLess(less ^ 1);
        less ? setCommand('Read More...') : setCommand('Read Less..');
        console.log(less);
    }
    const addCommentClicked = () => {
        setAddComment(addComment ^ 1);
    }


    return (


        <div className=' m-3 border-2 p-3 rounded-lg '>
            <div className=" flex items-center justify-between bg-slate-200">
                <div className=" flex items-center gap-2">


                    {
                        blogWriterImg ? <img width={100} className="h-[80px] rounded-full" src={blogWriterImg} alt="" /> :
                            <img width={100} className="h-[80px] rounded-full" src="https://api.lorem.space/image/face?hash=33791" />
                    }




                    <sub className='text-gray-500'>By</sub>

                    <div className="blogTexter ">
                        <h3 className='text-3xl text-yellow-800'>{blogWriter}</h3>
                        <h5 className=' text-red-400 '>{blogWritingDate}</h5>
                    </div>
                </div>

                <div className='xl:mr-10 lg:mr-10 md:mr-10 sm:mr-5 mr-2'>
                    <button className='bg-blue-600 text-white px-7 py-2 rounded-full hover:bg-blue-400 hover:text-yellow-900'>Follow</button>
                </div>

            </div>
            <div className=" blogText-section pl-2 mt-3 tracking-wide">
                <h1 className='font-bold text-3xl'>{blogQuestion}</h1>


                <p className='pl-2 mt-3'>{blogText?.slice(0, 50)}</p>
                <button className='pl-2' onClick={lessClicked}>{command}</button>
            </div>
            <div className="comment pl-2 mt-3 bg-slate-50 p-2">
                <div className='flex items-center gap-5'>

                    <FontAwesomeIcon className='border p-2 rounded-full active:bg-green-400' icon={faThumbsUp} />
                    <FontAwesomeIcon className='border p-2 rounded-full active:bg-red-400' icon={faThumbsDown} />




                    <div className="rating">

                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />

                        <input type="radio" name="rating-1" className="mask mask-star" />

                        <input type="radio" name="rating-1" className="mask mask-star" />

                        <input type="radio" name="rating-1" className="mask mask-star" />

                    </div>


                </div>



            </div>



        </div>


    );
};

export default SingleBlog;