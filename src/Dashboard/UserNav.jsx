import { useState } from 'react';
import {FaFolder, FaStar, FaWallet, FaUserGraduate} from 'react-icons/fa';
import {NavLink} from "react-router-dom";

const UserNav = () => {
    const [isExpanded, setIsExpanded] = useState(false);

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
                                <h2 className="text-sm font-semibold">Afrin</h2>
                                <p className="text-xs text-gray-600">afrin@gmail.com</p>
                                <p className="text-xs text-Black font-medium">Role: Instructor</p>

                            </div>
                        )}
                    </div>
                </div>
                <hr className="border-gray-200" />
                <ul className="mt-5">
                    <NavItem  to={"/Navigation/myCourses"}  icon={<FaUserGraduate />} title="Student home" />
                    <NavItem icon={<FaFolder />} title="Courses" />
                    <NavItem icon={<FaStar />} title="Starred" />
                    <NavItem icon={<FaWallet />} title="Payment" />
                    <NavItem icon={<FaStar />} title="Enrollment" />
                </ul>
            </nav>
            <main className="flex-1 bg-white p-4">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-rose-30 w-1/3">fjfks jkkkjsak</div>
                    <div className="bg-cyan-400 w-1/3"></div>
                    <div className="bg-lime-300 w-1/3"></div>
                </div>

            </main>
        </div>
    );
};

const NavItem = ({icon, title}) => {
    return (
        <li className="mb-2">

            <NavLink to=''
                     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
                <span className="mx-4 text-xl">{icon}</span>
                <span className="text-md pl-3">{title}</span>
            </NavLink>
        </li>
    );
};

export default UserNav;