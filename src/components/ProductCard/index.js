/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//Styles
import { Wrapper, Content, ProductImage } from "./ProductCard.styles";

const ProductCard = ({image, name, desc, link}) => {
    return (
        <Wrapper>
            <a href={link} className="content-link">
            <ProductImage src={image} />
            <Content>
                <h3 className="product-heading"><strong>nura</strong>{name}</h3>
                <p className="product-description">{desc}</p>
                <a href={link} className="learn-more-btn">Learn more</a>
            </Content>
            </a>
        </Wrapper>
    )
}

export default ProductCard;