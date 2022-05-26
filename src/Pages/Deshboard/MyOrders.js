import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyLoading from '../Shared/MyLoading/MyLoading';

const MyOrders = () => {

    // const [orders, setOrders] = useState([])
    const [user, loading, error] = useAuthState(auth);
    const [cancelItem, setCancelItem] = useState(null)

    const navigate = useNavigate();


    const { data: orders, isLoading, refetch } = useQuery('my-orders', () => fetch(`http://localhost:5000/my-orders?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (loading || isLoading) {
        <MyLoading />
    }

    // const {data:orders,isLoading,refetch}=useQuery('my-orders',()=>fetch())

    // useEffect(() => {






    //     if (user) {
    //         fetch(`http://localhost:5000/my-orders?email=${user.email}`, {
    //             method: 'GET',
    //             headers: {
    //                 'content-type': 'application/json',
    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => {
    //                 console.log(res);

    //                 if (res.status === 401 || res.status === 403) {

    //                     signOut(auth);
    //                     localStorage.removeItem('accessToken');
    //                     navigate('/login')
    //                 }

    //                 return res.json();
    //             })
    //             .then(data => {

    //                 setOrders(data);
    //             })
    //     }


    // }, [user])

    const handleDeleteOrderedItem = () => {

        if (cancelItem) {

            fetch(`http://localhost:5000/order/${cancelItem._id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log("delteItem: ", data);
                    if (data?.deletedCount) {
                        addCancelOrderQuantityToDb(cancelItem)
                        // toast.success("Deleted Successfully");
                        setCancelItem(null);
                        refetch();
                    } else {
                        toast.warning("You can't delete")
                    }
                })

        }
    }


    const addCancelOrderQuantityToDb = (item) => {

        fetch(`http://localhost:5000/products/${item?.productId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ orderedQuantity: (-1 * item?.purcheseQuentity) })

        })
            .then(res => res.json())
            .then(data => {
                console.log("updated data; ", data);
                if (data?.acknowledged) {
                    toast.success("Deleted Successfully");
                }
            })
    }

    return (
        <div className='my-8'>

            <h1 className='text-center text-3xl my-3 font-bold tracking-wider'>My Orders {orders?.length}</h1>





            <div className="overflow-x-auto">
                <table className="table  w-full mx-2">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{order?.productName}</td>
                                    <td>{order?.purcheseQuentity}</td>
                                    <td>{order?.perUnitPrice} X {order?.purcheseQuentity} = {order?.perUnitPrice * order?.purcheseQuentity}</td>

                                    <td>{order?.purchaseDate}</td>

                                    {
                                        order?.paymentStatus ? <td className='text-green-600 font-bold '>Paid</td> : <td className='text-red-600 font-bold '>Unpaid</td>
                                    }


                                    {
                                        order?.paymentStatus ?

                                            <td>
                                                Panding
                                            </td>
                                            :
                                            <td className='p-0 m-0 '>

                                                {/* <td htmlFor="cancel-modal" className='modal-button  h-full w-1/2  hover:text-white active:bg-blue-900 cursor-pointer font-bold text-center  bg-red-300 text-red-700'>Cancel Order
                                                </td> */}

                                                <td className='bg-red-300  m-0 p-0'>

                                                    <label onClick={() => setCancelItem(order)} htmlFor="cancel-modal" className='pt-5 pb-4 px-3 hover:text-white active:bg-blue-900 cursor-pointer font-bold text-center  bg-red-300 text-red-700 ' >Cancel order</label>

                                                </td>


                                                <td className=' h-full w-1/2 hover:text-red-500 active:bg-blue-900 cursor-pointer font-bold text-center  bg-blue-700 text-white'>Place order
                                                </td>
                                            </td>

                                    }
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>






            {/* Modal  */}


            {/* <!-- The button to open modal --> */}
            {/* <label htmlFor="cancel-modal" className="btn modal-button">open modal</label> */}

            {/* <!-- Put this part before </body> tag-- > */}

            <input type="checkbox" id="cancel-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div className=' w-full bg-yellow-700'>
                        <label htmlFor="cancel-modal" className='float-right bg-red-100 px-2 py-1 rounded-full text-red-700 cursor-pointer'>X</label>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">Are you sure</h3>
                        <p className="py-4">To cancel the order press [YES] button,else press[NO]</p>

                        <div className='flex justify-center w-full mt-5 gap-5'>
                            <button onClick={handleDeleteOrderedItem} className='btn btn-error'>YES</button>
                            <label htmlFor="cancel-modal" className='btn btn-success'>NO</label>
                        </div>
                    </div>










                    <div className="modal-action">

                    </div>
                </div>
            </div>







        </div >
    );
};

export default MyOrders;