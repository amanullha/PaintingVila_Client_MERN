import React from 'react';
import { useQuery } from 'react-query';
import MyLoading from '../Shared/MyLoading/MyLoading';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {


    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://whispering-ravine-55878.herokuapp.com/doctors', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        <MyLoading />
    }
    return (
        <div>

            <h1 className='text-center text-2xl'>Manage Doctor {doctors?.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Specialty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors?.map((doctor, index) => <DoctorRow
                                    key={doctor?._id}
                                    doctor={doctor}
                                    index={index}
                                    refetch={refetch}
                                />)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageDoctor;