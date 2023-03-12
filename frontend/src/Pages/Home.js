import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BrandCarousel from '../Components/BrandCarousel';
import Carousel from '../Components/Carousel';
import CarouselCards from '../Components/Carousell';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';
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

            {/* <Header /> */}
            <NavBar/>
            <Carousel />
            <CarouselCards item="PROTIEN" products={protienList}/>

            <BrandCarousel/>
            <Footer />
        </>
    )

}

export default Home;