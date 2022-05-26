import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyLoading from '../Shared/MyLoading/MyLoading';

const MyAppointment = () => {

    const [appointments, setAppointments] = useState([])
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    if (loading) {
        <MyLoading />
    }


    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/myBooking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res);

                    if (res.status === 401 || res.status === 403) {
                        
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/login')
                    }

                    return res.json();
                })
                .then(data => {



                    setAppointments(data);
                })
        }


    }, [user])



    return (
        <div className='my-8'>

            <div className='flex justify-between items-center'>
                <h1 className=' mb-8'>My Appointments</h1>

                <div>
                    <h1>date</h1>
                </div>
            </div>




            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Services</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.treatmentName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;