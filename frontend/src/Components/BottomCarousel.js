import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";


export default function BottomCarousel() {
    const [data, setData] = useState([]);
    const datafunc = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_HOSTNAME}get/bannertype/bottom-carousel`,
            headers: {
                'Authorization': `Bearer ${localStorage?.getItem("adminInfo")?.split('"')[3]}`
            }
        };
        axios(config)
            .then(function (response) {
                console.log("data@@@@@@@@@@@@@#$$$$$$$$$$$$$$$",response?.data?.message)
                setData(response?.data?.message)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        datafunc();
    }, [])


    return (
        <>
            <div className="bg-gray-100">
                <div className="max-w-screen-2xl mx-auto rounded-xl py-10">
                    <div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            effect={"fade"}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, EffectFade, Pagination, Navigation]}
                            className="mySwiper"
                        >

                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="" style={{width: '90%', height: 376, marginTop: 80, marginBottom: 80}} >
                                        <img style={{ minHeight: 200, borderRadius: 20 }} src={`${item.banner_url}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    );
}
