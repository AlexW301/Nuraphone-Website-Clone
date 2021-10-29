import styled from "styled-components";

export const Wrapper = styled.div`
    height: 1263.84px;
    width: 100%;
    background-color: #F8F8F8;
    padding: 70px;
`;

export const ContentWrapper = styled.div`
    height: 1123.84px;
    width: 100%;
    background-color: #fff;
`;

export const Content = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 40px 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .heading {
        font-size: 6rem;
        color: #191919;
        font-weight: 400;
        line-height: 66px;
        text-align: center;
        letter-spacing: -1px;
        margin: 40px 0 30px 0;
    }

    .desc-1 {
        color: #191919;
        font-size: 2.8rem;
        font-weight: 100;
        width: 67%;
        text-align: center;
        line-height: 36px;
        letter-spacing: -.002em;
        margin: 10px auto 50px auto;
    }

    .desc-2 {
        color: #191919;
        font-size: 2.8rem;
        font-weight: 100;
        width: 67%;
        text-align: center;
        line-height: 36px;
        letter-spacing: -.002em;
        margin: 10px auto 20px auto;
    }

    .looped-video {
        position: static;
        background-image: url('https://cdn.nuraphone.com/webflow/videos/Hearing-Profile-Animation.jpg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 588.84px;
        width: 100%;
        display: inline-block;
        margin-bottom: 40px;
    }

    .learn-more:link,
    .learn-more:visited {
        text-decoration: none;
        color: #3D4246;
        font-size: 1.8rem;
        border-bottom: 1px solid;
    }

    .learn-more:hover,
    .learn-more:active {

    }
`;