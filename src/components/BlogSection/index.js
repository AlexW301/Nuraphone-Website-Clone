import React from "react";
//Styles
import {Wrapper, Content, BlogPost} from "./BlogSection.styles";

const BlogSection = () => {
    return (
        <Wrapper>
            <Content>
                <BlogPost>
                <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b0b830faef5f37baa9e8_blog-movie-p-500.png" alt="blog"/>
                </BlogPost>

                <BlogPost className="slide">
                <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b43f3c234b554925edf6_blog-cool.png" alt="blog"/>
                </BlogPost>

                <BlogPost>
                <img src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5f59b0b830faef5f37baa9e8_blog-movie-p-500.png" alt="blog"/>
                </BlogPost>
            </Content>
        </Wrapper>
    )
}

export default BlogSection;