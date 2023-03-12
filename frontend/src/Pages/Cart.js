import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Stepper from "../Components/Stepper";
import { addToCart, getCart } from "../Redux/Actions/cartAction";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AddShoppingCart } from "@mui/icons-material";
import LinkIcon from '@mui/icons-material/Link';
import AddressForm from "../Components/AddressForm";
import axios from "axios";
import NavBar from "../Components/Navbar";

const Cart = () => {
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch()
    const [datae, setDatae] = useState(0)
    var token = localStorage?.getItem("userInfo")?.split('"')[3];
    const [step, setStep] = useState(1)
    useEffect(() => {
        if (localStorage.getItem("userInfo")) {
            var token = localStorage.getItem("userInfo").split('"')[3];
            dispatch(getCart(token))
        }
    }, [])
    useEffect(() => {
        setDatae(0);
        const data = document?.getElementsByClassName('data123');
        for (var i = 0; i < data.length; i++) {
            setDatae(datae + data[i].innerHTML);
        }

        setDatae(datae + 50)
    }, [cartItems])

    const addCart = (id, quantity) => {
        dispatch(addToCart(id, quantity, token))
        dispatch(getCart(token));
    }
    const removeCart = (id) => {

        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_HOSTNAME}removeToCart/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                dispatch(getCart(token))
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <>
            <NavBar />
            <div className="bg-neutral-50 py-12">
                <Stepper step={step} />

                <div className="container mx-auto my-12">
                    <div className="flex flex-col gap-6 md:flex-row">
                        {step === 1 &&
                            <div className="flex-1 shrink-0 rounded-sm border border-neutral-200 bg-white px-4 py-8 shadow-sm">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold">ProtienFarm ({cartItems?.cartItems?.message?.length} items)</h3>
                                    <p>ProtienFarm Cart</p>
                                </div>
                                {(cartItems?.cartItems?.message?.length === 0 || !cartItems?.cartItems?.message) &&
                                    <>
                                        <div className="text-center flex justify-center">
                                            <AddShoppingCart />
                                            <h1 >CART Is Empty</h1>
                                        </div>
                                        <div>
                                            <div className="flex justify-center text-center text-sm text-gray-500 py-2">
                                                <p>
                                                    <Link to="/products/page">
                                                        <button type="button" className="font-medium text-neutral-600 hover:text-neutral-500">Back To Shopping<span aria-hidden="true"> &rarr;</span></button>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                }
                                {cartItems?.cartItems?.message?.map((data, index) => (
                                    <ul role="list" className="-my-6 divide-y divide-neutral-200">
                                        <li className="flex py-6">
                                            {data.data2 && <>
                                                <div className="h-32 w-24 flex-shrink-0 overflow-hidden rounded-sm border bg-neutral-50">
                                                    <img src={`${data.data2.product_image_url_primary}`} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-row justify-between">
                                                    <div>
                                                        <div className="flex justify-between text-sm text-gray-900">
                                                            <h3 className="text-base font-bold"><a href="#"> {data.data2.product_title}, {data.data2.product_flavour}, {data.data2?.product_weight} </a></h3>

                                                        </div>
                                                        <div className="mt-2">
                                                            <p className="text-xs text-neutral-400">{data?.data2?.product_desc}</p>
                                                            <div class=" h-10 w-32">
                                                                <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Quantity
                                                                </label>
                                                                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                                                    <button onClick={() => { addCart(data?.data2?.id, -1,) }} data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                                                        <span class="m-auto text-2xl font-thin">−</span>
                                                                    </button>

                                                                    <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={data.quantity}></input>
                                                                    <button onClick={() => { addCart(data?.data2?.id, +1,) }} data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                                                        <span class="m-auto text-2xl font-thin">+</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="text-right">
                                                            <button onClick={() => { removeCart(data?.data2?.id) }} type="button" className="flex gap-2 font-medium text-neutral-400 hover:text-neutral-900 mb-2">
                                                                <p className="text-xs font-normal">Remove Item</p>
                                                                <DeleteOutlineIcon className="text-sm" />
                                                            </button>
                                                            <p className="text-sm font-bold text-orange-600">PRICE:  ₹ {data?.data2?.product_price}</p>
                                                            <p className="text-xs text-gray-500">MRP: <span className="text-sm font-bold line-through">₹ {data?.data2?.product_prev_price}</span></p>
                                                            <div className="mt-1 flex flex-row items-center gap-2">
                                                                <LinkIcon />
                                                                <p className="text-xs font-normal text-neutral-400">Total ₹{data?.quantity * data?.data2?.product_price}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </>}
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        }
                        {step == 2 &&
                            <div className="container mx-auto my-12">
                                <div className="flex flex-col md:flex-row">
                                    <AddressForm />
                                </div>
                            </div>
                        }
                        {cartItems?.cartItems?.message?.length > 0 &&
                            <div className="sticky space-y-4 rounded-sm border border-neutral-200 bg-white py-6 px-4 shadow-sm sm:px-6 md:w-1/3">

                                <h4 className="text-2xl font-bold">Grand Total</h4>
                                <div className="flex flex-col gap-2">
                                    {/* <div className="flex justify-between text-base text-gray-900">
                                    <p>Total</p>
                                    <p>262.00</p>
                                </div> */}

                                    {cartItems?.cartItems?.message?.map((data, index) => (
                                        <>
                                            <div className="flex justify-between text-base text-gray-900">
                                                <p>{data?.data2?.product_title}</p>
                                                <p className="data123">{data?.data2?.product_price * data?.quantity}</p>
                                            </div>
                                        </>
                                    ))}


                                    <div className="flex justify-between text-base text-gray-900">
                                        <p>Shipping</p>
                                        <p>₹50</p>
                                    </div>
                                    <div className="flex justify-between text-base text-gray-900">
                                        <p>G.S.T.(18%)</p>
                                        <p>₹</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-2">
                                        <svg className="h-4 w-4 rotate-90 stroke-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                                        <p className="text-xs font-normal text-neutral-400">Total</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-2">
                                        <svg className="h-4 w-4 rotate-90 stroke-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                                        <p className="text-xs font-normal text-neutral-400">Sub Total</p>
                                    </div>
                                    <div>
                                        <div className="my-2 w-full border-t border-gray-300"></div>
                                        <div className="flex justify-between text-base font-bold text-gray-900">
                                            <p>Total</p>
                                            <p>{datae}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-400">Inclusive Shipping</p>
                                    </div>

                                    <div className="mt-auto flex flex-col gap-2 pt-4">
                                        {step == 1 &&
                                            <div className="">
                                                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-neutral-900" onClick={() => { setStep(2) }}>Proceed</a>
                                            </div>
                                        }
                                        <div className="flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                <Link to="/products/page">
                                                    <button type="button" className="font-medium text-neutral-600 hover:text-neutral-500">Back To Shopping<span aria-hidden="true"> &rarr;</span></button>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Cart;