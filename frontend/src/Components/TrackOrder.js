import { useEffect, useState } from "react"


const TrackOrder = ({status}) => {
    const [width,setWidth] = useState("w-1/4");
    useEffect(() => {
        if(status=="PENDING"){
            setWidth("w-1/4");
        }
        else if(status=="CONTINUE"){
            setWidth("w-1/2");
        }
        else if(status=="OUT FOR DELIVERY"){
            setWidth("w-3/4");
        }
        else if(status=="DELIVERED"){
            setWidth("w-full");
        }
    },[])
    return (
        <>
            <div>

                <div className="">
                    <div class="overflow-hidden rounded-full bg-gray-200">
                        <div class={`animate-[ping_3s_ease-in-out_infinite] h-2 ${width} rounded-full bg-blue-500`}></div>
                    </div>
                    <div>

                        <div>
                            <ol
                                class="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-4"
                            >
                                <li class="flex items-center justify-center p-4">
                                    <svg
                                        class="mr-2 h-7 w-7 flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                        />
                                    </svg>

                                    <p class="leading-none">
                                        <strong class="block font-medium"> Processed </strong>
                                        <small class="mt-1"> Some info about you. </small>
                                    </p>
                                </li>

                                <li class="relative flex items-center justify-center bg-gray-50 p-4">
                                    <span
                                        class="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-white sm:block"
                                    >
                                    </span>

                                    <span
                                        class="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-gray-50 sm:block"
                                    >
                                    </span>

                                    <svg
                                        class="mr-2 h-7 w-7 flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>

                                    <p class="leading-none">
                                        <strong class="block font-medium"> Continue </strong>
                                        <small class="mt-1"> Where we sending it? </small>
                                    </p>
                                </li>

                                <li class="flex items-center justify-center p-4">
                                    <svg
                                        class="mr-2 h-7 w-7 flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        />
                                    </svg>

                                    <p class="leading-none">
                                        <strong class="block font-medium"> Out For Delivery.</strong>
                                        <small class="mt-1"> Show us the money. </small>
                                    </p>

                                </li>
                                <li class="flex items-center justify-center p-4">
                                    <svg
                                        class="mr-2 h-7 w-7 flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        />
                                    </svg>

                                    <p class="leading-none">
                                        <strong class="block font-medium"> Delivered </strong>
                                        <small class="mt-1"> Show us the money. </small>
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default TrackOrder;