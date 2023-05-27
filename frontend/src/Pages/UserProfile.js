import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import { user_details } from "../Redux/Actions/userLoginAction";
import EditIcon from '@mui/icons-material/Edit';
import { KeyboardArrowDown } from "@mui/icons-material";
import { useraddress } from "../Redux/Actions/addressAction";
import Header from "../Components/Header";

const UserProfile = () => {
    const dispatch = useDispatch();
    const [address, setAddress] = useState(false)
    const userDetails = useSelector(state=>state.userDetails)
    const token = localStorage?.getItem("userInfo")?.split('"')[3]
    useEffect(() => {
        if (localStorage.getItem("userInfo")) {
            const token = localStorage.getItem("userInfo").split('"')[3]
            dispatch(user_details(token))
        }
    }, [])
    const [city,setCity] = useState(userDetails?.user?.message?.city)
    const [state,setState] = useState(userDetails?.user?.message?.state)
    const [pincode,setPincode] = useState(userDetails?.user?.message?.pincode)
    const [landmark,setLandMark] = useState(userDetails?.user?.message?.landmark)
    const [data_address,setDataAddress] = useState(userDetails?.user?.message?.data_address)

    
    return (
        <>
            <Header />
            <div className="bg-neutral-50 -mt-14 py-12">

                <div className="container mx-auto my-12">
                    <div className="flex flex-col gap-6 md:flex-row">
                        <div className="flex-1 shrink-0 rounded-sm border border-neutral-200 bg-white px-4 py-8 shadow-sm">
                            <div className="">
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <Avatar>{userDetails?.user?.message?.userName?.charAt(0)?.toUpperCase()}</Avatar>
                                        <h4 className="text-lg font-bold mt-2 ml-2">{userDetails?.user?.message?.userName}</h4>
                                    </div>
                                    <EditIcon />
                                </div>
                            </div>
                            <div className="flex p-4 ">
                                <div className="w-1/2">
                                    <h2>Mobile : {userDetails?.user?.message?.phone}</h2>
                                </div>
                                <div className="w-1/2">
                                    <h2>Email : {userDetails?.user?.message?.email}</h2>
                                </div>
                            </div>
                            <div className="p-4 ">
                                <div className="flex justify-between">
                                    <h4 className="text-lg font-bold mt-2 ml-2 mb-4">Address</h4>
                                    <EditIcon onClick={() => { setAddress(!address) }} />
                                </div>
                                {address &&
                                    <>
                                        <form class="w-full px-10 mx-auto ">
                                            <div class="flex flex-wrap -mx-3 mb-2">
                                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                                        City
                                                    </label>
                                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
                                                </div>
                                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                                        State
                                                    </label>
                                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" value={state} onChange={(e)=>{setState(e.target.value)}}/>
                                                </div>
                                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                                        Zip
                                                    </label>
                                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" value={pincode} onChange={(e)=>{setPincode(e.target.value)}}/>
                                                </div>

                                            </div>
                                            <div class="flex flex-wrap -mx-3 mb-6">
                                                <div class="w-full px-3">
                                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                        Address
                                                    </label>
                                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" value={data_address} onChange={(e)=>{setDataAddress(e.target.value)}} />

                                                </div>
                                            </div>
                                            <div class="flex flex-wrap -mx-3 mb-6">
                                                <div class="w-full px-3">
                                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                        Land Mark
                                                    </label>
                                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" value={landmark} onChange={(e)=>{setLandMark(e.target.value)}} />
                                                </div>
                                            </div>

                                            <div className="flex justify-between">
                                                <div className="">
                                                    <a href="#"onClick={()=>{setAddress(!address)}} className="flex items-center text-black justify-center rounded-md border border-transparent bg-zinc-200 px-6 py-3 text-base font-medium text-white shadow-sm ">Back</a>
                                                </div>
                                                <div className="">
                                                    <a href="#" onClick={()=>{dispatch(useraddress(city,state,pincode,data_address,landmark,token));setAddress(!address)}} className="flex items-center justify-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm ">Save</a>
                                                </div>
                                            </div>

                                        </form>
                                    </>
                                }
                                {!address &&
                                    <>
                                        <div className="flex">
                                            <div className="w-1/3">
                                                <h2>City : {userDetails?.user?.message?.city}</h2>
                                            </div>
                                            <div className="w-1/3">
                                                <h2>State : {userDetails?.user?.message?.state}</h2>
                                            </div>
                                            <div className="w-1/3">
                                                <h2>Zip : {userDetails?.user?.message?.pincode}</h2>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <h1>Address : {userDetails?.user?.message?.data_address}</h1>
                                        </div>
                                        <div className="mt-2">
                                            <h1>Landmark : {userDetails?.user?.message?.landmark}</h1>
                                        </div>
                                    </>
                                }
                            </div>

                        </div>
                        <div className="sticky space-y-4 rounded-sm border border-neutral-200 bg-white py-6 px-4 shadow-sm sm:px-6 md:w-1/3">
                            <h4 className="text-2xl font-medium">Recent Order</h4>
                            <div className="flex flex-col gap-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UserProfile;