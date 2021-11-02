import styled from "styled-components";

export const Wrapper = styled.div`
    height: 55px;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 99999;
    display: flex;
    border-bottom: 1px solid #f8f8f8;

    @media screen and (max-width: 990px) {
        padding: 0 18px 0 40px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 10px 0 10px;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1120px;
    margin: 0 auto;
    position: relative;

    .company-logo {
        height: 28.8x;
        width: 60px;
    }

    .cart-icon {
        height: 38px;
        width: 38px;
    }

    .menu-icon {
        height: 24px;
        width: 24px;
        display: none;
    }

    @media screen and (max-width: 1125px) {
        width: 900px;
    }

    @media screen and (max-width: 990px) {

        .cart-and-menu {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }

        .menu-icon {
            display: block;
            padding: 16px;
            box-sizing: content-box;
        }

        .menu {
            display: none;
            z-index: 9;
            position: relative;
        }

        .mobile-menu {
            display: inline-block;
            position: absolute;
            top: 55px;
            right: 50%;
            transform: translateX(50%);
            background-color: #c8c8c8;
            height: 100vh;
            width: 88%;
            animation: slideIn .3s ease-in;
            z-index: -9999;
            
            @keyframes slideIn {
                0% {top: -1000px}
                100% {top: 55px}
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            position: relative;

        a:link,
        a:visited {
            font-size: 1.5rem;

                span {
                font-size: 1.5rem;
                font-weight: 600;
                }

                .new-badge {
                font-size: 1rem;
                }
            }
        }
    }

`;

export const NavBarWrapper = styled.div`

    ul {
        list-style: none;
        display: flex;
    }

    li {
        padding: 20px 10px;
        margin: 0 6.5px;
    }

    li:hover {
        opacity: .7;
    }

    a:link,
    a:visited {
        font-size: 1.6rem;
        text-decoration: none;
        color: #3d4246;
        font-weight: 300;
    }

    a span {
        font-size: 1.6rem;
        font-weight: 400;
        color: #000000;
    }

    .new-badge {
        font-size: 1rem;
        padding: 2px 6px;
        color: #fff;
        text-transform: uppercase;
        background-color: #0f6bff;
        border-radius: 38px;
        display: inline-block;
        transform: translate(0, -2px);
        line-height: 15px;
        font-weight: 700;
    }

    @media screen and (max-width: 1125px) {
        a:link,
        a:visited {
            font-size: 1.2rem;
        }

        a span {
            font-size: 1.2rem;
        }
    }
`;

