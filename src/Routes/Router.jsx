import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../User/Login.jsx";
import SignUp from "../User/SignUp.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import MyCourses from "../Pages/student/MyCourses.jsx";

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
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'myCourses',
                element: <MyCourses></MyCourses>
            }
        ]
    }
])

export default Router;