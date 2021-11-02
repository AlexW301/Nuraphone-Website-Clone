/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef, useState} from "react";
//Styles
import { Wrapper, Content, NavBarWrapper } from './Header.styles';

const Header = () => {
    const menu = useRef(null);
    const menuIcon = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);

    const showMobileMenu = () => {
        if (!menuOpen) {
            menuIcon.current.style.backgroundColor = '#c8c8c8';
            menu.current.classList.add('mobile-menu');
            setMenuOpen(true);
        } else if (menuOpen) {
            menuIcon.current.style.backgroundColor = 'transparent';
            menu.current.classList.remove('mobile-menu');
            setMenuOpen(false);
        }
    }

    return (
        <Wrapper>
            <Content>
                <a href="#"><img className="company-logo" src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5cca3d0d5535128c96efc26b_Nura_Logo_Icon.png" alt="company-logo"/></a>
                <NavBarWrapper ref={menu} className="menu">
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
                <div className="cart-and-menu">
                <a href="#"><img className="cart-icon" src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5bcfb920068809162272b924_cart-76px.png" alt="cart-icon" /></a>
                <svg ref={menuIcon} onClick={() => {showMobileMenu();}} xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 512 512"><title>Menu</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Header;