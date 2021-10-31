import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 876px;
    padding: 120px 0 200px;
    background-color: #191919;
`;

export const Content = styled.div`
    width: 1120px;
    height: 480px;
    margin: 0 351.5px;
    padding: 0 40px;
    display: flex;
    overflow: hidden;
`;

export const BlogPost = styled.div`
    min-width: 1120px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    img {
        width: 500px;
    }

    .slide {
        transition: transform ease-out .5s;
        transform: translateX(-1120px);
    }
`;