/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//Styles
import { Wrapper, ContentWrapper, Content } from "./PersonalSoundSection.styles";

const PersonalSoundSection = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Content>
                    <h2 className="heading">Personalized sound</h2>
                    <p className="desc-1">Nura headphones are the first ever to automatically learn how you hear and adapt the sound to deliver a revolutionary experience.</p>
                    <video className="looped-video" autoPlay loop muted playsInline data-wf-ignore="true">
                        <source src="https://cdn.nuraphone.com/webflow/videos/Hearing-Profile-Animation.mp4" dat-wf-ignore="true"></source>
                    </video>
                    <p className="desc-2">Experience depth and detail like never before.</p>
                    <a className="learn-more" href="#">Learn more</a>
                </Content>
            </ContentWrapper>
        </Wrapper>
    )
}

export default PersonalSoundSection;