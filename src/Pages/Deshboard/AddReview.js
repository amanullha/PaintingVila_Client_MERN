import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
// import Rating from 'react-rating';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyLoading from '../Shared/MyLoading/MyLoading';
// import { StarRatingInput } from 'react-star-rating-input'
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};


const AddReview = () => {

    let errorMessage;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const [rating, setRating] = useState(2);

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

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
            reviewDate: getDateAndTime,
            reviewStars: currentValue
        };

        fetch('https://whispering-ravine-55878.herokuapp.com/review', {
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
                    setCurrentValue(0);
                }
                else {
                    toast.warning("Failed to post review")
                }
            })



    }


    const getDateAndTime = () => {
        return new Date().toLocaleString();
    }

    const handleClick = value => {
        setCurrentValue(value)
        console.log(currentValue);
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
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
                            placeholder="Product Name"
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
                            placeholder=" What's your experience?"
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




                    <div className="form-control w-full max-w-xs">
                        <div style={styles.container}>
                            <h2> React Ratings </h2>
                            <div style={styles.stars}>
                                {stars.map((_, index) => {
                                    return (
                                        <FaStar
                                            key={index}
                                            size={24}
                                            onClick={() => handleClick(index + 1)}
                                            onMouseOver={() => handleMouseOver(index + 1)}
                                            onMouseLeave={handleMouseLeave}
                                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                            style={{
                                                marginRight: 10,
                                                cursor: "pointer"
                                            }}
                                        />
                                    )
                                })}
                            </div>

                            <h1>{hoverValue} {currentValue} {stars}</h1>



                        </div>

                    </div>

                    <div>
                        <div style={styles.container}>
                            <h2> React Ratings </h2>
                            <div style={styles.stars}>
                                {stars.map((_, index) => {
                                    return (
                                        <FaStar
                                            key={index}
                                            size={24}

                                            color={(currentValue) > index ? colors.orange : colors.grey}
                                            style={{
                                                marginRight: 10,
                                                cursor: "pointer"
                                            }}
                                        />
                                    )
                                })}
                            </div>

                            <h1>{hoverValue} {currentValue} {stars}</h1>



                        </div>
                    </div>










                    {errorMessage}



                    <input className='mt-5 btn w-full max-w-xs text-white tracking-wider' type="submit" value="Post" />


                </form>
            </div>

        </div>
    );
};
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
    }

};

export default AddReview;