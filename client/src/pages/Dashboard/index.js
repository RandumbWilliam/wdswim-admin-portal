import React from "react";
import { Link } from "react-router-dom";
import { PageContainer, Title } from "../../styles/StyledElements";

const Dashboard = () => {
    return (
        <PageContainer>
            <Link to="/admin">
                <Title>Dashboard</Title>
            </Link>
        </PageContainer>
    );
};

export default Dashboard;
