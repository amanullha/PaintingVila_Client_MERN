import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import MyLoading from '../Shared/MyLoading/MyLoading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { toast } from 'react-toastify';




const ManageProductInfo = ({ callFrom }) => {

    const [user, loading, error] = useAuthState(auth);
    const [deleteProduct, setDeleteProduct] = useState(null);
    let loader = true;
    const [admin, setAdmin, adminLoading] = useAdmin(user);


    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/products`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        <MyLoading />
    }

    const handleDeleteProductItem = () => {

        if (!admin) {
            toast.warning("You haven't permission")
            return;
        }
        if (deleteProduct) {

            fetch(`http://localhost:5000/product/${deleteProduct}`, {
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

                        toast.success("Deleted Successfully");
                        setDeleteProduct(null);
                        refetch();

                    } else {
                        toast.warning("You can't delete")
                    }
                })

        }
    }


    return (
        <div className='py-10 mx-5 lg:mx-10 xl:mx-20'>
            <h1 className='text-center font-bold text-4xl pt-16 pb-10 text-yellow-600'>Manage Products</h1>

            <div className="overflow-x-auto">
                <table className="table  w-full mx-2">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((p, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <th>
                                        <img width={50} className="rounded-full" src={p?.image} alt="" />
                                    </th>
                                    <th>{p?.name}</th>
                                    <th>{p?.unitPrice}</th>
                                    <th>{p?.availableQuantity}</th>
                                    <th>
                                        <label onClick={() => setDeleteProduct(p?._id)} htmlFor="product-delete-modal" className=' pt-5 pb-4 px-3 hover:text-white active:bg-blue-900 cursor-pointer font-bold text-center  bg-red-300 text-red-700 ' >Delete</label>


                                    </th>


                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>






            {/* delete modal */}

            <input type="checkbox" id="product-delete-modal" className="modal-toggle" />

            <div className={`modal modal-bottom sm:modal-middle`}>
                <div className="modal-box">

                    <div className=' w-full bg-yellow-700'>
                        <label htmlFor="product-delete-modal" className='float-right bg-red-100 px-2 py-1 rounded-full text-red-700 cursor-pointer'>X</label>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">Are you sure</h3>
                        <p className="py-4">To Delete the Product press [YES] button,else press[NO]</p>

                        <div className='flex justify-center w-full mt-5 gap-5'>

                            <label onClick={handleDeleteProductItem} htmlFor="product-delete-modal" className='btn btn-error'>YES</label>

                            <label htmlFor="product-delete-modal" className='btn btn-success'>NO</label>
                        </div>
                    </div>

                    <div className="modal-action">

                    </div>
                </div>
            </div>








        </div>
    );
};


export default ManageProductInfo;