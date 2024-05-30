import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/01.jpg';
import img2 from '../../assets/02.jpg';
import img3 from '../../assets/03.jpg';
import img4 from '../../assets/04.jpg';
import img5 from '../../assets/05.jpg';


const Banner = () => {
    return (
        <div>
            <Carousel>
                <div className="relative ">
                    <div className="absolute font-serif px-24 py-12 top-1/4">
                        <h1 className="text-7xl text-white  font-extrabold ">Discover
                            Your Potential
                            with Top Language Tutors
                        </h1>
                        <button className="btn bg-black mt-10 border-0 hover:bg-white hover:text-black text-xl text-white px-10">Get Started</button>
                    </div>
                    <img src={img1}/>

                </div>
                <div className="relative">
                    <div className="absolute px-24 py-12 top-1/4">
                        <h1 className="text-7xl text-white  font-extrabold ">Discover
                            Your Potential
                            with Top Language Tutors
                        </h1>
                        <button
                            className="btn bg-black mt-10 border-0 hover:bg-white hover:text-black text-xl text-white px-10">Get
                            Started
                        </button>
                    </div>
                    <img src={img2}/>

                </div>
                <div className="relative">
                    <div className="absolute px-24 py-12 top-1/4">
                        <h1 className="text-7xl text-white  font-extrabold ">Discover
                            Your Potential
                            with Top Language Tutors
                        </h1>
                        <button
                            className="btn bg-black mt-10 border-0 hover:bg-white hover:text-black text-xl text-white px-10">Get
                            Started
                        </button>
                    </div>
                    <img src={img3}/>

                </div>
                <div className="relative">
                    <div className="absolute px-24 py-12 top-1/4">
                        <h1 className="text-7xl text-white  font-extrabold ">Discover
                            Your Potential
                            with Top Language Tutors
                        </h1>
                        <button
                            className="btn bg-black mt-10 border-0 hover:bg-white hover:text-black text-xl text-white px-10">Get
                            Started
                        </button>
                    </div>
                    <img src={img4}/>

                </div>
                <div className="relative">
                    <div className="absolute px-24 py-12 top-1/4">
                        <h1 className="text-7xl text-white  font-extrabold ">Discover
                            Your Potential
                            with Top Language Tutors
                        </h1>
                        <button
                            className="btn bg-black mt-10 border-0 hover:bg-white hover:text-black text-xl text-white px-10">Get
                            Started
                        </button>
                    </div>
                    <img src={img5}/>

                </div>

            </Carousel>
        </div>
    );
};

export default Banner;