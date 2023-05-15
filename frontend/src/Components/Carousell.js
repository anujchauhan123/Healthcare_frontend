import React from 'react'
import Slider from 'react-slick-slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProductCard from './ProductCards';
const CarouselCards = ({products}) => {

    var settings = {
        dots: false,
        // infinite: true,
        speed: 700,
        // slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{ breakpoint: 200, settings: { slidesToShow: 2 } }, { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 4 } }, { breakpoint: 10000, settings: { slidesToShow: 4 } }],
        // centerMode: true
    };



    const slider = React.useRef(null);

    return (
        <div className='carouselCards my-20 max-w-screen-xl mx-auto'>
            <div className="flex justify-between my-10">
                <div className="flex">


                    <h1 className='text-3xl'>{products?.products?.message?.[0]?.product_category}</h1>
                    {console.log("products@@@@@@@@@@@",products?.products?.message)}
                </div>
                <div className="flex gap-2">
                    <div className="arrow__left border-2 border-gray-500 border-solid hover:text-gray-100 hover:bg-navy hover:border-navy  border-black p-1 rounded-full" onClick={() => slider?.current?.slickPrev()}>
                        <ArrowBackIcon className="arrow__leftIcon hover:bg-white-200" />
                    </div>
                    <div className="arrow__right border-2 border-gray-500 border-solid hover:text-gray-100 hover:bg-navy hover:border-navy  border-black p-1 rounded-full" onClick={() => slider?.current?.slickNext()} >
                        <ArrowForwardIcon className="arrow__rightIcon" />
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto'>
                <Slider ref={slider} {...settings}>

                    {products?.products?.message?.map((product, index) => (
                        <div className="flex justify-center">
                            <ProductCard key={index} product={product} />
                        </div>
                    ))}
                    {products?.products?.message?.map((product, index) => (
                        <div className="flex justify-center">
                            <ProductCard key={index} product={product} />
                        </div>
                    ))}
                    {products?.products?.message?.map((product, index) => (
                        <div className="flex justify-center">
                            <ProductCard key={index} product={product} />
                        </div>
                    ))}
                    {products?.products?.message?.map((product, index) => (
                        <div className="flex justify-center">
                            <ProductCard key={index} product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CarouselCards