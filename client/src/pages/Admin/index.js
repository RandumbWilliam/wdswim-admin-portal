import React from "react";
import { Link } from "react-router-dom";
import { PageContainer, Title } from "../../styles/StyledElements";

const Admin = () => {
    return (
        <PageContainer>
            <Link to="/">
                <Title>Admin</Title>
            </Link>
        </PageContainer>
    );
};

export default Admin;
