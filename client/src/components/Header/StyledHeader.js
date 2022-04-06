import { Container } from "semantic-ui-react";
import styled from "styled-components";
import {
    BOLD_FONT_WEIGHT,
    BOX_SHADOW,
    WHITE_COLOR,
} from "../../styles/StyledVariables";

export const HeaderContainer = styled.header`
    height: 80px;
    min-height: 80px;
    background-color: ${WHITE_COLOR};
    box-shadow: ${BOX_SHADOW};
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 40px;
`;

export const HeaderTitle = styled.h1`
    font-weight: ${BOLD_FONT_WEIGHT};
`;
