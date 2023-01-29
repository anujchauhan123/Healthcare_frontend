import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { getCart } from "../Redux/Actions/cartAction";

const { useEffect } = require("react")

const CartModal = () => {
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("userInfo")) {
            var token = localStorage.getItem("userInfo").split('"')[3];
            dispatch(getCart(token));
        }
    }, [])
    return (
        <>
            <div class="flex flex-col max-w-3xl  dark:bg-gray-900 dark:text-gray-100">
                <h2 class="text-xl font-semibold">Your cart</h2>

                <div class="mt-8">
                    <div class="flow-root">
                        <ul role="list" class=" -my-6 divide-y divide-gray-200">
                            {cartItems?.cartItems?.message?.map((data1) => (
                                <>
                                    <li class="flex py-6 mb-6">

                                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src={`${data1.data2.product_image_url_primary}`} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                                        </div>
                                        <div class="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href="#">{data1.data2.product_title}, {data1.data2.product_weight}</a>
                                                    </h3>
                                                    <p class="ml-4">{data1.data2.product_category}</p>
                                                </div>
                                                <p class="mt-1 text-sm text-gray-500">{data1.data2.product_flavour}</p>
                                            </div>
                                            <div class="flex flex-1 items-end justify-between text-sm">
                                                <p class="text-gray-500">Qty :{data1.quantity}</p>
                                                <div class="flex">
                                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">{data1.data2.product_price}</button>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                </>
                            ))}
                            {cartItems?.cartItems?.message?.length === 0 && <h1 className='text-center mt-10'>Cart Not Found</h1>}
                        </ul>
                    </div>
                </div>
                <div class="flex justify-end space-x-4">
                    <Link to="/cart">
                    <button type="button" class="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                        <span class="sr-only sm:not-sr-only">Prodceed</span>
                    </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CartModal;