import { useEffect, useState } from 'react'


const useAdmin = (user) => {

    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;

        if (email) {

            fetch(`https://whispering-ravine-55878.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log('isAdmin :', data.admin);

                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }

    }, [user])

    return [admin, setAdmin, adminLoading];
}

export default useAdmin;