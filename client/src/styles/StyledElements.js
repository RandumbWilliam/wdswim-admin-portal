import styled from "styled-components";
import { Container } from "semantic-ui-react";
import { BOLD_FONT_WEIGHT, XXL_FONT_SIZE } from "./StyledVariables";

export const ContentContainer = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const AppContainer = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
`;

export const PageContainer = styled.div`
    display: flex;
    height: 100vh;
`;

export const Title = styled.h1`
    font-weight: ${BOLD_FONT_WEIGHT};
    font-size: ${XXL_FONT_SIZE};
`;
