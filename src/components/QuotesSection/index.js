import React, {useState, useEffect} from "react";
//Styles
import { Wrapper, Content, Quote } from "./QuotesSection.styles";
//Images
import ChevronBack from "../../images/chevron-back-outline.svg"
import ChevronForward from "../../images/chevron-forward-outline.svg"

const QuotesSection = () => {
    const [currentQuote, updateCurrentQuote] = useState(1);

    useEffect(() => {
        
    }, [currentQuote])

    return (
        <Wrapper>
            <Content>
                <button type="button"><img src={ChevronBack} alt="back-btn"/></button>
                <Quote className="quote-1">
                    <p className="quote">"You're listening to a record you've loved all your life and finding something new!"</p>
                    <p className="author">Pos (De La Soul)</p>
                </Quote>

                <Quote className="quote-2">
                    <p className="quote">"This is some alien technology!"</p>
                    <p className="author">Mayer Hawthorne</p>
                </Quote>
                <button type="button"><img src={ChevronForward} alt="back-btn"/></button>
            </Content>
        </Wrapper>
    )
}

export default QuotesSection;