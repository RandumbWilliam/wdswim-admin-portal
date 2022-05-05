import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, SidebarFooter, SidebarHeader } from "@randumbwilliam/react-pro-sidebar";
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
import Logo from "../../assets/common/WDSwim From Justin.png";

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
                        <img src={Logo} width={collapsed? "50px" : "100px"} />
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
                    <CustomMenuItem>
                        <Link to="/students">Students List</Link>
                    </CustomMenuItem>
                </CustomSubMenu>
                <CustomSubMenu title="Classes" icon={<FaBook />}>
                    <CustomSubMenu title="Class Settings">
                        <CustomMenuItem>
                            <Link to="/seasons">Seasons</Link>
                        </CustomMenuItem>
                        <CustomMenuItem>
                            <Link to="/lessonType">Lesson Types</Link>
                        </CustomMenuItem>
                        <CustomMenuItem> 
                            <Link to="/discounts">Discounts</Link>
                        </CustomMenuItem>
                        <CustomMenuItem>
                            <Link to="/swimLevels">Swimming Levels</Link>
                        </CustomMenuItem>
                        <CustomMenuItem>
                            <Link to="/otherFees">Other Fees</Link>
                        </CustomMenuItem>
                    </CustomSubMenu>
                    <CustomMenuItem>Set Up Classes</CustomMenuItem>
                    <CustomMenuItem>
                        <Link to="/classes">Classes Management</Link>
                    </CustomMenuItem>
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
                    <CustomMenuItem>
                        <Link to="/campus">Campus</Link>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <Link to="/users">Users</Link>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <Link to="/locations">Locations</Link>
                    </CustomMenuItem>
                    <CustomMenuItem>Accouncements</CustomMenuItem>
                    <CustomMenuItem>Web Documents</CustomMenuItem>
                </CustomSubMenu>
            </Menu>
            <SidebarFooter>
                
            </SidebarFooter>
        </CustomProSidebar>
    );
};

export default Navbar;
