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

            <div className="w-11/12 h-[25rem] max-w-sm bg-white hover:shadow-2xl rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 my-2 border-slate-200 border-[1px]" style={{height: 461}}>
                <a href={`/product/${product?.product_slug}`} >
                    <div className="flex flex-end  relative top-4 mx-2">

                        <FavoriteBorderTwoToneIcon />
                    </div>
                    <div className="w-9/12 mx-auto">
                        <img className="p-8 w-[200px] rounded-t-lg" src={`${product?.product_image_url_primary}`} alt="product image" />
                    </div>
                </a>

                <div className="px-5 pb-5">
                    <div className="flex justify-between mt-2.5 mb-5">
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                            <span className="text-xs">2 reviews</span>
                        </div>
                        <div className="border-green-400 border-2 w-4 h-4 ">
                            <div className="border-green-400 border-4 rounded-full relative left-[2px] top-[2px] w-2 h-2">

                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <h5 className="text-md tracking-tight text-gray-900 dark:text-white text-left">{product?.product_title} ({product?.product_weight })</h5>
                        
                    </div>
                    <h5 className="text-sm tracking-tight  text-gray-900 dark:text-white text-left">{" "+product?.product_flavour}</h5>



                    <div className="flex justify-between ">
                        <div className="flex space-x-1">
                            <h1 className="text-lg mr-2">₹ {product?.product_price}</h1>
                            <h1 className="mt-1 line-through text-[16px] text-slate-400">₹ {product?.product_prev_price}</h1>
                        </div>
                        <div className="w-16 h-6 ml-4 border-2 border-red-400">
                            <h1 className="text-sm text-red-400 p-[1px]">{((product?.product_prev_price - product?.product_price) * (100 / product?.product_price)).toFixed(0)}% Off</h1>
                        </div>
                    </div>
                    <div className="flex">
                        <button onClick={() => { AddToCart() }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm w-full py-1.5 mr-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> <ShoppingCartOutlinedIcon /> Add To Cart</button>
                    </div>
                </div>

            </div>

        </>
    )
}


export default ProductCard;