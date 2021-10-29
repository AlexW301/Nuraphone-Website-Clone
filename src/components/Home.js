import React from "react";
//Components
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import PersonalSoundSection from "./PersonalSoundSection";
import QuotesSection from "./QuotesSection";

const Home = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <ProductsSection/>
            <PersonalSoundSection/>
            <QuotesSection/>
        </div>
    )
}

export default Home;