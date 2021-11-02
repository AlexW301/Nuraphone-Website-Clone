import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: 'Atkiv Grotesk', 'Arial', 'sans-serif';
        font-size: 62.5%;
    }

    html {
        overflow-x: hidden;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        position: relative;
    }
`;