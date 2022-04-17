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
                    <CustomMenuItem>
                        <Link to="/accountHolders">Account Holder</Link>
                    </CustomMenuItem>
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
                    <CustomSubMenu title="Class Settings">
                        <CustomMenuItem>
                            <Link to="/lessonType">Lesson Types</Link>
                        </CustomMenuItem>
                        <CustomMenuItem>Pricing List</CustomMenuItem>
                        <CustomMenuItem> 
                            <Link to="/discounts">Discounts</Link>
                        </CustomMenuItem>
                        <CustomMenuItem>
                            <Link to="/otherFees">Other Fees</Link>
                        </CustomMenuItem>
                        <CustomMenuItem>
                            <Link to="/swimLevels">Swimming Levels</Link>
                        </CustomMenuItem>
                    </CustomSubMenu>
                    <CustomMenuItem>
                        <Link to="/seasons">Seasons</Link>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <Link to="/users">Users</Link>
                    </CustomMenuItem>
                    <CustomSubMenu title="General">
                        <CustomMenuItem>Camps</CustomMenuItem>
                        <CustomMenuItem>
                            <Link to="/locations">Locations</Link>
                        </CustomMenuItem>
                    </CustomSubMenu>
                    <CustomMenuItem>Accouncements</CustomMenuItem>
                    <CustomMenuItem>Web Documents</CustomMenuItem>
                </CustomSubMenu>
            </Menu>
        </CustomProSidebar>
    );
};

export default Navbar;
