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
`;

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;