import {useContext, useEffect, useState} from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import {Link, useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {AuthContext} from "../AuthProvider/AuthProvider.jsx";
import {useForm} from "react-hook-form";


const Login = () => {

    const [disabled , setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {

        console.log(data.email, data.password);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire({
                    title: 'student Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error('Error signing in:', error);
                // Handle error appropriately, e.g., show an error message to the user
            });

    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);


    const handleValidateCaptcha = (e) => {
        const user_value = e.target.value;
        if(validateCaptcha(user_value)){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className=" py-20 hero-content ">
                    <div className="card w-[25rem] shadow-2xl bg-base-100">
                        <div className="text-center py-2">
                            <h1 className="text-3xl font-bold">Login now!</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", {required: true})} placeholder="email" className="input input-bordered"
                                       required/>
                                {errors.email && <span className="text-red-600">Email is incorrect</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {required:true})}  placeholder="password" className="input input-bordered"
                                       required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate/>
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha above"
                                       className="input input-bordered"
                                       required/>
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="login"/>
                            </div>
                        </form>
                        <Link to="/signUp" className="text-slate-800 text-center">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;