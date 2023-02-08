import React, { useEffect, useState } from 'react'
import { Link, Navigate, NavLink } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { KeyboardArrowDownRounded, PhoneOutlined, SearchOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { user_details, user_logout } from '../Redux/Actions/userLoginAction';
import BottomAppBar from './BottomNavbar';
import SideBar from './SideBar';
import axios from 'axios';
import CartModal from './cartModal';
const Header = () => {
  const dispatch = useDispatch();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  const userDetails = useSelector(state => state.userDetails);
  const cartItems = useSelector(state => state.cartItems);

  const handleClose = () => {
    setOpen5(!open5)
  }

  const handleChange = async (e) => {
    setModal(true);
    setSearch(e.target.value)
    if (e.target.value.length === 0) {
      setModal(false)
    }


    var config = {
      method: 'get',
      url: `https://backend.proteinfarm.in/api/v1//getProductList?keyword=${e.target.value}`,
    };

    axios(config)
      .then(function (response) {
        setData(response.data.message)
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  return (

    <>
      <SideBar open5={open5} handleClose={handleClose} />

      <div className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900  sticky top-0 z-[100] shadow-xl">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
                <img className='h-10 w-28' src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674997358/protienfarm_wezs7k.jpg"/>
          </Link>
          <div className="flex">
            <div className="block relative lg:hidden w-48">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <SearchOutlined />
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" value={search} onChange={(e) => { handleChange(e); }} id="search-navbar" className="block p-2 pl-10 lg:w-[400px] w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <div className="hidden relative lg:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <SearchOutlined />
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" value={search} onChange={(e) => { handleChange(e); }} id="search-navbar" className="block p-2 pl-10 lg:w-[300px] xl:w-[200px] 2xl:w-[400px] w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <MenuIcon onClick={() => { handleClose() }} />
            </button>
          </div>
          {modal &&
            <>
              <div id="crypto-modal" tabindex="-1" aria-hidden="true" class="fixed mx-auto left-1/2 translate-y-1/2  -translate-x-1/2 z-50 w-full md:w-[800px] p-4 overflow-x-hidden overflow-y-auto h-modal ">
                <div class="relative w-full h-full max-w-md md:h-auto">
                  <div class="pointer-events-auto w-screen max-w-md">
                    <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div class="flex items-start justify-between">
                          <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Results for: {search}</h2>
                          <div class="ml-3 flex h-7 items-center">
                            <button onClick={() => { setModal(false) }} type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                              <span class="sr-only">Close panel</span>
                              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="mt-8">
                          <div class="flow-root">
                            <ul role="list" class="h-80 -my-6 divide-y divide-gray-200">
                              {data.map((data1) => (
                                <Link to={`/product/${data1.product_slug}`}>
                                  <li class="flex py-6">

                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img src={`${data1.product_image_url_primary}`} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                                    </div>
                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#">{data1.product_title}, {data1.product_weight}</a>
                                          </h3>
                                          <p class="ml-4">{data1.product_price}</p>
                                        </div>
                                        <p class="mt-1 text-sm text-gray-500">{data1.product_flavour}</p>
                                      </div>
                                      <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500">Qty :{data1.product_quantity}</p>
                                        <div class="flex">
                                          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Add To Cart</button>
                                        </div>
                                      </div>
                                    </div>

                                  </li>
                                </Link>
                              ))}
                              {data.length === 0 && <h1 className='text-center mt-10'>No results found for {search}.</h1>}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          <div className="hidden justify-between items-center w-full md:flex md:w-auto" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/contact">
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex">Customer Support<span className='ml-1 mb-2'><PhoneOutlined /></span></a>
                </Link>
              </li>
              <li>

                <a href="#" onMouseEnter={() => { setOpen1(true) }} onMouseLeave={() => { setOpen1(false) }} className="flex py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Account & Orders<KeyboardArrowDownRounded /></a>
                {open1 &&
                  <div className='absolute' onMouseEnter={() => { setOpen1(true) }} onMouseLeave={() => { setOpen1(false) }}>
                    <div id="dropdownDivider" className="relative left-[-50%] z-10 w-80 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="p-4 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                        {userDetails?.user?.message?.userName &&
                          <>
                            <li >
                              <Link to={`/user/${userDetails.user.message.id}`}>
                                <button type="button" className="mt-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-full">{userDetails.user.message.userName}</button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/myOrder">
                                <button type="button" className=" w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Orders</button>
                              </Link>
                            </li>
                            <li>
                              <button onClick={() => { dispatch(user_logout()) }} type="button" className=" w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Logout</button>
                            </li>
                          </>
                        }
                        {!userDetails?.user?.message?.userName &&
                          <>
                            <li >
                              <Link to="/login">
                                <button type="button" className="mt-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-full">Login</button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/register">
                                <button type="button" className=" w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">New User?/Sign Up</button>
                              </Link>
                            </li>
                          </>
                        }
                      </ul>
                      {/* <div className="py-1">
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                      </div> */}
                    </div>
                  </div>
                }

              </li>
              <li className=''>
                <Link to="/cart" c>
                  <Badge badgeContent={cartItems?.cartItems?.message?.length} color="primary">
                    <a href="#" onMouseEnter={() => { setOpen2(true) }} onMouseLeave={() => { setOpen2(false) }} className="flex py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><ShoppingCartOutlinedIcon /></a>
                    {open2 &&
                      <div className='absolute' onMouseEnter={() => { setOpen2(true) }} onMouseLeave={() => { setOpen2(false) }}>
                        <div id="dropdownDivider" className="relative left-[-100%] z-10 w-80 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="p-4 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                            <CartModal />
                          </ul>
                        </div>
                      </div>
                    }
                  </Badge>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
            <div className="flex items-center">
              <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                  <Link to="/products/page" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Product</Link>
                </li>
                <li>
                  <Link href="" className="text-gray-900 dark:text-white hover:underline">Menu</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 dark:text-white hover:underline">Verification</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 dark:text-white hover:underline">About Us</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 dark:text-white hover:underline">Shop</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className='md:hidden'>
        <BottomAppBar />
      </div>
    </>

  )
}

export default Header;