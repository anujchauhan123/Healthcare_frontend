import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { user_login } from '../Redux/Actions/userLoginAction';
import { Link, useNavigate } from "react-router-dom";
import {  PhoneOutlined } from '@mui/icons-material';
import NavBar from '../Components/Navbar';
import { verifyProduct } from "../Redux/Actions/productAction";

const Verification = () => {
    
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
        console.log("phone$$$$$$$$$$$$$$$",phone)
        console.log("password%##############",password)
        dispatch(verifyProduct(phone,password))
    }

     return (
        <>
        <NavBar/>
        <section className="h-[100vh] flex items-center py-10 2xl:py-20 bg-[url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-center bg-cover bg-no-repeat overflow-hidden">  
            <div className="container mx-auto">
                <div className="m-auto">
                    <div className="items-center -mx-4">
                
                        <div className="max-w-screen-lg mx-auto px-4">
                            <div className="px-6 lg:px-20 py-12 lg:py-24 backdrop-blur border-4 rounded-lg">
                                <form action="/productverify" method="POST">
                                    <h3 className="mb-10 text-2xl text-white font-bold font-heading">Product Verification Code</h3>
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
                                        <input onChange={(e)=>{setPassword(e.target.value)}}  className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="password" placeholder="Product Verification Code" />
                                    </div>
                                  
                                    <button onClick={(e)=>{submithandle(e)}} className="py-4 w-full max-w-[200px] mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Get started</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default Verification;