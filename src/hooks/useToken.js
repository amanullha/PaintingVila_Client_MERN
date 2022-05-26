import { useState, useEffect } from 'react'



const useToken = (user) => {

    const [token, setToken] = useState('');

    useEffect(() => {
        console.log(user);

        const email = user?.user?.email;
        const displayName = user?.user?.displayName;
        const image = user?.user?.photoURL;

        // console.log("email: ", email);
        // console.log("displayName: ", displayName);


        const currentUser = {

            email: email,
            name: displayName,
            image:image
        }

        if (email) {


            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("insede: ", data);
                    setToken(data.token);
                    localStorage.setItem('accessToken', data.token);
                })









        }


    }, [user])

    return [token, setToken];
}

export default useToken;