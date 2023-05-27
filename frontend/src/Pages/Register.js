import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { user_register } from '../Redux/Actions/userLoginAction';
import { Link, useNavigate } from 'react-router-dom';
import { authentication } from '../Firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { toast } from 'react-toastify';
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister)
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conpassword, setConPassword] = useState("")
    const [number, setNumber] = useState("")
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSend] = useState(false);
    const { userInfo } = userRegister;

    const requestOtp = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => { }
        }, authentication)
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, `+91${number}`, appVerifier)
            .then(confirmationResult => {
                window.confirmationResult = confirmationResult;
            }).catch(err => {
                console.log(err)
            })

    }


    useEffect(() => {
        if (localStorage.getItem("userInfo")?.length > 0) {
            navigate("/");
        }
    }, [userInfo])

    const submithandle = (e) => {
        e.preventDefault();
        if (email.length === 0 || password.length === 0 || number.length === 0 || username.length === 0 || conpassword.length===0) {
            toast.error('Kindly fill all the fields.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        
        }
        else if (!re.test(email)) {
            toast.error('Kindly fill the correct email.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else if (password.length < 5) {
            toast.error('Password is too short.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (password != conpassword) {
            toast.error('Password is not matched with Confirm Password.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else{
            // setOtpSend(true)
            // requestOtp();

            dispatch(user_register(username, email, password, number))  
        }
    }

    const verifyOtp = (e) => {
        e.preventDefault();
        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(otp).then((result) => {
            if(result.user){
                dispatch(user_register(username, email, password, number))  
            }else{
                toast.error('Not Valid or Expired.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }).catch((err)=>{
            toast.error('Not Valid or Expired.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
    }

    return (
        <>
            <section className="h-[12z0vh] py-20 2xl:py-40 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-center bg-cover bg-no-repeat overflow-hidden">
                <img className="hidden lg:block absolute inset-0 mt-32" src="zospace-assets/lines/line-mountain.svg" alt="" />
                <img className="hidden lg:block absolute inset-y-0 right-0 -mr-40 -mt-32" src="zospace-assets/lines/line-right-long.svg" alt="" />
                <div className="relative container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                                <div className="max-w-md">
                                    <span className="text-lg text-blue-400 font-bold">Register Account</span>
                                    <h2 className="mt-8 mb-12 text-5xl font-bold font-heading text-white">Start your journey by creating an account.</h2>
                                    <p className="text-lg text-gray-200">
                                        <span>Already have a account </span>
                                        <span className="text-blue"><Link className='text-sky-700' to="/login"> Login here.</Link></span>
                                    </p>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 px-4">
                                <div className="px-6 lg:px-20 py-6 backdrop-blur lg:py-24 border-4 rounded-lg">
                                    <form action="#">
                                        <h3 className="mb-10 text-2xl text-white font-bold font-heading">Register Account</h3>
                                        <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                            <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                                <PersonOutlineOutlinedIcon />
                                            </span>
                                            <input onChange={(e) => { setUserName(e.target.value) }} className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="text" placeholder='Name' />
                                        </div>
                                        <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                            <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                                <EmailOutlinedIcon />
                                            </span>
                                            <input onChange={(e) => { setEmail(e.target.value) }} className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="email" placeholder='Email' />
                                        </div>
                                        <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                            <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                                <LocalPhoneOutlinedIcon />
                                            </span>
                                            <input onChange={(e) => { setNumber(e.target.value) }} className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="phone" placeholder='Phone' />
                                        </div>
                                        <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                            <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                                <LockOutlinedIcon />
                                            </span>
                                            <input onChange={(e) => { setPassword(e.target.value) }} className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="password" placeholder='Password' />
                                        </div>
                                        <div className="flex items-center pl-6 mb-6 bg-white rounded-full">
                                            <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                                <LockOutlinedIcon />
                                            </span>
                                            <input onChange={(e) => { setConPassword(e.target.value) }} className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="password" placeholder='Confirm Password' />
                                        </div>
                                        {otpSent &&
                                            <div className="flex items-center pl-6 mb-6 bg-white rounded-full">
                                                <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                                    <LockOutlinedIcon />
                                                </span>
                                                <input onChange={(e) => { setOtp(e.target.value) }} className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="text" placeholder='Otp' />
                                            </div>
                                        }
                                        <div className="inline-flex mb-10">
                                            <input className="mr-4" type="checkbox" />
                                            <p className="-mt-2 text-sm text-gray-200">By singning up, you agree to our <a className="text-white" href="#">Terms, Data Policy</a>and <a className="text-white" href="#">Cookies.</a></p>
                                        </div>
                                        <div id="recaptcha-container"></div>
                                        {otpSent &&
                                            <button onClick={(e) => { verifyOtp(e) }} className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Register</button>
                                        }
                                        {!otpSent &&
                                            <button onClick={(e) => { submithandle(e) }} className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Get started</button>
                                        }
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


export default Register;