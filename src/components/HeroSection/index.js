/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//Styles
import { Wrapper, HeroHeader, HeroImage } from "./HeroSection.styles";

const HeroSection = () => {
    return (
        <Wrapper>
            <HeroHeader>
                <h1 className="hero-heading"><strong>nura</strong>true</h1>
                <p className="hero-description">Introducing the only earbuds that personalize sound just for you.</p>
                <a className="ctc-btn" href="#">Discover nuratrue</a>
            </HeroHeader>
            <HeroImage/>
        </Wrapper>
    )
}

export default HeroSection;