import styled from "styled-components";
import {
    BOLD_FONT_WEIGHT,
    BOX_SHADOW,
    WHITE_COLOR,
} from "../../styles/StyledVariables";

export const HeaderContainer = styled.header`
    height: 80px;
    min-height: 80px;
    width: 100%;
    background-color: ${WHITE_COLOR};
    box-shadow: ${BOX_SHADOW};
    display: flex;
    align-items: center;
    padding: 0 50px;
    margin-bottom: 40px;
`;

export const HeaderTitle = styled.h1`
    font-weight: ${BOLD_FONT_WEIGHT};
    margin: 0;
`;

export const HeaderProfile = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50vh;
    background-color: #696969;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
`;
