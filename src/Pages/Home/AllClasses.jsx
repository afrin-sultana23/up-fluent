import React, {useEffect, useState} from 'react';
import useCourse from "../../Hooks/useCourse.jsx";
import Swal from "sweetalert2";
import {FaTrashAlt} from "react-icons/fa";
import axios from "axios";

const AllClasses = () => {

    const [data ] = useCourse();
    //const [courses , setCourses] = useState(data);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        if (data.length > 0) {
            setCourses(data);
        }
    }, [data]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                  axios.get(`https://server-upfluent.vercel.app/courses/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(info => {
                        console.log('deleted res', info);
                        if (info.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your course has been deleted.",
                                icon: "success"
                            });
                            setCourses(prevCourses => prevCourses.filter(item => item._id !== id));
                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className="py-3">
                <h1 className="font-bold">TOTAL CLASSES : {courses.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr className="text-white bg-fuchsia-500">
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Enrolled</th>
                        <th>Lessons</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        courses.map((item, index) => <tr
                            key={item._id}
                        >
                            <th>{index + 1}</th>
                            <td>{item.course_name}</td>
                            <td>{item.category}</td>
                            <td>{item.enrolled}</td>
                            <td>{item.lessons}</td>
                            <td>{item.rating}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className="bg-[#ff3C00] text-white
                                    btn btn-ghost btn-sm"><FaTrashAlt/></button>
                            </td>
                        </tr>)
                    }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClasses;



// const handleDelete = (id) => {
//     const proceed = confirm("Are you sure you want to delete");
//
//     if (proceed) {
//         fetch(`http://localhost:5000/bookings/${id}`, {
//             method: "DELETE",
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 if (data.deletedCount > 0) {
//                     alert("deleted successfully");
//                     const remaining = bookings.filter((booking) => booking._id !== id);
//                     setBookings(remaining);
//                 }
//             });
//     }
// };