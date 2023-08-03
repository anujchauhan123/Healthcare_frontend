import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { KeyboardArrowDownRounded, PhoneOutlined, SearchOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import {  user_logout } from '../Redux/Actions/userLoginAction';
import BottomAppBar from './BottomNavbar';
import logo from './ezgif1.png';
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
  const [flyerTwo, setFlyerTwo] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);


  const [flyerTwo1, setFlyerTwo1] = React.useState(false);
  const [flyer1, setFlyer1] = React.useState(false);

  const [flyerTwo2, setFlyerTwo2] = React.useState(false);
  const [flyer2, setFlyer2] = React.useState(false);

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
      url: `${process.env.REACT_APP_HOSTNAME}api/v1/getProductList?keyword=${e.target.value}&page=1&category=ALL&weight=ALL&flavour=ALL&sort=NEWEST`,
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
            <img src={logo} style={{height: 92,
    width: 167}}/>
          </Link>
          <div className="flex">
            <div className="block relative lg:hidden w-48">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <SearchOutlined />
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" value={search} onChange={(e) => { handleChange(e); }} id="search-navbar" className="block p-2 pl-10 lg:w-[600px] w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <div className="hidden relative lg:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <SearchOutlined />
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" value={search} onChange={(e) => { handleChange(e); }} id="search-navbar" className="block p-2 pl-10 lg:w-[300px] xl:w-[500px] 2xl:w-[600px] w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
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
                              <Link to={`/myOrder/${userDetails.user.message.id}`}>
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




            <div>

                <nav className="hidden md:flex max-w-screen-xl px-6 mx-auto py-6 my-auto space-x-10">
                    <div className="relative">
                        {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                        <button
                            type="button"
                            className="
                     group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 pb-8'
                    "
                            onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
                        >
                            <span>Protein's</span>
                            {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                            <svg
                                className={
                                    flyer === true
                                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                        : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                }
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {/*
              'Solutions' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}

                        <div
                            onMouseLeave={() => setFlyer(false)}
                            className={
                                flyer
                                    ? "w-[300px] opacity-100 translate-y-0  transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 sm:px-0 lg:ml-0 "
                                    : "w-full opacity-0 hidden translate-y-1  absolute z-10 -ml-4 mt-3 transform px-2 sm:px-0 lg:ml-0 display-none"
                            }
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/chart-bar */}
                                      
                                        <div className="ml-4">
                                        <a href="/products/page">
                                            <p  style={{margin: 17}}  className="text-base font-medium text-gray-900">
                                                Protein
                                            </p>
                                            </a>

                                            <Link to="/products/page/protein">
                                            <p style={{margin: 17}} className="mt-1 text-sm text-gray-500">
                                                ISO Whey Protien Concentrate
                                            </p>
                                            </Link>

                                            <Link to="/products/page/protein">
                                            <p  style={{margin: 17}}  className="mt-1 text-sm text-gray-500">
                                                Whey Protiens Isolate
                                            </p>
                                            </Link>

                                            <Link to="/products/page/protein">
                                            <p  style={{margin: 17}}  className="mt-1 text-sm text-gray-500">
                                                Hydrolised Whey Protiens
                                            </p>
                                            </Link>
                                           
                                        </div>
                                    </a>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="relative">
                        {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                        <button
                            type="button"
                            className="
                     group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 pb-8'
                    "
                            onClick={() => (setFlyer1(!flyer1), setFlyerTwo1(false))}
                        >
                            <span>Gainer's</span>
                            {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                            <svg
                                className={
                                    flyer1 === true
                                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                        : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                }
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {/*
              'Solutions' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}

                        <div
                            onMouseLeave={() => setFlyer1(false)}
                            className={
                                flyer1
                                    ? "w-[300px] opacity-100 translate-y-0  transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 sm:px-0 lg:ml-0 "
                                    : "w-full opacity-0 hidden translate-y-1  absolute z-10 -ml-4 mt-3 transform px-2 sm:px-0 lg:ml-0 display-none"
                            }
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative  bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/cursor-click */}
                                        <div className="ml-4">
                                            <p  style={{margin: 17}}  className="text-base font-medium text-gray-900">
                                                Gainers
                                            </p>

                                            <Link to="/products/page/gainer">
                                            
                                            <p  style={{margin: 17}}  className="mt-1 text-sm text-gray-500">
                                                Mass Gainer
                                            </p>
                                            </Link>

                                            <Link to="/products/page/gainer">
                                            <p  style={{margin: 17}}  className="mt-1 text-sm text-gray-500">
                                                weight Gainer
                                            </p>
                                            </Link>
                                           
                                        </div>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="relative">
                        {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                        <button
                            type="button"
                            className="
                     group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 pb-8'
                    "
                            onClick={() => (setFlyer2(!flyer2), setFlyerTwo2(false))}
                        >
                            <span>Pre/Post Workout</span>
                            {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                            <svg
                                className={
                                    flyer2 === true
                                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                        : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                }
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {/*
              'Solutions' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}

                        <div
                            onMouseLeave={() => setFlyer2(false)}
                            className={
                                flyer2
                                    ? "w-[300px] opacity-100 translate-y-0  transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 sm:px-0 lg:ml-0 "
                                    : "w-full opacity-0 hidden translate-y-1  absolute z-10 -ml-4 mt-3 transform px-2 sm:px-0 lg:ml-0 display-none"
                            }
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative  bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    
                                    
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/shield-check */}
                                        <div className="ml-4">
                                            <p  style={{margin: 17}}  className="text-base font-medium text-gray-900">
                                                Pre/Post Workout
                                            </p>
                                            <Link to="/products/page/pre-postworkout">
                                            <p  style={{margin: 17}}  className="mt-1 text-sm text-gray-500">
                                                BCAAs / EAA
                                            </p>
                                            </Link>

                                            <Link to="/products/page/pre-postworkout">
                                            <p  style={{margin: 17}}  className="mt-1 text-sm text-gray-500">
                                                Vitamins & Minerals
                                            </p>

                                            </Link>
                                        </div>
                                    </a>
                                    
                                </div>
                                <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                    {/* <div className="flow-root">
                                        <a
                                            href="#"
                                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                        >
                                           
                                            <svg
                                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <span className="ml-3">Watch Demo</span>
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a
                                            href="#"
                                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                        >
                                            <svg
                                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                            <span className="ml-3">Contact Sales</span>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>





                    <a
                        href="/verification"
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >

                        Product Authentication
                    </a>
                    

                    <a
                        href="/contact"
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                        Customer Support
                    </a>
                    <a
                        href="/About"
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                        About Us
                    </a>
                </nav>
            </div>
      </div>
      <div className='md:hidden'>
        <BottomAppBar />
      </div>
    </>

  )
}

export default Header;