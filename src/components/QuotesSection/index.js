import React, {useState, useEffect, useRef} from "react";
//Styles
import { Wrapper, Content, Quote } from "./QuotesSection.styles";
//Images
import ChevronBack from "../../images/chevron-back-outline.svg"
import ChevronForward from "../../images/chevron-forward-outline.svg"

const QuotesSection = () => {
    //State
    const [currentQuote, updateCurrentQuote] = useState(1);
    const [direction, updateDirection] = useState('forward');

    // Userefs to select dom nodes
    const quote1 = useRef(null);
    const quote2 = useRef(null);
    const quote3 = useRef(null);

    // When quote is changed
    useEffect(() => {
        if (currentQuote === 1) {
            if (direction === 'forward') {
                quote1.current.classList.add('active');
                quote2.current.classList.remove('active');
                quote3.current.classList.remove('active');
            } else {
                quote1.current.classList.add('active');
                quote2.current.classList.remove('active');
            }
        }

        if (currentQuote === 2) {
            if (direction === 'forward') {
                quote2.current.classList.add('active');
                quote1.current.classList.remove('active');
            } else {
                quote2.current.classList.add('active');
                quote3.current.classList.remove('active');
            }
        }

        if (currentQuote === 3) {
            if (direction === 'forward') {
                quote3.current.classList.add('active');
                quote2.current.classList.remove('active');
            } else {
                quote3.current.classList.add('active');
                quote1.current.classList.remove('active');
            }
        }
    }, [currentQuote, direction])

    // Functions for arrow buttons
    const goBack = () => {
        if (currentQuote > 1) {
        updateCurrentQuote(currentQuote - 1);
        updateDirection('back')
        } else {
            updateCurrentQuote(3);
            updateDirection('back')
            
        }
    }

    const goForward = () => {
        if (currentQuote < 3) {
        updateCurrentQuote(currentQuote + 1);
        updateDirection('forward');
        } else {
            updateCurrentQuote(1)
            updateDirection('forward')
        }
    }

    return (
        <Wrapper>
            <Content>
                <button onClick={() => goBack()} type="button"><img src={ChevronBack} alt="back-btn"/></button>
                <Quote ref={quote1} className="quote 1 active">
                    <p className="quote-content">"You're listening to a record you've loved all your life and finding something new!"</p>
                    <p className="author">Pos (De La Soul)</p>
                </Quote>

                <Quote ref={quote2} className="quote 2">
                    <p className="quote-content">"This is some alien technology!"</p>
                    <p className="author">Mayer Hawthorne</p>
                </Quote>

                <Quote ref={quote3} className="quote 3">
                    <p className="quote-content">"A revolutionary kind of headphone"</p>
                    <p className="author">Forbes</p>
                </Quote>
                <button onClick={() => goForward()} type="button"><img src={ChevronForward} alt="back-btn"/></button>
            </Content>
        </Wrapper>
    )
}

export default QuotesSection;