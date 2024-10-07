import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = () => {
    const [languageClasses, setLanguageClasses] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        // Sample language class data with images
        const data = [
            { course_name: 'English Beginner', price: '$99', course_image: 'https://i.ibb.co/pQWG2r6/italian.jpg' },
            { course_name: 'Spanish Intermediate', price: '$129', course_image: 'https://i.ibb.co/YcnQGLH/chinese.jpg' },
            { course_name: 'Japanese Advanced', price: '$159', course_image: 'https://i.ibb.co/7CTDnxx/german.jpg' },
            { course_name: 'German Conversation', price: '$89', course_image: 'https://i.ibb.co/1QPZdQ3/spanish.jpg' },
            { course_name: 'Korean Writing', price: '$119', course_image: 'https://i.ibb.co/pQWG2r6/italian.jpg' },
            { course_name: 'Arabic Reading', price: '$149', course_image: 'https://i.ibb.co/7CTDnxx/german.jpg' },
        ];
        setLanguageClasses(data);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <div className="">
        <div className="product-slider max-w-5xl mx-auto">
            <h1 className="heading my-7">Lessons you will love</h1>
            <Slider ref={sliderRef} {...settings}>
                {languageClasses.map((cls, index) => (
                    <div key={index} className="px-3">
                        <div className="card h-[18rem] bg-base-100 border border-gray-300 rounded-md shadow-sm">
                            <figure className="m-3 h-56">
                                <img className="rounded-sm" src={cls.course_image} alt=""/>
                            </figure>
                            <div className="card-body pt-1 pb-1 px-4">
                                <h2 className="card-title text-black truncate">{cls.course_name}</h2>
                                <div className="flex justify-between items-center">
                                    <p className="text-xl text-black font-bold">{cls.price}</p>
                                    <button className="link text-purple-600 font-bold">more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    );
};

export default ProductSlider;