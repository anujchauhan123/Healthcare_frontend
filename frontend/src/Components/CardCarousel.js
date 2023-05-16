import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import axios from "axios";

export default function CardCarousel() {
    const [data, setData] = useState([]);
    const datafunc = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_HOSTNAME}get/bannertype/main-carousel`,
            headers: {
                'Authorization': `Bearer ${localStorage?.getItem("adminInfo")?.split('"')[3]}`
            }
        };
        axios(config)
            .then(function (response) {
                setData(response?.data?.message)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        datafunc();
    }, [])
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    return (
        <>
            <div className="w-4/5 relative mx-auto">
                <Swiper
                    loop={true}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            // spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            // spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            // spaceBetween: 50,
                        },
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    onSwiper={(swiper) => {
                        // Delay execution for the refs to be defined
                        setTimeout(() => {
                            // Override prevEl & nextEl now that refs are defined
                            swiper.params.navigation.prevEl = navigationPrevRef.current
                            swiper.params.navigation.nextEl = navigationNextRef.current

                            // Re-init navigation
                            swiper.navigation.destroy()
                            swiper.navigation.init()
                            swiper.navigation.update()
                        })
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-28" >
                                <img src={`${item.banner_url}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex w-full  justify-between absolute px-16  top-[50%] translate-y-[-50%] z-50">
                    <button className="cursor-pointer rounded-full text-[#92ca49] z-50" ref={navigationPrevRef} >
                        <ArrowCircleLeftIcon fontSize="large" />
                    </button>
                    <button className="cursor-pointer rounded-full text-[#92ca49] z-50" ref={navigationNextRef} >
                        <ArrowCircleRightIcon fontSize="large" />
                    </button>
                </div>
            </div>
        </>
    );
}
