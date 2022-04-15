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
                                    Location
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Lesson Type
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    # Students
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Start Date
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Start Time
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {classesData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        {item.locationId}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.lessonTypeId}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.numStudents}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.startDate && item.startDate.substring(0,10)}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.startTime}
                                    </CustomTable.Cell>
                                </CustomTable.Row>
                            ))}
                        </CustomTable.Body>
                    </CustomTable>
                ) : (
                    <div>No Data</div>
                )}
            </Container>
        </PageContainer>
    );
    
};

export default Classes;
