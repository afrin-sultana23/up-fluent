import React from 'react';
import Lottie from "react-lottie";
import animationData from "../../anime/01.json"
import {FaTelegramPlane} from "react-icons/fa";

const Newsletter = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="my-16 ">
            <div className="flex mx-auto container p-14 bg-purple-200 h-[22rem] rounded-lg max-w-4xl">
                <div className=' h-1/2'>
                    <h1 className="heading mt-5">Subscribe to our Newsletter</h1>
                    <p className="text-gray-500 text-lg font-medium ml-20">Take your career to unique heights!!</p>
                    <div className="flex ml-24 mt-5">
                        <level className=" input input-bordered rounded-r-none flex items-center gap-2 ">
                            <input type="text" className=""/>
                        </level>
                        <button className="btn bg-[#C298F6] border-none tracking-wider rounded-l-none"><FaTelegramPlane/></button>
                    </div>
                </div>
                <div className="w-1/3 mr-10">
                    <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;