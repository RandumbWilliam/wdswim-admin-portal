import React, { useEffect, useState } from "react";
import {
    Container,
    Modal,
    Button,
    Icon,
    Header,
    Form,
} from "semantic-ui-react";
import { PageContainer } from "../../../styles/StyledElements";
import { CustomTable, CustomButton } from "./StyledStudents";
import { useDispatch } from "react-redux";
import { getStudents, addStudents } from "../../../actions/students";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    allergies: "",
    allergiesActions: "",
    notes: ""
};

const gender = [
    { text: "male", value: "male" },
    { text: "female", value: "female" },
];


const Students = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const studentsData = useSelector((state) => state.students);
    
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
        dispatch((formData, navigate));
        setOpen(false);
    };


    useEffect(() => { 
        dispatch(getStudents());
    }, []);

    return (
        <PageContainer>
            <Container>
                <CustomButton><Link to="/accountHolders">Add Students</Link></CustomButton>
                {studentsData ? (
                    <CustomTable unstackable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    First Name
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Last Name
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Gender
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Date of Birth
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {studentsData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        {item.firstName}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.lastName}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.gender}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.dateOfBirth && item.dateOfBirth.substring(0,10)}
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
                <Header content="Add Account Holders" />
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                required
                                fluid
                                name="firstName"
                                label="First Name"
                                placeholder="First Name"
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="lastName"
                                label="Last Name"
                                placeholder="Last Name"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                fluid
                                name="allergies"
                                label="Allergies"
                                placeholder="Allergies"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="allergiesActions"
                                label="Allergies Actions"
                                placeholder="Allergies Actions"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            
                            <Form.Input
                                required
                                fluid
                                name="address2"
                                label="Address 2"
                                placeholder="Address 2"
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

export default Students;
