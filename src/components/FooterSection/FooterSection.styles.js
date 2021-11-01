import styled from "styled-components";

export const Wrapper = styled.div`
    height: 326px;
    padding: 50px 0 0;
    background-color: #191919;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: grid;
    width: 1200px;
    position: relative;
    margin: 0 276px;
    padding: 0 40px;
    grid-template-columns: repeat(4, 1fr);

    .nura-logo {
        
        img {
        width: 131.67px;
        height: 37.92px;
        }
    }

    .footer-nav {
        display: flex;
        flex-direction: column;
        gap: 6px;
        border-top: 1px solid #fff;
        padding: 10px 10px 0 0;
        width: 250px;

        a:link,
        a:visited {
            text-decoration: none;
            color: #fff;
            font-size: 1.7rem;
            letter-spacing: 1px;
        }

        a:hover,
        a:active {
            opacity: .7;
        }
    }

    .social-icons {
        display: flex;
        gap: 10px;
        position: absolute;
        right: 0;

        img {
            height: 40px;
            width: 40px;
        }
    }
`;