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
    const [deUpdateProduct, setUpdateProduct] = useState(null);
    let loader = true;
    const [admin, setAdmin, adminLoading] = useAdmin(user);




    const [save, setSave] = useState(false);



    const [unitPrice, setUnitPrice] = useState('')
    const [stock, setStock] = useState('')
    const [minOrder, setMinOrder] = useState('')









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
    const handleUpdateProductItem = () => {

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





    // update



    const unitPriceOnChange = (e) => {
        const newValue = e.target.value;
        setUnitPrice(newValue)
        setSave(true);
    }
    const stockOnChange = (e) => {
        const newValue = e.target.value;
        setStock(newValue)
        setSave(true);

    }
    const minOrderOnChange = (e) => {
        const newValue = e.target.value;
        setMinOrder(newValue)
        setSave(true);

    }

    const handleSave = () => { }

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


                                        <label onClick={() => setUpdateProduct(p?._id)} htmlFor="product-update-modal" className=' pt-5 pb-4 px-3 hover:text-white active:bg-blue-900 cursor-pointer font-bold text-center  bg-blue-700 text-white ' >Update</label>


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

















            {/* update modal */}

            <input type="checkbox" id="product-update-modal" className="modal-toggle" />

            <div className={`modal modal-bottom sm:modal-middle`}>
                <div className="modal-box">

                    <div className=' w-full bg-yellow-700'>
                        <label htmlFor="product-update-modal" className='float-right bg-red-100 px-2 py-1 rounded-full text-red-700 cursor-pointer'>X</label>
                    </div>

                    <div>
                        <h1 className='mb-2 text-center text-2xl font-bold text-yellow-600'>Update product </h1>
                        <hr />

                        <div className='flex justify-center gap-5 mt-5'>

                            <div className='flex flex-col gap-8  '>
                                <h1 className='font-bold text-xl text-yellow-700'>Unit price: </h1>
                                <h1 className='font-bold text-xl text-yellow-700'>Stock: </h1>
                                <h1 className='font-bold text-xl text-yellow-700'>Min order: </h1>


                            </div>

                            <div className='flex flex-col gap-5 '>

                                <input onChange={unitPriceOnChange} className='max-w-[150px] text-2xl font-bold bg-transparent text-black border-2 pl-3 ' type="number" name="education" id="" value={unitPrice} />


                                <input onChange={minOrderOnChange} className='max-w-[150px] text-2xl font-bold bg-transparent text-black border-2 pl-3 ' type="number" name="phone" id="" value={minOrder} />


                                <input onChange={stockOnChange} className='max-w-[150px] text-2xl font-bold bg-transparent text-black border-2 pl-3 ' type="number" name="address" id="" value={stock} />

                            </div>









                        </div>
                        <div className='flex justify-center mt-10'>
                            {
                                save ? <h1 className='text-red-700'>Please save changes</h1> : ''
                            }
                        </div>
                        <div className='flex justify-center mt-4'>

                            {
                                save ?
                                    <button onClick={handleSave} className='rounded-lg bg-blue-600 text-white font-bold tracking-wider w-1/2 py-2 text-2xl hover:text-yellow-500 active:bg-blue-400 active:text-black' >Save</button>
                                    :
                                    <button className='rounded-lg bg-blue-300 text-white font-bold tracking-wider w-1/2 py-2 text-2xl ' >Save</button>
                            }
                        </div>



























                        <h3 className="font-bold text-lg">Are you sure</h3>
                        <p className="py-4">To update the Product press [YES] button,else press[NO]</p>

                        <div className='flex justify-center w-full mt-5 gap-5'>

                            <label onClick={handleDeleteProductItem} htmlFor="product-update-modal" className='btn btn-error'>YES</label>

                            <label htmlFor="product-update-modal" className='btn btn-success'>NO</label>
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