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
    const quote4 = useRef(null);
    const quote5 = useRef(null);
    

    // When quote is changed
    useEffect(() => {
        if (currentQuote === 1) {
            if (direction === 'forward') {
                quote1.current.classList.add('active');
                quote2.current.classList.remove('active');
                quote5.current.classList.remove('active');
                quote2.current.classList.remove('active-back');
                quote5.current.classList.remove('active-back');
            } else {
                quote1.current.classList.add('active-back');
                quote2.current.classList.remove('active');
                quote2.current.classList.remove('active-back');
            }
        }

        if (currentQuote === 2) {
            if (direction === 'forward') {
                quote2.current.classList.add('active');
                quote1.current.classList.remove('active');
                quote1.current.classList.remove('active-back');
            } else {
                quote2.current.classList.add('active-back');
                quote3.current.classList.remove('active');
                quote3.current.classList.remove('active-back');
            }
        }

        if (currentQuote === 3) {
            if (direction === 'forward') {
                quote3.current.classList.add('active');
                quote2.current.classList.remove('active');
                quote2.current.classList.remove('active-back');
            } else {
                quote3.current.classList.add('active-back');
                quote4.current.classList.remove('active');
                quote4.current.classList.remove('active-back');
            }
        }

        if (currentQuote === 4) {
            if (direction === 'forward') {
                quote4.current.classList.add('active');
                quote3.current.classList.remove('active');
                quote3.current.classList.remove('active-back');
            } else {
                quote4.current.classList.add('active-back');
                quote5.current.classList.remove('active');
                quote5.current.classList.remove('active-back');
            }
        }

        if (currentQuote === 5) {
            if (direction === 'forward') {
                quote5.current.classList.add('active');
                quote4.current.classList.remove('active');
                quote4.current.classList.remove('active-back');
            } else {
                quote5.current.classList.add('active-back');
                quote1.current.classList.remove('active');
                quote1.current.classList.remove('active-back');
            }
        }
    }, [currentQuote, direction])

    // Functions for arrow buttons
    const goBack = () => {
        if (currentQuote > 1) {
        updateCurrentQuote(currentQuote - 1);
        updateDirection('back')
        } else {
            updateCurrentQuote(5);
            updateDirection('back')
            
        }
    }

    const goForward = () => {
        if (currentQuote < 5) {
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
                <Quote ref={quote1} className="quote active">
                    <p className="quote-content">"You're listening to a record you've loved all your life and finding something new!"</p>
                    <p className="author">Pos (De La Soul)</p>
                </Quote>

                <Quote ref={quote2} className="quote">
                    <p className="quote-content">"This is some alien technology!"</p>
                    <p className="author">Mayer Hawthorne</p>
                </Quote>

                <Quote ref={quote3} className="quote">
                    <p className="quote-content">"A revolutionary kind of headphone"</p>
                    <img className="forbes-img" src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5de1f40059d27bec0c1e54e4_logo-Forbes.png" alt="logo"/>
                </Quote>

                <Quote ref={quote4} className="quote">
                    <p className="quote-content">"Their customized audio reigns supreme"</p>
                    <img className="wired-img" src="https://www.nuraphone.com/cdn-global/5b2c8a9fa49e8e2d4604e60b/5eba0ee2cea17e33ad9d6917_Logo_Wired.png" alt="logo"/>
                </Quote>

                <Quote ref={quote5} className="quote">
                    <p className="quote-content">"I'm hearing more vocals than I've ever heard before!"</p>
                    <p className="author">Mia Gladstone</p>
                </Quote>
                <button onClick={() => goForward()} type="button"><img src={ChevronForward} alt="back-btn"/></button>
            </Content>
        </Wrapper>
    )
}

export default QuotesSection;