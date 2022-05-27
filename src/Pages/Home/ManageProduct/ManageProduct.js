import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useOrderAdd from '../../../hooks/useOrderAdd';
import MyLoading from '../../Shared/MyLoading/MyLoading';



const ManageProduct = () => {

    const [user, loading, error] = useAuthState(auth);

    const productId = useParams().productId;
    const [purchaseUnitInput, setPurchaseUnitInput] = useState('0')
    const [errorMessage, setErrorMessage] = useState('')
    const [isButtonDisable, setIsButtonDisable] = useState(true)
    // console.log("productId  :", productId);


    const { data: product, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/products/${productId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    useState(() => {
        console.log("aman");

        if (parseInt(purchaseUnitInput) < product?.minimumOrder && parseInt(purchaseUnitInput) > product?.availableQuantity) {
            setIsButtonDisable(true)
        }
        else {
            setIsButtonDisable(false)
        }

    }, [purchaseUnitInput])



    if (isLoading || loading) {
        return <div className='flex items-center justify-center'> <MyLoading /></div>
    }



    const handlePlus = () => {
        setPurchaseUnitInput(parseInt(purchaseUnitInput) + 1)
    }
    const handleMinus = () => {

        let val = parseInt(purchaseUnitInput);

        let x = val - 1 < 0 ? 0 : val - 1;
        setPurchaseUnitInput(x);
    }
    const handleInputOnChange = (e) => {

        const newValue = e.target.value;



        setPurchaseUnitInput(newValue)
    }

    const handlePlaceAddToCart = () => {

        const orderedQuantity = parseInt(purchaseUnitInput);
        // const existingQuantity = product?.availableQuantity - orderedQuantity;

        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ orderedQuantity: orderedQuantity })

        })
            .then(res => res.json())
            .then(data => {
                console.log("updated data; ", data);
                if (data?.acknowledged) {
                    toast.success("Product added to your cart")
                    refetch();

                    const order = {
                        productName: product?.name,
                        productId: product?._id,
                        purcheseQuentity: parseInt(purchaseUnitInput),
                        perUnitPrice: product.unitPrice,
                        paymentStatus: false,
                        purchaseDate: getDateAndTime()

                    }
                    addOrderToDb(order);



                }
            })

    }


    const getDateAndTime = () => {
        return new Date().toLocaleString();
    }


    const addOrderToDb = (order) => {

        if (user) {

            order.userEmail = user?.email;
            fetch(`http://localhost:5000/orders`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("order Added data: ", data);

                })
        }
    }

    return (
        <div className='py-16 px-5'>
            <div className='flex flex-col md:flex-row justify-evenly gap-5'>

                <div className='w-full xl:w-96 max-h-96'>
                    <img className='rounded-lg w-full h-[200px] md:h-full' src={product?.image} alt={product?.name} />
                </div>

                <div className='flex flex-col  gap-2'>
                    <h1 className='text-3xl font-bold text-yellow-600 '>{product.name}</h1>
                    <h1 className='text-gray-500'>{product?.description}</h1>
                    <h1 className=''>Unit Price: <span className='text-yellow-700 font-bold text-2xl '>{product?.unitPrice}</span></h1>
                    <h1 className=''>Available units: <span className='text-yellow-700 font-bold text-2xl '>{product?.availableQuantity}</span></h1>
                    <h1 className=''>Minimum ordered units: <span className='text-yellow-700 font-bold text-2xl '>{product?.minimumOrder}</span></h1>


                    <div className='mt-10'>
                        <div>

                            <h1 className=' text-red-600 font-bold '>
                                {
                                    product.availableQuantity < product.minimumOrder ? "Minimum product are not available to SELL" : ""
                                }
                                {
                                    parseInt(purchaseUnitInput) < product?.minimumOrder && product.availableQuantity >= product.minimumOrder ? "You have to order at least Minimum quantity" : ""
                                }
                                {
                                    parseInt(purchaseUnitInput) > product?.availableQuantity ? " You have to order between Minimum Quantity to Available quantity" : ""
                                }
                                {
                                    purchaseUnitInput?.length === 0 ? "Please order Minimum quantity" : ""
                                }


                            </h1>


                        </div>
                        <div className='flex items-center gap-3'>
                            <label htmlFor="">Purchase units: </label>
                            <div className='flex '>

                                <h1 onClick={handleMinus} className='bg-red-300 px-3 font-extrabold text-3xl text-red-800 active:bg-red-500'>-</h1>

                                <input onChange={handleInputOnChange} className='text-2xl font-bold bg-transparent text-black border-2 pl-3 max-w-[100px]' placeholder={purchaseUnitInput} type="number" name="purchaseUnit" id="" value={purchaseUnitInput} />

                                <h1 onClick={handlePlus} className='bg-green-300 text-green-800 px-3 font-extrabold text-3xl active:bg-green-600'>+</h1>
                            </div>

                        </div>

                        <div>
                            {
                                parseInt(purchaseUnitInput) < product?.minimumOrder || parseInt(purchaseUnitInput) > product?.availableQuantity || purchaseUnitInput?.length === 0 ?


                                    <button
                                        disabled

                                        className=' md:w-3/4 lg:w-2/4 w-full  mt-5 md:text-2xl md:px-12 px-5 py-2 bg-gray-300 rounded-lg text-white font-bold md:tracking-widest '>Place to Cart</button>
                                    :
                                    <button
                                        onClick={handlePlaceAddToCart}
                                        className=' md:w-3/4 lg:w-2/4 w-full active:bg-slate-600 mt-5 md:text-2xl md:px-12 px-5 py-2 bg-yellow-600 rounded-lg text-white font-bold md:tracking-widest hover:bg-yellow-500'>Place to Cart</button>
                            }

                        </div>
                    </div>


                </div>
            </div>

        </div >
    );
};

export default ManageProduct;