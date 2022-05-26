import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {


    const handleDeleteDoctor = () => {

        fetch(`http://localhost:5000/doctor/${doctor.email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Deleted Successfully");
                    refetch();
                } else {
                    toast.warning("You can't delete")
                }
            })



    }



    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded-full">
                    <img src={doctor?.img} alt={doctor?.name} />
                </div>
            </div></td>
            <td>{doctor?.name}</td>
            <td>{doctor?.specilty}</td>
            <td><button onClick={handleDeleteDoctor} className='btn btn-error'>Delete</button></td>
        </tr>
    );
};

export default DoctorRow;