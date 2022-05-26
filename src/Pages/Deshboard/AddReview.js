import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyLoading from '../Shared/MyLoading/MyLoading';
// import { StarRatingInput } from 'react-star-rating-input'


const AddReview = () => {

    let errorMessage;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, loading, error] = useAuthState(auth);


    if (loading) {
        return <MyLoading />
    }
    const onSubmit = async (data) => {

        console.log(data);

        const review = {

            review: data?.review,
            reviewer: user?.displayName,
            reviewerImage: user?.photoURL,
            reviewProduct: data?.name,
            reviewDate: getDateAndTime
        };

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success("Review posted")
                    reset();
                }
                else {
                    toast.warning("Failed to post review")
                }
            })



    }


    const getDateAndTime = () => {
        return new Date().toLocaleString();
    }






    return (
        <div>
            <h1 className='my-5 text-2xl text-center'>Post your experience about our products</h1>

            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="form-control w-full max-w-sm">

                        <label className="label">
                            <span className="label-text">Rating Product</span>
                        </label>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {
                            ...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }

                            })
                            }

                        />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                        </label>

                    </div>


                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>

                        <textarea
                            type="review"
                            placeholder="Write your review"
                            className="textarea textarea-bordered w-full max-w-xs"
                            {
                            ...register("review", {
                                required: {
                                    value: true,
                                    message: 'Review is required'
                                }

                            })
                            }

                        />

                        <label className="label">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}


                        </label>

                    </div>
                    {/* <div className="form-control w-full max-w-xs">

                        <StarRatingInput
                            size={5}
                            value={this.state.value}
                            onChange={this.handleChange} />

                    </div> */}












                    {errorMessage}



                    <input className='mt-5 btn w-full max-w-xs text-white tracking-wider' type="submit" value="Post" />


                </form>
            </div>

        </div>
    );
};

export default AddReview;