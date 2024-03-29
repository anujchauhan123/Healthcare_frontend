import { PhoneOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CartModal from "./cartModal";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false)
    const [flyer, setFlyer] = React.useState(false);
    const [flyerTwo, setFlyerTwo] = React.useState(false);
    const [search, setSearch] = React.useState("")
    const handleChange = async (e) => {
        // setModal(true);
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            //   setModal(false)
        }
    }

    return (
        <>
            {/* This example requires Tailwind CSS v2.0+ */}
            <div className=" sticky bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                <span className="sr-only">Protienfarm</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://res.cloudinary.com/valarmorghullis/image/upload/v1678701983/Protein_Farm__logo_page_ybtdtb.jpg"
                                    alt="logo"
                                />
                            </Link>
                        </div>


                        <div className="flex items-center justify-end md:flex-1 lg:w-0">
                            <div className="flex mr-0 md:mr-10">
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

                            </div>

                            <Link to="/cart" >
                                <Badge color="primary">
                                    <a href="#" onMouseEnter={() => { setOpen2(true) }} onMouseLeave={() => { setOpen2(false) }} className="flex py-2 md:mr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><ShoppingCartOutlined /></a>
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

                            <Link
                                to="/login"
                                className="hidden md:flex whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Sign in
                            </Link>
                            <Link
                                to="/register"
                                className="hidden md:flex ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign up
                            </Link>
                            <div className="-mr-2 -my-2 md:hidden">
                                <button
                                    type="button"
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="sr-only">Open menu</span>
                                    {/* Heroicon name: outline/menu */}
                                    <svg
                                        className="h-6 w-6"
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
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        open
                            ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674997358/protienfarm_wezs7k.jpg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>

                                        <svg
                                            className="h-6 w-6"
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
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/chart-bar */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Analytics
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/cursor-click */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Engagement
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/shield-check */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Security
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/view-grid */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Integrations
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/refresh */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Automations
                                        </span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Docs
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Enterprise
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Blog
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Help Center
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Guides
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Security
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Events
                                </a>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
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
                            <span>Sort By Category</span>
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
                                    ? "w-[700px] opacity-100 translate-y-0  transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 sm:px-0 lg:ml-0 "
                                    : "w-full opacity-0 hidden translate-y-1  absolute z-10 -ml-4 mt-3 transform px-2 sm:px-0 lg:ml-0 display-none"
                            }
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid grid-cols-3 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
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
                        href="#"
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                        About Us
                    </a>
                </nav>
            </div>

        </>
    );
};

export default NavBar;
