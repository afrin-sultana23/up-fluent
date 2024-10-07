import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "https://server-upfluent.vercel.app"
})

const useAxiosSecure = () => {
    return axiosInstance ;
};

export default useAxiosSecure;