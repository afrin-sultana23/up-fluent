import React, {useContext} from 'react';
import {AuthContext} from "../AuthProvider/AuthProvider.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {FaGoogle} from "react-icons/fa";

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from, {replace: true})
            })
    }

    return (
        <div>
            <div className="divider">Or</div>
            <div className="w-full text-center py-2">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;