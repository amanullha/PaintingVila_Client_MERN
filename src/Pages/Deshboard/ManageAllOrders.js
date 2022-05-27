import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyLoading from '../Shared/MyLoading/MyLoading';

const ManageAllOrders = () => {

    const [user, loading, error] = useAuthState(auth);
    const [cancelItem, setCancelItem] = useState(null)

    const navigate = useNavigate();


    const { data: orders, isLoading, refetch } = useQuery('my-orders', () => fetch(`https://whispering-ravine-55878.herokuapp.com/orders`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (loading || isLoading) {
        <MyLoading />
    }


    const handleDeleteOrderedItem = () => {

        if (cancelItem) {

            fetch(`https://whispering-ravine-55878.herokuapp.com/order/${cancelItem._id}`, {
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

        fetch(`https://whispering-ravine-55878.herokuapp.com/products/${item?.productId}`, {
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
        <div className=''>

            <h1 className='text-center text-3xl my-3 font-bold tracking-wider'>My Orders </h1>

            {/* {orders?.length} */}



            <div className="overflow-x-auto">
                <table className="table  w-full mx-2">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Email</th>
                            <th>Product name</th>
                            <th>Units</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{order?.userEmail}</td>
                                    <td>{order?.productName}</td>
                                    <td>{order?.purcheseQuentity}</td>
                                    <td> {order?.perUnitPrice * order?.purcheseQuentity}</td>



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



                                                <td className='bg-red-300  m-0 p-0'>

                                                    <label onClick={() => setCancelItem(order)} htmlFor="cancel-modal" className='pt-5 pb-4 px-3 hover:text-white active:bg-blue-900 cursor-pointer font-bold text-center  bg-red-300 text-red-700 ' >Cancel order</label>

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

export default ManageAllOrders;