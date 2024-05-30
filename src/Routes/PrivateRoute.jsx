import React, {useContext} from 'react';
import {AuthContext} from "../AuthProvider/AuthProvider.jsx";
import {Navigate, useLocation} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <progress className="progress w-80 absolute left-1/3 top-1/2"></progress>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;