import styled from "styled-components";

export const Wrapper = styled.div`
    height: 55px;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 99;
    display: block;
    border-bottom: 1px solid #f8f8f8;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1120px;
    margin: 0 auto;

    .company-logo {
        height: 28.8x;
        width: 60px;
    }

    .cart-icon {
        height: 38px;
        width: 38px;
    }

`;

export const NavBarWrapper = styled.div`
    ul {
        list-style: none;
        display: flex;
    }

    li {
        padding: 20px 10px;
        margin: 0 6.5px;
    }

    li:hover {
        opacity: .7;
    }

    a:link,
    a:visited {
        font-size: 1.6rem;
        text-decoration: none;
        color: #3d4246;
        font-weight: 300;
    }

    a span {
        font-size: 1.6rem;
        font-weight: 400;
        color: #000000;
    }

    .new-badge {
        font-size: 1rem;
        padding: 2px 6px;
        color: #fff;
        text-transform: uppercase;
        background-color: #0f6bff;
        border-radius: 38px;
        display: inline-block;
        transform: translate(0, -2px);
        line-height: 15px;
        font-weight: 700;
    }
`;

