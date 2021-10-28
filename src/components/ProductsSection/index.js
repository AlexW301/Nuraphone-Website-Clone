import React from "react";
//Styles
import { Wrapper, Content, ProductsGrid } from "./ProductsSection.styles";
//Components
import ProductCard from "../ProductCard";

const ProductsSection = () => {
    return (
        <Wrapper>
            <Content>
                <h2 className="products-heading">Explore our product range</h2>
                <ProductsGrid>
                    <ProductCard
                    image="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/61398cbb3144e584172a34c5_nurabuds-512w-75.jpg"
                    name="buds"
                    desc="Our smallest and most affordable earbuds"
                    link="#" 
                    />

                    <ProductCard
                    image="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/612887fbf310b304a86a5870_nuratrue-case-512w-81.jpg"
                    name="true"
                    desc="Earbuds with our award winning personalized sound"
                    link="#" 
                    />

                    <ProductCard
                    image="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/61272d1c88551c8a16bc51f8_nuraphone-512w-81-p-500.jpeg"
                    name="phone"
                    desc="An immersive listening experince like no other"
                    link="#" 
                    />

                    <ProductCard
                    image="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/61272d27361b99ca5f6eddce_nuraloop-512w-81-p-500.jpeg"
                    name="loop"
                    desc="16-hour battery life and analog cable support"
                    link="#" 
                    />
                </ProductsGrid>
            </Content>
        </Wrapper>
    )
}

export default ProductsSection;