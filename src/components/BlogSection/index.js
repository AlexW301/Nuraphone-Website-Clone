/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef} from "react";
//Styles
import {Wrapper, Content, BlogPost} from "./BlogSection.styles";

const BlogSection = () => {
    const slideShow = useRef(null);

    const changeSlide = (slide) => {
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
                <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b43f3c234b554925edf6_blog-cool.png" alt="blog"/>
                </BlogPost>

                <BlogPost className="slide">
                <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b5259ccb436c9a62acdd_blog-anc-p-500.png" alt="blog"/>
                </BlogPost>

                
            </Content>
                <div>
                    <ul>
                        <li><button onClick={() => {changeSlide(0)}}>.</button></li>
                        <li><button onClick={() => {changeSlide(-1720)}}>.</button></li>
                        <li><button onClick={() => {changeSlide(-3440)}}>.</button></li>
                    </ul>
                </div>
        </Wrapper>
    )
}

export default BlogSection;