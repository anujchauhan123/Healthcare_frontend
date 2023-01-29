import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { user_login } from '../Redux/Actions/userLoginAction';
import { Link, useNavigate } from "react-router-dom";
import {  PhoneOutlined } from '@mui/icons-material';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state)=>state.userLogin)
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")
    const {userInfo} = userLogin;
    useEffect(()=>{
        if (localStorage.getItem("userInfo")?.length > 0) {
            navigate("/");
        }
    },[userInfo])

    const submithandle=(e)=>{
        e.preventDefault();
        dispatch(user_login(phone,password))
    }

     return (
        <section className="h-[100vh] flex items-center py-10 2xl:py-20 bg-[url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-center bg-cover bg-no-repeat overflow-hidden">  
            <div className="container px-4 mx-auto">
                <div className="max-w-5xl m-auto">
                    <div className="flex flex-wrap flex-row-reverse items-center -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0 ">
                            <div className="max-w-md">
                                <span className="text-lg text-blue-400 font-bold">Login</span>
                                <h2 className="mt-8 mb-12 text-5xl font-bold font-heading text-white">Start your journey by Login to your account.</h2>
                                <p className="text-lg text-gray-200">
                                    <span>Don't have acount</span>
                                    <span className="text-sky-700"><Link to="/register">Register Here.</Link></span>
                                </p>
                                <p className="text-lg text-gray-200">
                                  
                                    <span className="text-sky-700">Forgot Password?.</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="px-6 lg:px-20 py-12 lg:py-24 backdrop-blur border-4 rounded-lg">
                                <form action="#">
                                    <h3 className="mb-10 text-2xl text-white font-bold font-heading">Login</h3>
                                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                        <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                            <PhoneOutlined/>
                                        </span>
                                        <input onChange={(e)=>{setPhone(e.target.value)}} className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="email" placeholder="Mobile" />
                                    </div>
                                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                        <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                           <LockOutlinedIcon/>
                                        </span>
                                        <input onChange={(e)=>{setPassword(e.target.value)}}  className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="password" placeholder="Password" />
                                    </div>
                                    <div className="inline-flex mb-10">
                                        <input className="mr-4" type="checkbox" />
                                        <p className="-mt-2 text-sm text-gray-200">By singning up, you agree to our <a className="text-white" href="#">Terms, Data Policy</a>and <a className="text-white" href="#">Cookies.</a></p>
                                    </div>
                                    <button onClick={(e)=>{submithandle(e)}} className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Get started</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Login;