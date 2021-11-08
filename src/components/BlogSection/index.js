/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef, useState, useEffect} from "react";
//Styles
import {Wrapper, Content, BlogPost} from "./BlogSection.styles";

const BlogSection = () => {
    const slideShow = useRef(null);
    const firstSlide = useRef(null);

    let vw = window.innerWidth;

    const changeSlide = (slide) => {
        if (vw > 1191) {
            slideShow.current.style.gap = `${vw-1420}px`;
        }
        slideShow.current.style.transform = `translateX(${slide}px)`;
    }

    return (
        <Wrapper>
            <p className="nurablog">Nura Blog</p>
            <Content ref={slideShow}>
                <BlogPost className="slide">
                <div className="post-content">
                    <h2 className="post-heading">Best Movie Soundtracks for Your Nuraphone</h2>
                    <p className="post-para">From Joker (2019) to Iron Man (2008) these film scores will sound amazing on your Nuraphone.</p>
                    <a className="link" href="#">Find Out More</a>
                </div>
                <img className="pic-one" src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b0b830faef5f37baa9e8_blog-movie-p-500.png" alt="blog"/>
                </BlogPost>

                <BlogPost  className="slide">
                <div className="post-content">
                    <h2 className="post-heading">How the Nuraphone Uses Music to Cool Your Ears</h2>
                    <p className="post-para">Did you know the Nuraphone has a 'music activated' cooling system? Find out how it works!</p>
                    <a className="link" href="#">Find Out More</a>
                </div>
                <img className="pic-two" src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b43f3c234b554925edf6_blog-cool.png" alt="blog"/>
                </BlogPost>

                <BlogPost className="slide">
                <div className="post-content">
                    <h2 className="post-heading">The History of Active Noise Cancellation</h2>
                    <p className="post-para">Have you ever wondered how active noise cancellation (ANC) was invented? Read on to find out.</p>
                    <a className="link" href="#">Find Out More</a>
                </div>
                <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b5259ccb436c9a62acdd_blog-anc-p-500.png" alt="blog"/>
                </BlogPost>

                <BlogPost className="slide">
                <div className="post-content">
                    <h2 className="post-heading">Nura Live From Home —daysormay</h2>
                    <p className="post-para">Interview with our featured artist, daysormay, about their music, projects and inspirations.</p>
                    <a className="link" href="#">Find Out More</a>
                </div>
                <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b5c1c0872f254e5bd544_blog-days.jpeg" alt="blog"/>
                </BlogPost>

                <BlogPost className="slide">
                <div className="post-content">
                    <h2 className="post-heading">Gaming Sound Design: Interview with Ben Lukas Boysen</h2>
                    <p className="post-para">We spoke to musician and sound designer Ben Lukas Boysen about the evolution of game soundtracks and some of his top picks.</p>
                    <a className="link" href="#">Find Out More</a>
                </div>
                <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b644c0872f4bcd5bd7d9_blog-game-p-1080.jpeg" alt="blog"/>
                </BlogPost>

                <BlogPost className="slide">
                <div className="post-content">
                    <h2 className="post-heading">Nura x Creators —Sabina McKenna</h2>
                    <p className="post-para">We talk to writer and curator Sabina McKenna for our Nura x Creators series.</p>
                    <a className="link" href="#">Find Out More</a>
                </div>
                <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b6b249a1604502e20c56_blog-sabina-p-500.jpeg" alt="blog"/>
                </BlogPost>
                
            </Content>
                <div className="slider-btns">
                    <button ref={firstSlide} onClick={() => {changeSlide(0)}}></button>
                    <button onClick={() => {changeSlide(-vw)}}></button>
                    <button onClick={() => {changeSlide(-vw*2)}}></button>
                    <button onClick={() => {changeSlide(-vw*3)}}></button>
                    <button onClick={() => {changeSlide(-vw*4)}}></button>
                    <button onClick={() => {changeSlide(-vw*5)}}></button>
                </div>
        </Wrapper>
    )
}

export default BlogSection;