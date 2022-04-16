import React from "react";
import { HeaderContainer, HeaderTitle } from "./StyledHeader";
import { useLocation } from "react-router-dom";
import { URLS } from "../../constants/urls";
import { isAuthenticated } from "../../helpers/auth";

const Header = () => {
    const location = useLocation();

    const header = URLS.find((el) => el.url === location.pathname)?.text;

    return (
        <HeaderContainer>
            <HeaderTitle>{header} {isAuthenticated().firstName} </HeaderTitle>
            
        </HeaderContainer>
    );
};

export default Header;
