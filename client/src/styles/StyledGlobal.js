import { createGlobalStyle } from "styled-components";
import { DEFAULT_FONT_WEIGHT } from "./StyledVariables";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        font-weight: ${DEFAULT_FONT_WEIGHT};
        font-size: 62.5%;
        width: 100%;
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
`;

export default GlobalStyle;
