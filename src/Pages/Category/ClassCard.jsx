import React, {useContext} from 'react';
import {AuthContext} from "../../AuthProvider/AuthProvider.jsx";
import {FaStar} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure.jsx";



const ClassCard = ({item}) => {


    const {_id, course_name, course_details, instructor_name, image, price, lessons, rating, enrolled} = item;
    const {user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const axiosInstance = useAxiosSecure()

    const handleAddCart = item => {
        console.log(item)
        if (user && user.email) {
            let cartItem = {
                classId: _id,
                email: user.email,
                course_name,
                image,
                price,
                lessons
            }
            axiosInstance.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        window.alert("Enroll Success")
                    }
                })
        } else {
            Swal.fire({
                title: 'Please Login to Enroll !',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#8f69cc',
                cancelButtonColor: '#d4a1e0',
                confirmButtonText: 'Login Now',
            }).then((result) => {
                if (result.isConfirmed){
                    navigate('/login', {state: {from : location}});
                }
            })
        }
    }

    return (
        <div>
            <div className="card h-[28rem]  bg-base-100 border border-gray-300 rounded-md shadow-sm">
                <figure className=" m-3 "><img className="rounded-sm" src={image} alt=""/>
                </figure>
                <div className="card-body flex flex-col px-4 pt-1 pb-2">
                    <div className="flex text-sm ">
                        <p className=" font-bold text-gray-400">{instructor_name}</p>
                        <p className="text-gray-400 absolute right-5"><FaStar
                            className="inline text-lg text-yellow-400 pb-1"/> {rating}</p>
                    </div>
                    <h2 className="card-title  text-black truncate">{course_name}</h2>
                    <p className="border-b-2 pb-1 text-sm text-[#858585]">{course_details}</p>
                    <div className="py-1.5 flex items-center justify-between font-bold text-gray-500 text-xs">
                        <p className="">{lessons} Lessons</p>
                        <p className="">{enrolled} Enrolled</p>
                        <p className="badge badge-secondary text-white font-bold ">{price}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddCart(item)} className="enroll-btn">Enroll
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;