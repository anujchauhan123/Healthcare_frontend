import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { productDetailAction } from "../Redux/Actions/productAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Caroes from "../Components/Carouselall";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from "axios";
import { addToCart } from "../Redux/Actions/cartAction";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Product = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState([]);
    const [flavour, setFlavour] = useState([])
    const [flavour1, setFlavour1] = useState("")
    const productDetails = useSelector((state) => state.productDetail)

    // const [data, setData] = useState({});
    useEffect(() => async () => {
        dispatch(productDetailAction(id))
    }, [])

    useEffect(() => async () => {
        const datae = await axios.get(`/productWeight/${id}`)
        const datae1 = await axios.get(`/productFlavour/${id}`)
        function getUniqueListBy(arr, key) {
            return [...new Map(arr.map(item => [item[key], item])).values()]
        }
        setFlavour(datae1?.data?.message)

        setData(getUniqueListBy(datae?.data?.message, "product_weight"))
    }, [])

    const handleWeightChange = async (product_slug) => {
        dispatch(productDetailAction(product_slug))
        const datae1 = await axios.get(`/productFlavour/${product_slug}`)
        setFlavour(datae1?.data?.message)
        setFlavour1(productDetails?.products?.message?.product_flavour)
    }

    const addToCarte = (quantity) => {
        const cartButtons = document.querySelectorAll('.cart-button');

        cartButtons.forEach(button => {
            button.addEventListener('click', cartClick);
        });

        function cartClick() {
            let button = this;
            button.classList.add('clicked');
        }
        const token = localStorage.getItem("userInfo")?.split('"')[3];
        if (token) {
            console.log(productDetails?.products?.message?.id, quantity, token)
            dispatch(addToCart(productDetails?.products?.message?.id, quantity, token));
        }
        else {
            navigate("/login")
        }
    }

    return (
        <>
            <Header />
            <section className="text-gray-600 body-font overflow-hidden -mt-16">
                <div className="container px-5 py-24 mx-auto">
                    <nav class="flex" aria-label="Breadcrumb" className="w-4/5 mx-auto">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <Link to="/">
                            <li class="inline-flex items-center">
                                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    Home
                                </a>
                            </li>
                            </Link>
                            <li>
                                <div class="flex items-center">
                                    <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{productDetails?.products?.message?.product_category}</a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{productDetails?.products?.message?.product_title}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div class="p-4 w-4/5 mx-auto text-center mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                        <span class="font-medium">Only {productDetails?.products?.message?.product_quantity} units are left.</span>
                    </div>
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:h-auto">
                            <Caroes image1={productDetails?.products?.message?.product_image_url_primary} image2={productDetails?.products?.message?.product_image_url_secondary} image3={productDetails?.products?.message?.product_image_url_secondary1} image4={productDetails?.products?.message?.product_image_url_secondary2} />
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{productDetails?.products?.message?.product_category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productDetails?.products?.message?.product_title}</h1>
                            <h2 className="text-sm title-font text-gray-500 -mt-[8px] tracking-widest">By {productDetails?.products?.message?.product_brand}</h2>

                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <FacebookOutlinedIcon />
                                    </a>
                                    <a className="text-gray-500">
                                        <TwitterIcon />
                                    </a>
                                    <a className="text-gray-500">
                                        <ChatBubbleIcon />
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">{productDetails?.products?.message?.product_desc}</p>
                            <div className="">
                                <h1 className="mb-2 text-lg font-bold">Weight</h1>
                                <div className="flex gap-4">

                                    {data?.map((datae, index) => (
                                        <>
                                            {console.log(datae.product_weight, productDetails?.products?.message?.product_weight)}
                                            <div onClick={() => { handleWeightChange(datae?.product_slug) }} className={`${datae.product_weight === productDetails?.products?.message?.product_weight ? "border-blue-200 border-2" : "border-2"} h-10 px-10 pt-1`}>
                                                <h1>{datae.product_weight}</h1>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3 mt-2">Flavour</span>
                                    <div className="relative">
                                        <select onChange={(e) => { dispatch(productDetailAction(e.target.value)) }} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={flavour1}>
                                            {flavour?.map((data, index) => (
                                                <option value={data.product_slug}>
                                                    {data.product_flavour}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div class=" h-10 w-44 ml-2 mt-2 sm:-mt-2 ">

                                    <div class="flex flex-row h-10 w-full rounded-lg  relative bg-transparent mt-1">
                                        <p className="mt-2 ml-2 mr-3">Quantity</p>
                                        <button onClick={() => { if (quantity > 1) { setQuantity(quantity - 1) } }} data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                            <span class="m-auto text-2xl font-thin">−</span>
                                        </button>
                                        <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={quantity}></input>
                                        <button onClick={() => { if ((quantity) < productDetails?.products?.message?.product_quantity) { setQuantity(quantity + 1) } }} data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                            <span class="m-auto text-2xl font-thin">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">₹{productDetails?.products?.message?.product_price}</span>
                                <span className="title-font font-medium text-xl ml-2 line-through text-gray-500">₹{productDetails?.products?.message?.product_prev_price}</span>
                              
                                <button onClick={() => { addToCarte(quantity) }} class="text-gray-100 ml-3 bg-blue-700 hover:bg-blue-800 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                    <ShoppingCartIcon/>
                                    <span>Add To Cart</span>
                                </button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <FavoriteBorderIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product;