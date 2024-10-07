import React, {useContext} from 'react';
import logo from '../assets/books.gif';
import {Link} from "react-router-dom";
import {AuthContext} from "../AuthProvider/AuthProvider.jsx";


const Header = () => {

    const {user, logOut} = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch( error =>
                console.log(error))
    }

    const navOptions= <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/feature">Featured</Link></li>
        {/*{*/}
        {/*    isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link>*/}
        {/*    </li> : <li>*/}
        {/*        <Link to="/dashboard/userhome">Dashboard</Link></li>*/}
        {/*}*/}
        <li><Link to="/navigation">
            My Courses
            <div className=" badge badge-secondary">
                +0</div>

        </Link></li>

    </>

    return (
        <div className="">
            <div className="navbar z-10 max-w-6xl container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu  dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-extrabold text-3xl text-[#C298F6]">
                        <img className="h-12 w-12" src={logo} alt="logo"/>
                        upFluent</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-lg menu-horizontal px-3 text-black">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="log-btn">Log Out</button>
                        </> : <>
                            <Link to="/login" className="log-btn">Login</Link>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;