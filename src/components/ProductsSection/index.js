import React, {useRef, useState} from "react";
//Styles
import { Wrapper, Content, ProductsGrid } from "./ProductsSection.styles";
//Components
import ProductCard from "../ProductCard";

const ProductsSection = () => {
    const productsGrid = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [needResize, setNeedResize] = useState(true);

    const moveSlide = (value, slide) => {
        productsGrid.current.style.transform = `translate(${value})`;
        setCurrentSlide(slide);
    }

    const moveRight = () => {
        if (currentSlide === 1) {
            moveSlide('-100%', 2);
        } else if (currentSlide === 2) {
            moveSlide('-200%', 3);
        } else if (currentSlide === 3) {
            moveSlide('-300%', 4);
        } else if (currentSlide === 4) {
            moveSlide('0%', 1);
        }
    }

    const moveLeft = () => {
        if (currentSlide === 1) {
            moveSlide('-300%', 4);
        } else if (currentSlide === 4) {
            moveSlide('-200%', 3);
        } else if (currentSlide === 3) {
            moveSlide('-100%', 2);
        } else if (currentSlide === 2) {
            moveSlide('0%', 1);
        }
    }

    // NEED TO FIX TRANSFORM/TRANSLATE ON RESIZE OF WINDOW GRID NOT SHOWING UP

    const onResize = () => {
        if(productsGrid.current.style.transform !== 'translate(0%)' && window.innerWidth > '490px') {
                productsGrid.current.style.transform = 'translate(0%)';
        }
    }

    window.addEventListener('resize', onResize)

    return (
        <Wrapper>
            <Content>
                <h2 className="products-heading">Explore our product range</h2>
                <button onClick={() => {moveLeft();}} className="left-btn"><svg className="left-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg></button>
                <ProductsGrid ref={productsGrid}>
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
                <button onClick={() => {moveRight();}} className="right-btn"><svg className="right-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="transparent" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/></svg></button>
            </Content>
        </Wrapper>
    )
}

export default ProductsSection;