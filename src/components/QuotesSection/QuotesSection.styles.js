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
        height: 30px;
        width: 30px;
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
        animation: slideIn .3s ease-in;

        @keyframes slideIn {
            0% { opacity: 0; -webkit-transform: translateX(30%); }   
            100% { opacity: 1; -webkit-transform: translateX(0); }
        }
    }

    .active-back {
        display: block;
        animation: slideOut .3s ease-out;
        @keyframes slideOut {
            0% { opacity: 1; -webkit-transform: translateX(0); display: block;}   
            100% { opacity: 0; -webkit-transform: translateX(30%); display: block }
        }
    }
`;

export const Quote = styled.div`
    text-align: center;
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

    .forbes-img{
        height: 26.13px;
        width: 100px;
        margin: 0;
    }

    .wired-img {
        height: 29.13px;
        width: 130px;
    }
`;