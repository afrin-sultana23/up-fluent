import React from 'react';
import {FaUserGraduate} from "react-icons/fa";
import {FaComputer, FaPeopleGroup, FaSchool} from "react-icons/fa6";


const Totalgrid = () => {

    const grids = [
        {
            icon: <FaComputer/>,
            title: "Total Online Classes",
            number: "1500+"
        },
        {
            icon: <FaUserGraduate/>,
            title: "Enrolled Students",
            number: "20,000+"
        },
        {
            icon: <FaSchool/>,
            title: "Total Instructors",
            number: "8000+"
        },
        {
            icon: <FaPeopleGroup />,
            title: "Native Speakers",
            number: "2000+"
        }
    ]

    return (
        <div className="mb-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
            {grids.map((grid, index) =>
                <div key={index}
                     className="bg-purple-200 p-4 flex rounded-lg">
                    <div className="p-3">
                        <h1 className="text-indigo-500 text-4xl">{grid.icon}</h1>
                    </div>
                    <div className="text-slate-700">
                        <h1 className="text-xl font-medium">{grid.title}</h1>
                        <h1 className="text-2xl font-extrabold">{grid.number}</h1>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Totalgrid;