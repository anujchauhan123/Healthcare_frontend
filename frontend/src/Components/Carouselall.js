import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Caroes = ({image1,image2,image3,image4}) => {
    return (
        <div className="mx-auto md:w-3/4 w-full">
            <Carousel showArrows={false} showStatus={false} showIndicators={false} autoPlay interval="5000" transitionTime="1000">
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
                <div>
                    <img src={image4} />
                </div>
            </Carousel>
        </div>
    )
}

export default Caroes;