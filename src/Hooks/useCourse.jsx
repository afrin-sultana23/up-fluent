import {useEffect, useState} from "react";

// @tanstack/react-query

const useCourse = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            fetch('https://server-upfluent.vercel.app/courses')
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(false)

                })
            }, []);

    return [data, setData, loading]
}


export default useCourse;