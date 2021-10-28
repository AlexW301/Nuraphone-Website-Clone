import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    z-index: 100000;
    display: flex;
    height: 660px;
    align-items: center;
`;

export const HeroImage = styled.div`
    background-image: url("https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/60e5343de0e9245d15aa85e6_Home_TG_6234_Desktop.jpg");
    height: 660px;
    background-size: cover;
    background-position: 50% 50%;
    /* Position absolute makes it so the guy stays in the same spot kinda, compare to real site to see the difference */
    position: absolute;
    /* Top: 55px is the height of the navbar so the header image isn't behind it, may be a better fix */
    top: 55px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1000;
`;

export const HeroHeader = styled.div`
    max-width: 430px;
    text-align: center;
    font-size: 3rem;

    .hero-heading {
        font-size: 6.2rem;
        font-weight: 300;
        line-height: 74px;
        margin: 0;

        strong {
            font-size: 6.2rem;
            font-weight: 600;
        }
    }

    .hero-description {
        font-size: 2.8rem;
        line-height: 36px;
    }

    .ctc-btn:link,
    .ctc-btn:visited {
        text-decoration: none;
        font-size: 1.8rem;
        background-color: #0f6bff;
        color: #fff;
        padding: 9px 20px;
        line-height: 24px;
        border-radius: 50px;
        cursor: pointer;
    }


    .ctc-btn:active,
    .ctc-btn:hover {
        
    }
`;