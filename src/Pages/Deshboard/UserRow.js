import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {

    const { email, role } = user;

    // console.log("email in useRow: ", email);

    const handleMakeAdmin = () => {

        console.log("make admin : ", email);

        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.warning("You are not an admin for make admin")
                }
                return res.json();
            })
            .then(data => {
                console.log("mama ", data);

                if (data.modifiedCount > 0) {
                    toast.success("Successfully made an Admin")
                    refetch();
                }



            })

    }

    return (

        <tr>
            <th>{email}</th>
            <th>{role !== "admin" ? <button onClick={handleMakeAdmin} className='btn btn-xs'>Make Admin</button> : <button className='rounded-lg border-2 hover:text-yellow-800 w-[95px] bg-green-100 text-black hover:text-white ' >Admin</button>}</th>
            <th><button className='btn btn-xs'>Remove user</button></th>
        </tr>

    );
};

export default UserRow;