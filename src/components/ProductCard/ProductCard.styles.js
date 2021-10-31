import styled from "styled-components";

export const Wrapper = styled.div`
    height: 438px;
    width: 290px;
    padding: 0 20px;
    margin-bottom: 100px;

`;

export const ProductImage = styled.img`
    height: 250px;
    width: 250px;
`;

export const Content = styled.div`
    text-align: center;

    .product-heading {
        font-size: 3.2rem;
        font-weight: 400;
        margin-bottom: 0;
        margin-top: 32px;


        strong {
            font-size: 3.2rem;
            font-weight: 600;
        }
    }

    .product-description {
        font-size: 1.6rem;
        margin-top: 12px;
        margin-bottom: 12px;
        color: #666666;
    }

    .learn-more-btn {
        text-decoration: none;
        font-size: 1.6rem;
        background-color: transparent;
        color: #0f6bff;
        border: 1px solid #0f6bff;
        padding: 11px 25px;
        line-height: 18px;
        border-radius: 50px;
        display: inline-block;
        margin-top: 15px;
    }

    .learn-more-btn:hover {
        background-color: rgb(15, 107, 255, 0.08);
    }
`;
