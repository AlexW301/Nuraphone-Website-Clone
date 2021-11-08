/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//Styles
import { Wrapper, Content } from "./FooterSection.styles";

const FooterSection = () => {
    return (
        <Wrapper>
            <Content>
                <div className="nura-logo">
                    <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5eb0bfa5036072adf2e53b65_nura_wordmark_white.png" alt="nura-logo"/>
                </div>

                <div className="footer-nav nav-1">
                    <a href="#">Blog</a>
                    <a href="#">Support</a>
                    <a href="#">Patents</a>
                    <a href="#">Upgrades</a>
                </div>

                <div className="footer-nav nav-2">
                    <a href="#">Warranty &amp; Registration</a>
                    <a href="#">Returns &amp; Refund Policy</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms of Sale</a>
                </div>

                <div className="social-icons">
                    <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8e093704e6da_facebook-min.png" alt="social-media-logo"/>
                    <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8ec39904e6dc_insta-min.png" alt="social-media-logo"/>
                    <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8ec39904e6dc_insta-min.png" alt="social-media-logo"/>
                    <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8e6faa04e6dd_youtube-min.png" alt="social-media-logo"/>
                </div>
            </Content>
        </Wrapper>
    )
}

export default FooterSection;