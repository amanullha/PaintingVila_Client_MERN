import { useState, useEffect } from 'react'
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import MyLoading from '../Pages/Shared/MyLoading/MyLoading';


const useOrderAdd = (order) => {

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        <MyLoading />
    }

    
    if (user) {

        order.userEmail = user?.email;
        fetch(`http://localhost:5000/orders`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log("insede: ", data);

            })
    }




}

export default useOrderAdd;