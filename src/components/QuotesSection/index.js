import React from "react";
//Styles
import { Wrapper, Content, Quote } from "./QuotesSection.styles";
//Images
import ChevronBack from "../../images/chevron-back-outline.svg"
import ChevronForward from "../../images/chevron-forward-outline.svg"

const QuotesSection = () => {
    return (
        <Wrapper>
            <Content>
                <button type="button"><img src={ChevronBack} alt="back-btn"/></button>
                <Quote>
                    <p className="quote">"You're listening to a record you've loved all your life and finding something new!"</p>
                    <p className="author">Pos (De La Soul)</p>
                </Quote>
                <button type="button"><img src={ChevronForward} alt="back-btn"/></button>
            </Content>
        </Wrapper>
    )
}

export default QuotesSection;