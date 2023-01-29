import React from "react"
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Actions/cartAction";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const AddToCart = () => {

        const token = localStorage.getItem("userInfo")?.split('"')[3];
        if (token) {
            dispatch(addToCart(product.id, 1, token));
        }
        else {
            navigate("/login")
        }
    }


    return (

        <>

            <div className="w-11/12 max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 my-2 border-slate-200 border-[1px]">
                <a href={`/product/${product?.product_slug}`}>
                    <div className="flex justify-between relative top-4 mx-2">
                        <div className="border-green-400 border-2 w-4 h-4 ">
                            <div className="border-green-400 border-4 rounded-full relative left-[2px] top-[2px] w-2 h-2">

                            </div>
                        </div>
                        <FavoriteBorderTwoToneIcon />
                    </div>
                    <div className="w-9/12 mx-auto">

                        <img className="p-8 w-[200px] rounded-t-lg" src={`${product?.product_image_url_primary}`} alt="product image" />

                    </div>
                </a>

                <div className="px-5 pb-5">
                    <div className="flex">
                        <a href="#">
                            <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white text-left">{product?.product_title},{product?.product_weight}</h5>
                            <h5 className="text-sm tracking-tight font-bold text-gray-900 dark:text-white text-left -mt-1">{product?.product_flavour}</h5>
                            <h5 className="text-sm tracking-tight text-gray-900 dark:text-white text-left -mt-1">By {product?.product_brand}</h5>
                        </a>
                        <div className="w-16 h-6 ml-4 border-2 border-red-400">
                            <h1 className="text-sm text-red-400 p-[1px]">{((product?.product_prev_price-product?.product_price)*(100/product?.product_price)).toFixed(0)}% Off</h1>
                        </div>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div className="flex justify-between ">
                        <div className="flex space-x-1">
                            <h1 className="text-lg mr-2">₹ {product?.product_price}</h1>
                            <h1 className="mt-1 line-through text-[16px] text-slate-400">₹ {product?.product_prev_price}</h1>
                        </div>
                        <div className="flex">
                            <button onClick={() => { AddToCart() }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> <ShoppingCartOutlinedIcon />Add</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}


export default ProductCard;