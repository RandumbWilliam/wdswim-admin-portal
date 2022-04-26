import React from "react";
import { HeaderContainer, HeaderTitle, HeaderProfile } from "./StyledHeader";
import { Navigate, useLocation } from "react-router-dom";
import { URLS } from "../../constants/urls";
import { isAuthenticated } from "../../helpers/auth";
import { FaUserAlt } from "react-icons/fa";
import { Dropdown } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../constants/actionTypes";

const options = [
    { key: "profile", text: "Profile" },
    { key: "settings", text: "Settings" },
    { key: "logout", text: "Logout" },
];

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const header = URLS.find((el) => el.url === location.pathname)?.text;

    const handleDropdown = (value) => {
        switch (value) {
            case "profile":
                break;
            case "settings":
                break;
            case "logout":
                dispatch({ type: LOGOUT });
                navigate("/login");
                break;
        }
    };

    return (
        <HeaderContainer>
            <HeaderTitle>{header}</HeaderTitle>
            <Dropdown
                style={{ marginLeft: "auto" }}
                pointing="top right"
                icon={null}
                trigger={
                    <HeaderProfile>
                        <FaUserAlt />
                    </HeaderProfile>
                }
            >
                <Dropdown.Menu>
                    {options.map((item, index) => (
                        <Dropdown.Item
                            key={index}
                            value={item.key}
                            text={item.text}
                            onClick={() => handleDropdown(item.key)}
                        />
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </HeaderContainer>
    );
};

export default Header;
