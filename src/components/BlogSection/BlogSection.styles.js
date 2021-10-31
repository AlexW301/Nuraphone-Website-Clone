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

    .nurablog {
        color: #074dff;
        font-size: 3rem;
        width: 1420px;
        padding: 0 225px;
    }

    div ul {
        display: flex;
    }

    div ul li button {
        color: #fff;
        font-size: 3rem;
    }
`;

export const Content = styled.div`
    width: 1420px;
    height: 480px;
    margin: 0 351.5px;
    padding: 0 40px;
    display: flex;
    gap: 300px;
    position: relative;
   
    transition: transform ease-out .5s;
    transform: translateX(-2240px);
    
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
        width: 500px;
    }

    .pic-one {
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
        font-size: 1.8rem;
        text-decoration: none;
        border-bottom: 1px solid #fff;
        color: #fff;
    }

`;