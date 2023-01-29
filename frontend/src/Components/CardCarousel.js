import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCards";


export default function CardCarousel({ item, products }) {
    return (
        <>
            <div className=" lg:w-[70%] h-96 mx-auto shadow-md p-10 m-10 h-full border-slate-200 border-[1px]">
                <div className="flex justify-between">
                    <h1 className="text-[25px]">{item}</h1>
                    <Link to="/products/page" type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View All</Link>
                </div>

                <div className="border-[1px] my-2 border-slate-200"></div>
                <div className=" mx-auto">
                    {products?.products?.message?.length > 0 ? <>
                        <Carousel
                            additionalTransfrom={0}
                            arrows={true}
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
                                    items: 4,
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
                                    items: 3,
                                    partialVisibilityGutter: 30
                                }
                            }}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={2}
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
        </>
    );
}
