import React from "react";
//Components
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";

const Home = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <ProductsSection/>
        </div>
    )
}

export default Home;