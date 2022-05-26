import React from 'react';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';
import MyLoading from '../Shared/MyLoading/MyLoading';
import UserRow from './UserRow';

const Users = () => {


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <MyLoading />
    }





    return (
        <div>
            <h1 className='text-3xl text-secondary font-bold text-center'>All users {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr >
                            <th className='text-xl'>User Email</th>
                            <th className='text-xl'>Role</th>
                            <th className='text-xl'>Operation</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}

                            ></UserRow>)
                        }


                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Users;