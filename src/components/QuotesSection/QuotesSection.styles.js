import styled from "styled-components";

export const Wrapper = styled.div`
    height: 426px;
    background-color: #191919;
    padding: 100px 0 110px;
`;

export const Content = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 auto;
    max-width: 65%;

    button {
        height: 40px;
        width: 40px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;

        img {
            
        }
    }

    .quote {
        display: none;
    }

    .active {
        display: block;
        animation: slide .3s;

        @keyframes slide {
            0% { opacity: 0; -webkit-transform: translateX(-100%); }   
            100% { opacity: 1; -webkit-transform: translateX(0); }
        }
    }
`;

export const Quote = styled.div`
    .quote-content {
        font-size: 5rem;
        color: #FFFFFF;
        text-align: center;
        margin: 0 0 40px;
        width: 1000px;
    }

    .author {
        font-size: 2.8rem;
        color: #FFFFFF;
        text-align: center;
        margin: 0;
    }
`;