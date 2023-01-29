import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardCarousel from '../Components/CardCarousel';
import CardNewCarousel from '../Components/CardNewCarousel';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { productListGainerAction, productListIsorichAction, productListProtienAction } from '../Redux/Actions/productAction';


const Home = () => {
    const protienList = useSelector((state) => state.protienList);
    const gainerList = useSelector((state) => state.gainerList);
    const IsoRichList = useSelector((state) => state.isoRichList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productListProtienAction(1));
        dispatch(productListGainerAction(1));
        dispatch(productListIsorichAction(1));
    }, [])
    return (
        <>

            <Header />
            <Carousel />
            <div className=' block md:flex w-full md:w-11/12 mx-auto gap-10 mt-10'>
                <div className='mt-4'>
                    <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-7.jpg&w=2048&q=100" />
                </div>
                <div className='mt-4'>
                    <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-7.jpg&w=2048&q=100" />
                </div>
            </div>
            <CardNewCarousel item="PROTIEN" products={protienList} />
            <section class="overflow-hidden text-gray-700">
                <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div class="flex flex-wrap  -m-1 md:-m-2 ">
                        <div class="flex flex-wrap w-full md:w-1/2">
                            <div className='pt-14 pl-10 h-48'>
                                <h1 className='text-4xl font-bold'>Browse All Category</h1>
                                <Link to="/">
                                    <p className=''>View All</p>
                                </Link>
                            </div>
                            {/* <div class="w-full md:w-1/2 p-1 md:p-2">
                                <div
                                    class="relative overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
                                >
                                    <img
                                        alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
"
                                    />
                                    <div class="absolute text-white left-[16px] bottom-[8px]">
                                        <h1 className='font-bold text-4xl'>Protien</h1>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div class="w-full md:w-1/2 p-1 md:p-2">
                                <div
                                    class="relative overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
                                >
                                    <img
                                        alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
"
                                    />
                                    <div class="absolute text-white left-[16px] bottom-[8px]">
                                        <h1 className='font-bold text-4xl'>Protien</h1>
                                    </div>
                                </div>
                            </div> */}
                            <div class="w-full p-1 md:p-2">
                                <div
                                    class="relative overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
                                >
                                    <img
                                        alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
"
                                    />
                                    <div class="absolute text-white left-[16px] bottom-[8px]">
                                        <h1 className='font-bold text-4xl'>Protien</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-full md:w-1/2 md:w-1/2">
                            <div class="w-full p-1 md:p-2">
                                <div
                                    class="relative overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
                                >
                                    <img
                                        alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
"
                                    />
                                    <div class="absolute text-white left-[16px] bottom-[8px]">
                                        <h1 className='font-bold text-4xl'>Protien</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 p-1 md:p-2">
                                <div
                                    class="relative overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
                                >
                                    <img
                                        alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
"
                                    />
                                    <div class="absolute text-white left-[16px] bottom-[8px]">
                                        <h1 className='font-bold text-4xl'>Protien</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 p-1 md:p-2">
                                <div
                                    class="relative overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
                                >
                                    <img
                                        alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
"
                                    />
                                    <div class="absolute text-white left-[16px] bottom-[8px]">
                                        <h1 className='font-bold text-4xl'>Protien</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <CardCarousel item="PROTIEN" products={protienList} />
            <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-7.jpg&w=1920&q=100" />
            

            <Footer />
        </>
    )

}

export default Home;