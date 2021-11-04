import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    .content-link:link,
    .content-link:visited {
        text-decoration: none;
        color: #000;
    }

    .content-link:hover,
    .content-link:active {
        opacity: .8;

        .product-heading,
        .product-description {
            opacity: .8;
        }
    }
`;

export const Content = styled.div`

    .products-heading {
        font-size: 3.4rem;
        font-weight: 400;
        line-height: 34px;
        color: #000;
        text-align: center;
        margin-top: 70px;
        margin-bottom: 50px;
    }

    .right-btn,
    .left-btn {
        display: none;
    }

    .right-svg,
    .left-svg {
        display: none;
    }

    @media screen and (max-width: 490px) {
        position: relative;

        .right-btn {
            display: block;
            position: absolute;
            bottom: 50%;
            right: 0;
            transform: translate(-15%, -50%);

            padding: 1rem;
            background-color: transparent;
            border: none;
        }

        .right-svg,
        .left-svg {
            display: inline-block;
            height: 24px;
            width: auto;
        }

        .left-btn {
            display: block;
            position: absolute;
            bottom: 50%;
            left: 0;
            transform: translate(15%, -50%);
            z-index: 1;

            padding: 1rem;
            background-color: transparent;
            border: none;
        }
    }
`;

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    transform: translate(0%);

    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 490px) {
        grid-template-columns: repeat(4, 100%);
        transition: transform .6s ease-out;
    }
`;