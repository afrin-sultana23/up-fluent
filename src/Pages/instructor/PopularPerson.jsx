import React from 'react';

const PopularPerson = () => {

    const instructors = () => [
        {
            image: "https://ibb.co/fYwhwmw",
            name: "John Doe",
            role: "English"
        },
        {
            image: "https://ibb.co/fYwhwmw",
            name: "John Doe",
            role: "English"
        },
        {
            image: "https://ibb.co/fYwhwmw",
            name: "John Doe",
            role: "English"
        },
        {
            image: "https://ibb.co/fYwhwmw",
            name: "John Doe",
            role: "English"
        },
        {
            image: "https://ibb.co/fYwhwmw",
            name: "John Doe",
            role: "English"
        },
        {
            image: "https://ibb.co/fYwhwmw",
            name: "John Doe",
            role: "English"
        }
    ]

    return (
        <div className="my-12">
            <h1 className="heading">Popular Instructors</h1>

            <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
                {
                    instructors().map((instructor, index) => (
                        <div key={index} className="card border border-gray-400 bg-base-100 ">
                            <figure className="px-10 pt-10">
                                <img src="https://ibb.co/fYwhwmw" alt="Instructors" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{instructor.name}</h2>
                                <p>{instructor.role}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularPerson;