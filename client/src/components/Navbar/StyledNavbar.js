import styled from "styled-components";
import {
    ProSidebar,
    MenuItem,
    SubMenu,
} from "@randumbwilliam/react-pro-sidebar";
import { WHITE_COLOR, PRIMARY_COLOR } from "../../styles/StyledVariables";

export const CustomProSidebar = styled(ProSidebar)`
    &&&& {
        color: ${WHITE_COLOR};

        a {
            color: ${WHITE_COLOR};
        }

        .pro-sidebar-inner {
            background: ${PRIMARY_COLOR};
    }
`;

export const CustomMenuItem = styled(MenuItem)`
    .pro-icon {
        animation: none !important;
    }
`;

export const CustomSubMenu = styled(SubMenu)`
    .pro-icon {
        animation: none !important;
    }

    .pro-arrow {
        border-color: ${WHITE_COLOR} !important;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 0;
`;
