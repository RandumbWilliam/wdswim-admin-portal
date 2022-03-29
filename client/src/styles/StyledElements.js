import styled from "styled-components";
import { Container } from "semantic-ui-react";

const handleSectionHeight = (height) => {
    switch (height) {
        case "full":
            return "100vh";
        default:
            return "";
    }
};

export const Section = styled.section`
    height: ${({ height }) => handleSectionHeight(height)};
    min-height: 768px;
    display: flex;
    ${(props) =>
        props.center
            ? `justify-content: center;
            align-items: center;
            `
            : `padding: 120px 0;`}
`;

export const AppContainer = styled(Container)`
    height: 100vh;
    display: flex;
    position: relative;
`;
