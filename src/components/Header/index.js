/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//Styles
import { Wrapper, Content, NavBarWrapper } from './Header.styles';

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <a href="#"><img className="company-logo" src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5cca3d0d5535128c96efc26b_Nura_Logo_Icon.png" alt="company-logo"/></a>
                <NavBarWrapper>
                    <ul>
                        <li><a href="#"><span>nura</span>now</a></li>
                        <li><a href="#"><span>nura</span>phone</a></li>
                        <li><a href="#"><span>nura</span>loop</a></li>
                        <li><a href="#"><span>nura</span>true <span className="new-badge">new</span></a></li>
                        <li><a href="#"><span>nura</span>buds <span className="new-badge">new</span></a></li>
                        <li><a href="#">Accesories</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </NavBarWrapper>
                <a href="#"><img className="cart-icon" src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5bcfb920068809162272b924_cart-76px.png" alt="cart-icon" /></a>
            </Content>
        </Wrapper>
    )
}

export default Header;