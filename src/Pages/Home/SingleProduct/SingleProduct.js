import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import './SingleProduct.css'
const SingleProduct = ({ product }) => {

    const { name, image, description, minimumOrder, availableQuantity, unitPrice } = product;

    const [user, loading, error] = useAuthState(auth);

    const [admin, setAdmin, adminLoading] = useAdmin(user);
    // const handleDeleteDoctor = () => {

    //     fetch(`https://whispering-ravine-55878.herokuapp.com/doctor/${doctor.email}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount) {
    //                 toast.success("Deleted Successfully");
    //                 refetch();
    //             } else {
    //                 toast.warning("You can't delete")
    //             }
    //         })



    // }

    const navigate = useNavigate();

    const handleAddToCart = () => {

        navigate(`/manage-product/${product._id}`)
    }



    return (
        <Fade bottom>
            <div className='relative main-product-card'>
                <div className=''>
                    <img className='rounded-lg w-full max-h-[300px]' src={image} alt={name} />
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-3xl font-bold text-yellow-600 '>{name}</h1>
                    <h1 className='text-gray-500'>{description?.length > 50 ? description.slice(0, 50) : description}</h1>
                    <h1 className='pb-5'>Unit Price: <span className='text-yellow-700 font-bold text-2xl '>{unitPrice}</span></h1>
                </div>

                {
                    admin ? "" : <div className='main-product-button rounded-lg bg-black bg-opacity-40 flex justify-center items-center absolute z-10 w-full h-full top-0' >
                        <button
                            onClick={handleAddToCart}
                            className='active:bg-slate-600 mt-5 md:mt-10 md:text-2xl md:px-12 px-5 py-3 bg-yellow-600 rounded-full text-white font-bold md:tracking-widest hover:bg-yellow-500 '>Add to Cart</button>
                    </div>
                }

            </div>
        </Fade>
    );
};

export default SingleProduct;