import styled from "styled-components";
import {
    BOLD_FONT_WEIGHT,
    BOX_SHADOW,
    WHITE_COLOR,
} from "../../styles/StyledVariables";

export const HeaderContainer = styled.div`
    height: 80px;
    min-height: 80px;
    width: 100%;
    background-color: ${WHITE_COLOR};
    box-shadow: ${BOX_SHADOW};
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

export const HeaderTitle = styled.h1`
    font-weight: ${BOLD_FONT_WEIGHT};
`;
