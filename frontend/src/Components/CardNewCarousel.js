import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCards";


export default function CardNewCarousel({ item, products }) {
    return (
        <>
            <div className="bg-gray-200 h-96 mx-auto shadow-md p-10 m-10 h-full border-slate-200 border-[1px]">
                <div className="w-3/4 mx-auto flex">
                    <div className="w-1/4 mr-10">
                        <h1 className="text-right text-2xl font-bold">Stylish Backpacks, Only<br /> For You</h1>
                        <img className="w-52 float-right" src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" />
                    </div>
                    <div className="mx-auto w-3/4">
                        {products?.products?.message?.length > 0 ? <>
                            <Carousel
                                additionalTransfrom={0}
                                arrows={false}
                                autoPlay
                                autoPlaySpeed={5000}
                                centerMode={false}
                                className=""
                                containerClass="container-with-dots"
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                infinite
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                pauseOnHover
                                renderArrowsWhenDisabled={false}
                                renderButtonGroupOutside={false}
                                renderDotsOutside={false}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 1024
                                        },
                                        items: 3,
                                        partialVisibilityGutter: 40
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 464,
                                            min: 0
                                        },
                                        items: 1,
                                        partialVisibilityGutter: 30
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 1024,
                                            min: 464
                                        },
                                        items: 2,
                                        partialVisibilityGutter: 30
                                    }
                                }}
                                rewind={false}
                                rewindWithAnimation={false}
                                rtl={false}
                                shouldResetAutoplay
                                showDots={false}
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                            >
                                {products?.products?.message?.map((product, index) => (
                                    <div className="flex justify-center">
                                        <ProductCard key={index} product={product} />
                                    </div>
                                ))}
                            </Carousel>
                        </> : <></>}
                    </div>
                </div>
                <div className="flex w-3/4 mx-auto mt-10">
                    <div className="mx-auto w-3/4">
                        {products?.products?.message?.length > 0 ? <>
                            <Carousel
                                additionalTransfrom={0}
                                arrows={false}
                                autoPlay
                                autoPlaySpeed={5000}
                                centerMode={false}
                                className=""
                                containerClass="container-with-dots"
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                infinite
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                pauseOnHover
                                renderArrowsWhenDisabled={false}
                                renderButtonGroupOutside={false}
                                renderDotsOutside={false}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 1024
                                        },
                                        items: 3,
                                        partialVisibilityGutter: 40
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 464,
                                            min: 0
                                        },
                                        items: 1,
                                        partialVisibilityGutter: 30
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 1024,
                                            min: 464
                                        },
                                        items: 2,
                                        partialVisibilityGutter: 30
                                    }
                                }}
                                rewind={false}
                                rewindWithAnimation={false}
                                rtl={false}
                                shouldResetAutoplay
                                showDots={false}
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                            >
                                {products?.products?.message?.map((product, index) => (
                                    <div className="flex justify-center">
                                        <ProductCard key={index} product={product} />
                                    </div>
                                ))}
                            </Carousel>
                        </> : <></>}
                    </div>
                    <div className="w-[0%] md:w-1/4 ml-10">
                        <h1 className="text-left text-2xl font-bold">Stylish Backpacks, Only<br /> For You</h1>
                        <img className="w-52 float-left" src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" />
                    </div>
                </div>
            </div>
        </>
    );
}
