

import React, { useState } from 'react';
import SingleReview from '../../Home/Reviews/SingleReview'

const Reviews = () => {


    const [reviews, setReviews] = useState([]);

    useState(() => {

        fetch('https://whispering-ravine-55878.herokuapp.com/reviews', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })


    }, [])


    return (
        <div className='mx-5 lg:mx-10 xl:mx-20 py-10'>

            <h1 className='text-3xl text-center font-bold tracking-wider text-yellow-600 mb-5'>Clients Reviews</h1>

            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2' >



                {
                    reviews?.map(r => <SingleReview
                        key={r?._id}
                        blogQuestion={r?.reviewProduct}
                        blogText={r?.review}
                        blogWriter={r?.reviewer}
                        blogWriterImg={r?.reviewerImage}
                        blogWritingDate={r?.reviewDate}
                        currentValue={r?.reviewStars}

                    />)
                }




            </div >
        </div >
    );
};

export default Reviews;