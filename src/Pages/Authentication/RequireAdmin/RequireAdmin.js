import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import MyLoading from '../../Shared/MyLoading/MyLoading';
// import VerifyEmail from '../VerifyEmail/VerifyEmail';



const RequireAdmin = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const [admin, setAdmin, adminLoading] = useAdmin(user);

    let location = useLocation();


    if (loading || adminLoading) {
        return <div className='flex justify-center items-center'><MyLoading /></div>;
    }

    if (!user || !admin) {

        localStorage.removeItem('accessToken');
        signOut(auth);

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // if (user && user.providerData[0].providerId === 'password' && user.emailVerified === false) {
    //     return <VerifyEmail />
    // }

    return children;
}

export default RequireAdmin;