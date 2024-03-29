import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BrandCarousel from '../Components/BrandCarousel';
import ImageCarousel from '../Components/ImageCarousel';
import CardCarousel from '../Components/CardCarousel';
import Carousel from '../Components/Carousel';
import MiddleCarousel from '../Components/MiddleCarousel';
import BottomCarousel from '../Components/BottomCarousel';

import Header from '../Components/Header';



import CarouselCards from '../Components/Carousell';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';
import { productListGainerAction, productListIsorichAction, productListWheyProteinAction, productListProtienAction } from '../Redux/Actions/productAction';


const Home = () => {
    const protienList = useSelector((state) => state.protienList);
    const gainerList = useSelector((state) => state.gainerList);
    const IsoRichList = useSelector((state) => state.isoRichList);
    const WheyProtein = useSelector((state) => state.WheyProtein);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productListProtienAction(1));
        dispatch(productListGainerAction(1));
        dispatch(productListIsorichAction(1));
        dispatch(productListWheyProteinAction(1));

        
    }, [])
    console.log("proteinlistdata#############3ddddddddd",protienList);
    return (
        <>

            {/* <NavBar/> */}
            <Header />
            <Carousel />
            <CarouselCards item="ISORICH" products={IsoRichList}/>
            
            <CardCarousel/>
            <CarouselCards item="GAINER" products={gainerList}/>
            <ImageCarousel/>

            <MiddleCarousel/>
            
            <CarouselCards item="WHEYPROTEIN" products={WheyProtein}/>
            <BrandCarousel/>
            <CarouselCards item="PROTIEN" products={IsoRichList}/>
            <BottomCarousel/>            
            <Footer />
        </>
    )

}

export default Home;