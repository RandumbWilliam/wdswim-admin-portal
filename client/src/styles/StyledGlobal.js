import { createGlobalStyle } from "styled-components";
import { DEFAULT_FONT_WEIGHT } from "./StyledVariables";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    p {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: #000;
        &:hover {
            text-decoration: none;
            color: #000;
        }
    }
    
    .ui.dimmer {
        z-index: 9999 !important;
    }
`;

export default GlobalStyle;
