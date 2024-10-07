import React from 'react';
import {FaMagnifyingGlass} from "react-icons/fa6";
import bg from '/bg.png'
import Lottie from "react-lottie";
import animationData from '../../anime/03.json';

const BgHome = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="pt-10 h-screen">
            <div className="flex justify-between h-[75vh] max-w-6xl border-2 border-gray-200 rounded-md
            mx-auto  container ">
                {/*<img className=" -z-10" src={bg} alt=""/>*/}
                <div className="space-y-5 pt-16 w-1/2 pl-3 -z-10 " style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%'}} >
                    <h1 className=" text-6xl  font-extrabold">Discover
                        Your Potential
                        with Top Language Tutors</h1>
                    <p className="text-xl font-medium text-gray-600">For every students , every classroom</p>
                    <div className="flex pt-12">
                        <label className="input input-bordered border-r-0 border-[#C298F6] rounded-r-none  flex items-center gap-2 ">
                            <input type="text" placeholder="Search"/><FaMagnifyingGlass />
                        </label>
                            <button className="btn bg-[#C298F6] tracking-wider rounded-l-none">Search</button>
                    </div>
                </div>
                <div className="">
                    <Lottie
                        options={defaultOptions}
                        height={500}
                        width={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default BgHome;