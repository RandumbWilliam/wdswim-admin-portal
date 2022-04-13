import React, { useEffect, useState } from "react";
import {
    Container,
    Modal,
    Button,
    Icon,
    Header,
    Form,
} from "semantic-ui-react";
import { PageContainer } from "../../styles/StyledElements";
import { CustomTable, CustomButton } from "./StyledClasses";
import { useDispatch } from "react-redux";
import { getClasses} from "../../actions/classes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../helpers/auth";

const initialState = {
};


const Classes = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const classesData = useSelector((state) => state.classes);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getClasses());
    }, []);


    return (
        <PageContainer>
            <Container>
                {classesData ? (
                    <CustomTable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    Email
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Status
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Account Level
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Created by
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Created On
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {classesData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        {item.seasonId}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.numStudents}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.level}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.createdBy}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.createdDate && item.createdDate.substring(0,10)}
                                    </CustomTable.Cell>
                                </CustomTable.Row>
                            ))}
                        </CustomTable.Body>
                    </CustomTable>
                ) : (
                    <div>No Accounts</div>
                )}
            </Container>
        </PageContainer>
    );
    
};

export default Classes;
