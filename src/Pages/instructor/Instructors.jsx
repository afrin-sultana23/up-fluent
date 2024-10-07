import React, { useState, useEffect } from 'react';


const instructors = [
    { id: 1, name: "John Doe", language: "Spanish", image: "https://i.imgur.com/Qcz8rDf.jpeg", description: "Expert in conversational Spanish" },
    { id: 2, name: "Jane Smith", language: "French", image: "https://imgur.com/y7ug15A.png", description: "Specializes in French literature" },
    { id: 3, name: "Mike Johnson", language: "German", image: "https://i.imgur.com/3b5DL4H.jpeg", description: "Focuses on business German" },
    { id: 4, name: "Emily Johnson", language: "Italian", image: "https://imgur.com/tscySrk.png", description: "Italian cuisine and culture expert" },
    { id: 5, name: "David Lee", language: "Mandarin", image: "/placeholder.svg?height=200&width=200", description: "Teaches Mandarin for beginners" },
];

const Instructors = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (instructors.length - 2));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (instructors.length - 2)) % (instructors.length - 2));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="container mx-auto p-4 max-w-6xl flex justify-between bg-violet-200 rounded-md">
            <div className="w-2/3 flex justify-between items-start mb-6">
                <div className="">
                    <h2 className="text-3xl font-bold text-primary mb-2">Meet Our Instructors</h2>
                    <p className="text-base-content opacity-70">Learn from the best in the field</p>
                </div>

            </div>
            <div className="overflow-hidden ">
                <div className="flex space-x-2 ">
                    <button className="btn btn-sm btn-circle btn-outline" onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline" onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
                <div
                    className="flex transition-transform duration-300 ease-in-out mt-4"
                    style={{transform: `translateX(-${currentIndex * 33.33}%)`}}
                >
                    {instructors.map((instructor) => (
                        <div key={instructor.id} className="flex-shrink-0 w-full md:w-1/3 p-2">
                            <div className="card h-[22rem] bg-violet-100 border border-gray-400 rounded-md ">
                                <figure className="relative overflow-hidde m-3">
                                    <img
                                        src={instructor.image}
                                        alt={instructor.name}
                                        className="rounded-sm object-fit  transition-transform duration-300 ease-in-out hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </figure>
                                <div className="">
                                    <h3 className="card-title">{instructor.name}</h3>
                                    <p className="text-sm opacity-70">{instructor.language} Instructor</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;