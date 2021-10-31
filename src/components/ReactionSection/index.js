import React from "react";
//Styles
import { Wrapper, Content } from "./ReactionSection.styles";

const ReactionSection = () => {

    return (
        <Wrapper>
            <Content>
            <iframe className="video" title="Reactions Video" class="vimeoplayer" id="reactionsvideo" src="https://player.vimeo.com/video/417510978?title=0&amp;loop=1&amp;muted=1&amp;byline=0&amp;portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-ready="true"></iframe>
            </Content>
        </Wrapper>
    )
}

export default ReactionSection;