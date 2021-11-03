import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    z-index: -100000;
    display: flex;
    height: 660px;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const HeroImage = styled.div`
    background-image: url("https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/60e5343de0e9245d15aa85e6_Home_TG_6234_Desktop.jpg");
    height: 660px;
    background-size: cover;
    background-position: 50% 50%;
    /* Position absolute makes it so the guy stays in the same spot kinda, compare to real site to see the difference */
    position: absolute;
    /* Top: 55px is the height of the navbar so the header image isn't behind it, may be a better fix */
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1000;

    @media screen and (max-width: 991px) {
        background-position: 70% 50%;
        background-size: cover;
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        bottom: 0;
        height: 660px;
        z-index: -1000;
    }

    @media screen and (max-width: 765px) {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/60e5343f47014d9d654fa0d7_Home_TG_6234_Mobile.jpg");
        background-position: 50% 30%;
    }

`;

export const HeroHeader = styled.div`
    max-width: 480px;
    text-align: center;
    font-size: 3rem;
    transform: translate(-80%);


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

    @media screen and (max-width: 991px) {
        transform: translateX(-50%);

        .hero-heading {
            font-size: 5.2rem;

            strong {
                font-size: 5.2rem;
            }
        }

        .hero-description {
            font-size: 1.8rem;
            width: 300px;
            line-height: 24px;
            margin: 23px 0 24px 0;
        }
    }

    @media screen and (max-width: 1120px) {
        transform: translateX(-68%);
    }

    @media screen and (max-width: 765px) {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translate(-50%);
        max-width: 640px;
        width: 100%;

        .hero-heading {
            color: #fff;
            font-size: 4rem;
            line-height: 40px;

            strong {
                font-size: 4rem;
            }
        }

        .hero-description {
            color: #fff;
            width: 100%;
            padding: 0 5px;
        }
    }
`;