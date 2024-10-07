import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../User/Login.jsx";
import SignUp from "../User/SignUp.jsx";
import Dashboard from "../Dashboard/UserNav.jsx";
import MyCourses from "../Pages/student/MyCourses.jsx";
import Navigation from "../Dashboard/Navigation.jsx";
import Analytics from "../Dashboard/Analytics.jsx";
import UserHome from "../Dashboard/UserHome.jsx";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'navigation',
        element: <Navigation></Navigation>,
        children: [
            {
                path: 'myCourses',
                element: <MyCourses></MyCourses>
            },
            {
                path: 'home',
                element: <UserHome></UserHome>,
            },
            {
                path: 'analytics',
                element: <Analytics></Analytics>,
            },
            {

            }
        ]
    }
])

export default Router;