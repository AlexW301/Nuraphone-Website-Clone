import React from "react";
//Components
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import PersonalSoundSection from "./PersonalSoundSection";
import QuotesSection from "./QuotesSection";
import ReactionSection from "./ReactionSection";
import BlogSection from "./BlogSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <ProductsSection/>
            <PersonalSoundSection/>
            <QuotesSection/>
            <ReactionSection/>
            <BlogSection/>
        </div>
    )
}

export default Home;