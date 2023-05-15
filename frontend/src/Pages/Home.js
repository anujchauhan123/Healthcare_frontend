import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BrandCarousel from '../Components/BrandCarousel';
import CardCarousel from '../Components/CardCarousel';
import Carousel from '../Components/Carousel';
import CarouselCards from '../Components/Carousell';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';
import { productListGainerAction, productListIsorichAction, productListProtienAction } from '../Redux/Actions/productAction';


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
    }, [])
    console.log("proteinlistdata#############3ddddddddd",protienList);
    return (
        <>

            {/* <Header /> */}
            <NavBar/>
            <Carousel />
            <CarouselCards item="PROTIEN" products={protienList}/>
            <CarouselCards item="GAINER" products={gainerList}/>
            <CarouselCards item="ISORICH" products={IsoRichList}/>

            <CarouselCards item="Whey Protein" products={WheyProtein}/>

            


            <CardCarousel/>

            <BrandCarousel/>
            <Footer />
        </>
    )

}

export default Home;