import React from 'react';
import {FaCirclePlay} from "react-icons/fa6";

const LiveSession = () => {
    const image = "https://i.imgur.com/p5NbAj4.jpeg"


    return (
        <div className="container my-10 border border-violet-300 max-w-6xl mx-auto rounded-md bg-grey-200">
            
            <div className="flex gap-6 ">
                <div className='p-20 space-y-5'>
                    <p className="text-5xl font-semibold text-slate-800 ">Talk to a Native</p>
                    <p className='text-gray-700 text-lg font-semibold'>Talk to a native and build your communication skill up to next level.</p>
                    <button className='btn bg-violet-700 text-white'>View details</button>
                </div>
                <div>
                    <figure className="relative overflow-hidden m-3 h-[25rem] w-[35rem] rounded-lg">
                        <img
                            src={image}
                            alt={name}
                            className="rounded-sm object-fit  transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <div >
                            <button className="btn btn-circle text-violet-600 absolute top-[40%] left-[50%]" >
                                <FaCirclePlay
                                    className="w-12 h-12  p-0 transition-colors duration-200 ease-in-out"/>
                            </button> 
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default LiveSession;