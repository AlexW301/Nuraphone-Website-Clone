import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 876px;
    padding: 120px 0 200px;
    background-color: #191919;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .nurablog {
        color: #074dff;
        font-size: 3rem;
        width: 1420px;
        padding: 0 228px;
    }

    .slider-btns {
        display: flex;
        margin-top: 100px;
        gap: 20px;
    }

    .slider-btns button {
        color: #fff;
        display: inline-block;
        cursor: pointer;
        padding: 4px;
        width: auto;
        border: none;
        border-radius: 50%;
        background-color: rgba(255,255,255,.4);
    }

    .slider-btns button:focus {
        background-color: #fff;
    }
`;

export const Content = styled.div`
    width: 1420px;
    height: 480px;
    margin: 0 351.5px;
    padding: 0 40px;
    display: flex;
    gap: 2000px;
    position: relative;
   
    transition: transform ease-out 1500ms;
    transform: translateX(0px);
`;

export const BlogPost = styled.div`
    min-width: 1420px;
    max-width: 1420px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 160px;
    

    img {
        height: 480px;
        width: 480px;
        object-fit: cover;
    }

    .pic-one {
        height: 480px;
        width: 480px;
        object-fit: cover;
    }

    .pic-two {
        height: 480px;
        width: 480px;
        object-fit: cover;
    }

    .slide {
        transition: transform ease-out .5s;
    }

    .post-content {
        width: 405px;
        height: 459.19px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .post-heading {
        font-size: 4.1rem;
        line-height: 56px;
        font-weight: 500;
        color: #fff;
        margin: 20px 0 30px;
    }

    .post-para {
        font-size: 2.4rem;
        line-height: 36px;
        margin: 0 0 60px;
        color: #fff;
    }

    .link:link,
    .link:visited { 
        width: fit-content;
        font-size: 1.8rem;
        text-decoration: none;
        border-bottom: 1px solid #fff;
        color: #fff;
    }

`;