import React, { useState } from 'react'

const Footer = () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)

    return (
        <>
            <footer className="text-gray-600 body-font p-10 md:p-20 w-full lg:w-4/5 mx-auto">
                <div className="container px-5 pb-10 mx-auto">
                    <div className=" flex-wrap md:text-left hidden md:flex text-center -mb-10 -mx-4">
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <div className='w-32 mx-auto'>
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">HEALTHKART</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <div className='w-32 mx-auto'>
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">BRANDS</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                            </div>
                        </div>

                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <div className='w-32 mx-auto'>
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">HEALTH & FITNESS</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <div className='w-32 mx-auto'>
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POLICIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <div className='w-32 mx-auto'> 
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">QUICK LINKS</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                            </div>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <div className='w-32 mx-auto'>
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT HEALTHKART</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>

                            </nav>
                        </div>
                        </div>
                    </div>
                    <div className='block md:hidden'>
                        <div className="border-b border-gray-200 py-6 ">
                            <h3 className="-my-3 flow-root">
                                <button onClick={() => { setOpen1(!open1) }} type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                    <span className="font-medium text-gray-900">HEALTHKART</span>
                                    <span className="ml-6 flex items-center">

                                        {!open1 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                        }
                                        {open1 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                                            </svg>
                                        }
                                    </span>
                                </button>
                            </h3>
                            {open1 &&
                                <div className="pt-6" id="filter-section-2">
                                    <nav className="list-none mb-10">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </nav>
                                </div>
                            }
                        </div>
                        <div className="border-b border-gray-200 py-6">
                            <h3 className="-my-3 flow-root">

                                <button onClick={() => { setOpen2(!open2) }} type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                    <span className="font-medium text-gray-900">BRANDS</span>
                                    <span className="ml-6 flex items-center">

                                        {!open2 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                        }
                                        {open2 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                                            </svg>
                                        }
                                    </span>
                                </button>
                            </h3>
                            {open2 &&
                                <div className="pt-6" id="filter-section-2">
                                    <nav className="list-none mb-10">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </nav>
                                </div>
                            }
                        </div>
                        <div className="border-b border-gray-200 py-6">
                            <h3 className="-my-3 flow-root">

                                <button onClick={() => { setOpen3(!open3) }} type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                    <span className="font-medium text-gray-900">HEALTH & FITNESS</span>
                                    <span className="ml-6 flex items-center">

                                        {!open3 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                        }
                                        {open3 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                                            </svg>
                                        }
                                    </span>
                                </button>
                            </h3>
                            {open3 &&
                                <div className="pt-6" id="filter-section-2">
                                    <nav className="list-none mb-10">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </nav>
                                </div>
                            }
                        </div>
                        <div className="border-b border-gray-200 py-6">
                            <h3 className="-my-3 flow-root">

                                <button onClick={() => { setOpen4(!open4) }} type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                    <span className="font-medium text-gray-900">POLICIES</span>
                                    <span className="ml-6 flex items-center">

                                        {!open4 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                        }
                                        {open4 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                                            </svg>
                                        }
                                    </span>
                                </button>
                            </h3>
                            {open4 &&
                                <div className="pt-6" id="filter-section-2">
                                    <nav className="list-none mb-10">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </nav>
                                </div>
                            }
                        </div>
                        <div className="border-b border-gray-200 py-6">
                            <h3 className="-my-3 flow-root">

                                <button onClick={() => { setOpen5(!open5) }} type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                    <span className="font-medium text-gray-900">QUICK LINKS</span>
                                    <span className="ml-6 flex items-center">

                                        {!open5 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                        }
                                        {open5 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                                            </svg>
                                        }
                                    </span>
                                </button>
                            </h3>
                            {open5 &&
                                <div className="pt-6" id="filter-section-2">
                                    <nav className="list-none mb-10">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </nav>
                                </div>
                            }
                        </div>
                        <div className="border-b border-gray-200 py-6">
                            <h3 className="-my-3 flow-root">

                                <button onClick={() => { setOpen6(!open6) }} type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                    <span className="font-medium text-gray-900">ABOUT HEALTHKART</span>
                                    <span className="ml-6 flex items-center">

                                        {!open6 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                        }
                                        {open6 &&
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                                            </svg>
                                        }
                                    </span>
                                </button>
                            </h3>
                            {open6 &&
                                <div className="pt-6" id="filter-section-2">
                                    <nav className="list-none mb-10">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </nav>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <div className="flex py-0 md:px-5 py-8 mx-auto my-10 ">
                        <div className="lg:flex md:mr-20 ">
                            <div className="sm:w-64 w-40 sm:mr-4 mr-2">
                                <div className=''>
                                    <label for="footer-field" className="leading-7 text-sm text-gray-600">Subscribe</label>
                                    <div className='flex w-80'>
                                    <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-10" />
                                    <div className='flex'>
                                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 h-10 rounded ml-2">Button</button>
                                        </div>
                                        </div>
                                    <div className='flex mt-2'>
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-gray-500">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                            </svg>
                                        </a>
                                        
                                    </div>

                                    <div className='flex w-16 mt-6 space-x-4'>
                                        <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/hk-consult.svg" />
                                        <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/A-G.svg" />
                                        <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/RP.svg" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" inline-flex h-40 overflow-y-hidden overflow-y-scroll hidden md:block lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                            <p>Disclaimer:The information contained on HealthKart (www.healthkart.com or subdomains) is provided for informational purposes only and is not meant to substitute for the advice provided by your doctor or other healthcare professional. Information and statements regarding products, supplements, programs etc listed on HealthKart have not been evaluated by the Food and Drug Administration or any government authority and are not intended to diagnose, treat, cure, or prevent any disease. Please read product packaging carefully prior to purchase and use. The results from the products will vary from person to person. No individual result should be seen as typical.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
                        </p>
                        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;