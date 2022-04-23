import React, { useEffect, useState } from "react";
import {
    Container,
    Modal,
    Button,
    Icon,
    Header,
    Form,
} from "semantic-ui-react";
import { PageContainer } from "../../../../styles/StyledElements";
import { CustomTable, CustomButton } from "./StyledLessonType";
import { useDispatch } from "react-redux";
import { addLessonType, getLessonType } from "../../../../actions/classSettings/lessonType";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const initialState = {
    name: "",
    status: ""
};

const Discounts = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const lessonTypeData = useSelector((state) => state.lessonType);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleOpenModal = () => {
        setOpen(true);
    };
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addLessonType(formData, navigate));
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getLessonType());
    }, []);

    return (
        <PageContainer>
            <Container>
                <CustomButton onClick={handleOpenModal}>Add Lesson Type</CustomButton>
                {lessonTypeData ? (
                    <CustomTable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    Lesson Type
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Status
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {lessonTypeData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        {item.name}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.status}
                                    </CustomTable.Cell>
                                </CustomTable.Row>
                            ))}
                        </CustomTable.Body>
                    </CustomTable>
                ) : (
                    <div>No Data</div>
                )}
            </Container>
            <Modal
                style={{ top: "10%" }}
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
            >
                <Header content="Add Lesson Type" />
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                required
                                fluid
                                name="name"
                                label="Lesson Type"
                                placeholder="Lesson Type"
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="displayOrder"
                                label="Display Order"
                                placeholder="Display Order"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Button content='Submit'  />
                    </Form>
                </Modal.Content>
            </Modal>
        </PageContainer>
    );
    
};

export default Discounts;
