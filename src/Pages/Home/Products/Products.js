import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import MyLoading from '../../Shared/MyLoading/MyLoading';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = ({ callFrom }) => {

    const [products, setProducts] = useState([]);
    let loader = true;

    useEffect(() => {


        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                loader = false;

                console.log(data);

                if (callFrom && callFrom === 'home') {

                    setProducts(data?.slice(0, 6));
                }
                else {
                    setProducts(data);
                }


            })

    }, [])

    if (loader) {
        <MyLoading />
    }
    return (
        <div className='py-10 mx-5 lg:mx-10 xl:mx-20'>
            <h1 className='text-center font-bold text-4xl pt-16 pb-10 text-yellow-600'>Our New Products</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5'>
                {
                    products.map(product => <SingleProduct

                        key={product._id}
                        product={product}

                    />)
                }
            </div>



        </div>
    );
};


export default Products;