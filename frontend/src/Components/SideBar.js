import { useState } from "react";
import { Link } from "react-router-dom";


const SideBar = ({open5,handleClose}) => {
    
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <>
            {open5 &&
                <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-black bg-opacity-25"></div>
                    <div className="fixed inset-0 z-40 flex">
                        <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">HEALTHKART</h2>
                                <button onClick={() => { handleClose()}} type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <form className="mt-4 border-t border-gray-200">
                                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                    <li >
                                        <Link to="/contact" className="block px-2 py-3">Customer Support</Link>
                                    </li>  

                                    <li>
                                        <Link to="/about" className="block px-2 py-3">About Us</Link>
                                    </li>

                                    <li>
                                        <Link to="/login" className="block px-2 py-3">Login</Link>
                                    </li>

                                    <li>
                                        <Link to="/register" className="block px-2 py-3">Sign up</Link>
                                    </li>

                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SideBar