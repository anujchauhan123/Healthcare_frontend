import { ShoppingCartCheckout } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
const Stepper = ({step}) => {
    return (
        <>
            <div className="px-5 w-full md:w-3/5 lg:w-2/5 -mt-5  mx-auto">
                <div className="mx-4 px-4">
                    <div className="flex items-center">
                        <div className={`flex items-center  ${step===1?"bg-teal-600 border-teal-600 text-white rounded-full":"text-teal-600"} relative`}>
                            <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 flex justify-center`}>
                                <ShoppingCartCheckout/>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Cart</div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step>1?"border-teal-600":""} `}></div>
                        <div className={`flex items-center text-white ${step===2?"bg-teal-600 border-teal-600 text-white rounded-full":"text-teal-600"} relative `}>
                            <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${step>2?"border-teal-600":"border-gray-300"} flex justify-center`}>
                                <HomeIcon/>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Address</div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step>2?"border-teal-600":""} `}></div>
                        <div className={`flex items-center ${step===3?"bg-teal-600 border-teal-600 text-white rounded-full":"text-teal-600"}  relative`}>
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300 flex justify-center">
                                <LocalAtmIcon/>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Payment</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Stepper;