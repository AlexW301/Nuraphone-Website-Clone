import styled from "styled-components";

export const Wrapper = styled.div`
    height: 787.19px;
    width: 100%;
    padding: 80px 0;

    @media screen and (max-width: 1124px) {
        height: 500px;
    }

    @media screen and (max-width: 646px) {
        height: 400px;
    }
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    .video {
        height: 100%;
        padding: 0 40px;
        margin: 0 351.5px;
    }
`;