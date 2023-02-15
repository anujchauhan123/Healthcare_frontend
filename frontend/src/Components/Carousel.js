import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";


export default function App() {
    const [data, setData] = useState([]);
    const datafunc = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_HOSTNAME}get/bannertype/home-carousel`,
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


    return (
        <>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map((item,index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full" >
                                <img style={{ minHeight: "200px" }} src={`${item.banner_url}`} />
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* <SwiperSlide>
                        <div className="w-full">
                            <img style={{ minHeight: "200px" }} src="https://img5.hkrtcdn.com/21592/bnr_2159164_o.jpg" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full">
                            <img style={{ minHeight: "200px" }} src="https://img9.hkrtcdn.com/21592/bnr_2159168_o.jpg" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full">
                            <img style={{ minHeight: "200px" }} src="https://img3.hkrtcdn.com/21592/bnr_2159132_o.jpg" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full">
                            <img style={{ minHeight: "200px" }} src="https://img3.hkrtcdn.com/21592/bnr_2159132_o.jpg" />
                        </div>
                    </SwiperSlide> */}

                </Swiper>
            </div>
        </>
    );
}
