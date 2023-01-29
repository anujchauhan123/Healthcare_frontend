import { KeyboardArrowDown, KeyboardDoubleArrowDownOutlined } from "@mui/icons-material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCart } from "../Redux/Actions/cartAction";
const AddressForm = ({ }) => {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("")
    const [zip, setZip] = useState("");
    const [address, setAddress] = useState("");
    const [landmark, setLandmark] = useState("");
    const navigate = useNavigate()
    const OrderCreate = () => {
        const token = localStorage.getItem("userInfo").split('"')[3];
        if(!token){
            navigate("/login")
        }else{
            var data = JSON.stringify({
                "firstname": firstName,
                "lastname": lastName,
                "mobile": mobile,
                "zip": zip,
                "city": city,
                "state": state,
                "landmark": landmark,
                "address": address,
            });
            var config = {
                method: 'post',
                url: 'http://localhost:8080/create/order',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: data
            };
    
            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    navigate("/myOrder")
                    dispatch(getCart(token))
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <form class="w-full px-10 max-w-2xl mx-auto" >
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        First Name
                    </label>
                    <input onChange={(e) => { setFirstName(e.target.value) }} value={firstName} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="John" />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input onChange={(e) => { setLastName(e.target.value) }} value={lastName} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Phone Number
                    </label>
                    <input onChange={(e) => { setMobile(e.target.value) }} value={mobile} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        City
                    </label>

                    <input onChange={(e) => { setCity(e.target.value) }} value={city} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        State
                    </label>
                    {/* <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <KeyboardArrowDown />
                        </div>
                    </div> */}


                    <input onChange={(e) => { setState(e.target.value) }} value={state} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Zip
                    </label>

                    <input onChange={(e) => { setZip(e.target.value) }} value={zip} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Address
                    </label>
                    <input onChange={(e) => { setAddress(e.target.value) }} value={address} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Land Mark
                    </label>

                    <input onChange={(e) => { setLandmark(e.target.value) }} value={landmark} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                </div>
            </div>
            <div className="">
                <a href="#" type="button" onClick={() => { OrderCreate() }} className="flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-neutral-900">Payment</a>
            </div>
        </form>
    )
}

export default AddressForm