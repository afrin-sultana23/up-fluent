import React, { useState } from 'react';
import {
    FaHome,
    FaBookOpen,
    FaPencilAlt,
    FaTasks,
    FaChartBar
} from 'react-icons/fa';
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const navItems = [
        { to: "home", icon: <FaHome />, title: "Home" },
        { to: "myCourses", icon: <FaBookOpen />, title: "Classes" },
        { to: "exams", icon: <FaPencilAlt />, title: "Exams" },
        { to: "tasks", icon: <FaTasks />, title: "Tasks" },
        { to: "analytics", icon: <FaChartBar />, title: "Analytics" }
    ];

    return (
        <div className="flex h-screen">
            <nav
                className={`bg-gray-100 transition-all duration-300 ease-in-out ${
                    isExpanded ? 'w-64' : 'w-20'
                }`}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >
                <div className="ml-1 p-4">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/teacher-1.jpg"
                            alt="Afrin sultana"
                            className="w-10 h-10 rounded-full"
                        />
                        {isExpanded && (
                            <div>
                                <h2 className="text-sm font-semibold">Afrin Sultana</h2>
                                <p className="text-xs text-gray-600">afrin@gmail.com</p>
                            </div>
                        )}
                    </div>
                </div>
                <hr className="border-gray-200" />
                <ul className="mt-5">
                    {navItems.map((item, index) => (
                        <NavItem key={index} to={item.to} icon={item.icon} title={item.title} />
                    ))}
                </ul>
            </nav>
            <main className="flex-1 bg-white p-4">
                <div className="grid grid-cols-3 gap-2">
                    <div className="bg-rose-300 h-96 w-full"></div>
                    <div className="bg-cyan-400 h-96 w-full"></div>
                    <div className="bg-lime-300 h-96 w-full"></div>
                </div>
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

const NavItem = ({ icon, to, title }) => {
    return (
        <li className="mb-2">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 ${isActive ? 'bg-gray-200' : ''}`
                }
            >
                <span className="mx-4 text-xl">{icon}</span>
                <span className="text-lg pl-4">{title}</span>
            </NavLink>
        </li>
    );
};

export default Navigation;