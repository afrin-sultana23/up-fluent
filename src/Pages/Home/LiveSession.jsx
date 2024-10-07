import React from 'react';
import {FaCirclePlay} from "react-icons/fa6";

const LiveSession = () => {
    const image = "https://i.imgur.com/p5NbAj4.jpeg"


    return (
        <div className="container max-w-6xl rounded-md bg-grey-200">
            <div className="flex ">
                <div>
                    <p className="text-5xl text-slate-800 ">Talk to a Native</p>
                    <p></p>
                </div>
                <div>
                    <figure className="relative overflow-hidde m-3">
                        <img
                            src={image}
                            alt={name}
                            className="rounded-sm object-fit  transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                            <button
                                className="group relative inline-flex items-center justify-center p-4 w-16 h-16 rounded-full bg-lavender-100 hover:bg-lavender-200 focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:ring-offset-2 transition-colors duration-200 ease-in-out"
                                aria-label="Play video"
                            >
                                <FaCirclePlay
                                    className="w-8 h-8 text-lavender-600 group-hover:text-lavender-700 transition-colors duration-200 ease-in-out"/>
                                <span
                                    className="absolute -inset-0.5 rounded-full bg-lavender-300 opacity-0 group-hover:opacity-20 transition-opacity duration-200 ease-in-out"></span>
                            </button>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default LiveSession;