import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, SidebarHeader } from "@randumbwilliam/react-pro-sidebar";
import {
    CustomProSidebar,
    CustomMenuItem,
    CustomSubMenu,
    LogoContainer,
} from "./StyledNavbar";
import "@randumbwilliam/react-pro-sidebar/dist/css/styles.css";
import {
    FaBars,
    FaCalendarDay,
    FaSwimmer,
    FaBook,
    FaUsers,
    FaChartBar,
    FaCog,
} from "react-icons/fa";
import Logo from "../../assets/common/logo.png";

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const handleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <CustomProSidebar collapsed={collapsed}>
            <SidebarHeader>
                <LogoContainer>
                    <Link to="/">
                        <img src={Logo} width="50px" />
                    </Link>
                </LogoContainer>
            </SidebarHeader>
            <Menu>
                <CustomMenuItem icon={<FaBars />} onClick={handleCollapsed}>
                    WD Swim
                </CustomMenuItem>
                <CustomSubMenu title="Calendar" icon={<FaCalendarDay />}>
                    <CustomMenuItem>Schedule</CustomMenuItem>
                    <CustomMenuItem>Schedule Display</CustomMenuItem>
                </CustomSubMenu>
                <CustomSubMenu title="Customers" icon={<FaSwimmer />}>
                    <CustomMenuItem>Account Holder</CustomMenuItem>
                    <CustomMenuItem>Students</CustomMenuItem>
                </CustomSubMenu>
                <CustomSubMenu title="Classes" icon={<FaBook />}>
                    <CustomMenuItem>
                        <Link to="/classes">Classes</Link>
                    </CustomMenuItem>
                    <CustomMenuItem>Set Up Classes</CustomMenuItem>
                </CustomSubMenu>
                <CustomSubMenu title="Employees" icon={<FaUsers />}>
                    <CustomMenuItem>Employees</CustomMenuItem>
                    <CustomMenuItem>Work Schedule</CustomMenuItem>
                </CustomSubMenu>
                <CustomSubMenu title="Reports" icon={<FaChartBar />}>
                    <CustomMenuItem>Daily Income Report</CustomMenuItem>
                    <CustomMenuItem>Student Store Credit</CustomMenuItem>
                </CustomSubMenu>
                <CustomSubMenu title="Admin" icon={<FaCog />}>
                    <CustomSubMenu title="Camps">
                        <CustomMenuItem>Camps</CustomMenuItem>
                        <CustomMenuItem>Locations</CustomMenuItem>
                    </CustomSubMenu>
                    <CustomMenuItem>Swimming Levels</CustomMenuItem>
                    <CustomSubMenu title="Class Settings">
                        <CustomMenuItem>Lesson Types</CustomMenuItem>
                        <CustomMenuItem>Pricing List</CustomMenuItem>
                        <CustomMenuItem>Discounts</CustomMenuItem>
                        <CustomMenuItem>Other Fees</CustomMenuItem>
                    </CustomSubMenu>
                    <CustomMenuItem>
                        <Link to="/users">Users</Link>
                    </CustomMenuItem>
                    <CustomSubMenu title="General">
                        <CustomMenuItem>Camps</CustomMenuItem>
                        <CustomMenuItem>Locations</CustomMenuItem>
                    </CustomSubMenu>
                    <CustomMenuItem>Accouncements</CustomMenuItem>
                    <CustomMenuItem>Web Documents</CustomMenuItem>
                </CustomSubMenu>
            </Menu>
        </CustomProSidebar>
    );
};

export default Navbar;
