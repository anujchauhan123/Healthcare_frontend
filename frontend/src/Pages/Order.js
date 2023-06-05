import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";
import TrackOrder from "../Components/TrackOrder";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Header from "../Components/Header";
import { useNavigate, useParams } from "react-router-dom";

const Order = () => {
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [add, setAdd] = useState()
    const userDetails = useSelector(state => state);
    const { id } = useParams();

    useEffect(() => {

        console.log("FFFFFFFFFFFFFFFFFF",id)


        var user = id;


        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_HOSTNAME}get/order/${user}`,
            headers: {
                'Authorization': `Bearer ${localStorage?.getItem("userInfo")?.split('"')[3]}`
            },
        };

        axios(config)
            .then(function (response) {
                setData(response.data.message);
            })
    }, [])


    return (
        <>
            <Header />
            {data?.map((data1) => (
                <>

                    <div className="flex-1 shrink-0 rounded-sm border border-neutral-200 bg-white px-4 py-8 mt-10 shadow-sm w-9/12 mx-auto">
                        <div className="my-4">
                            <TrackOrder status={data1.order_status} />
                        </div>
                        <div className="mb-8">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold">Order Id: #{data1?.order_id} </h3>
                                </div>
                                <div>
                                    <button type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Track Order</button>
                                </div>
                            </div>
                            <p>On {moment(data1.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        </div>

                        {/* {(cartItems?.cartItems?.message?.length === 0 || !cartItems?.cartItems?.message) && */}
                        <>
                            {/* <div className="text-center flex justify-center">
                                <h1 >No Order</h1>
                            </div>
                            <div>
                                <div className="flex justify-center text-center text-sm text-gray-500 py-2">
                                    <p>
                                        <Link to="/products/page">
                                            <button type="button" className="font-medium text-neutral-600 hover:text-neutral-500">Back To Shopping<span aria-hidden="true"> &rarr;</span></button>
                                        </Link>
                                    </p>
                                </div>
                            </div> */}
                        </>
                        {data1?.product_data?.map((data2) => (
                            <>
                                <ul role="list" className="-my-6 divide-y divide-neutral-200">
                                    <li className="flex py-6">
                                        <div className="h-32 w-24 flex-shrink-0 overflow-hidden rounded-sm border bg-neutral-50">
                                            <img src={`${data2?.[0]?.product_image_url_primary}`} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-row justify-between text-sm">
                                            <div>
                                                <div className="flex justify-between text-sm text-gray-900">
                                                    <h3 className="text-base font-bold"><a href="#"> {data2?.[0]?.product_title}, {data2?.[0]?.product_flavour}, {data2?.[0]?.product_weight} </a></h3>
                                                </div>
                                                <div className="mt-2">
                                                    <p className="text-xs text-neutral-400"></p>
                                                    <div class=" h-10 w-32">
                                                        <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Quantity : {data2?.[0]?.quantity}
                                                        </label>
                                                    </div>
                                                    <div class=" h-10 w-32">
                                                        <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">{data2?.[0]?.product_desc}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-orange-600">PRICE: ₹ {data2?.[0]?.product_price}</p>
                                                    <p className="mt-1 flex text-xs text-gray-500">MRP: <span className="text-sm font-bold line-through">₹ {data2?.[0]?.product_prev_price} </span></p>
                                                    <div className="mt-1 flex flex-row gap-2">
                                                        <p className="text-xs font-normal text-neutral-400">Total ₹{data2?.[0]?.product_price * data2?.[0]?.quantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                </ul>
                            </>
                        ))}
                        <footer class="bg-gray-100 text-center  lg:text-left">
                            <div class="container p-6 text-gray-800">
                                <div class="grid lg:grid-cols-2 gap-4">
                                    <div class="mb-6 md:mb-0">
                                        <h5 class="font-medium mb-2 uppercase">Shipping Details</h5>
                                        <p>Name {data1?.address_data?.[0].first_name + " " + data1?.address_data?.[0].last_name}</p>
                                        <p>Address Details : {data1?.address_data?.[0].data_address}, {data1?.address_data?.[0].landmark} </p>
                                        <p>Phone {data1?.address_data?.[0].phone}</p>
                                    </div>
                                    <div class="mb-6 md:mb-0 text-left">
                                        <h5 class="font-medium mb-2 uppercase">Total</h5>

                                        <div class="relative overflow-x-auto">
                                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3 rounded-l-lg">
                                                            Product name
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Qty
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 rounded-r-lg">
                                                            Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data1?.product_data?.map((data2) => (
                                                        <>
                                                            <tr class="bg-white dark:bg-gray-800">
                                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {data2?.[0]?.product_title}
                                                                </th>
                                                                <td class="px-6 py-4">
                                                                    {data2?.[0]?.quantity}
                                                                </td>
                                                                <td class="px-6 py-4">
                                                                    {data2?.[0]?.product_price* data2?.[0]?.quantity}
                                                                </td>
                                                            </tr>
                                                        </>
                                                    ))}
                                                </tbody>
                                                <tfoot>
                                                    <tr class="font-semibold text-gray-900 dark:text-white">
                                                        <td class="px-6 py-3">Total Items:{data1?.product_data?.length}</td>
                                                        <td class="px-6 py-3">{data1?.total_price}</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                          
                            <div class="text-left text-gray-700 p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                                {data1.order_status==='DELIVERED'?<>  <CheckCircleIcon className="text-green-700"/>YOUR ORDER IS DELIVERED SUCCESSFULLY</>:<> Cancel Order</>}
                               
                            </div>
                        </footer>
                    </div>
                </>
            ))}
            <Footer />
        </>
    )
}

export default Order;