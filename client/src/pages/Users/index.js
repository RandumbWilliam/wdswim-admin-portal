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
import { CustomTable, CustomButton } from "./StyledUsers";
import { useDispatch } from "react-redux";
import { addAdminAccount, getAdminAccount } from "../../actions/users";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../helpers/auth";

const status = [
    { text: "Active", value: "A" },
    { text: "Blocked", value: "Z" },
];

const levels = [
    { text: "Noob", value: "0" },
    { text: "God", value: "1" },
];

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    stat: status[0].value,
    level: levels[0].value,
    createdBy: isAuthenticated().email,
};


const Users = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const adminData = useSelector((state) => state.users);
    
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
        dispatch(addAdminAccount(formData, navigate));
        setOpen(false);
    };
    
    useEffect(() => {
        dispatch(getAdminAccount());
    }, []);

    return (
        <PageContainer>
            <Container>
                <CustomButton onClick={handleOpenModal}>Add Admin</CustomButton>
                {adminData ? (
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
                            {adminData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        {item.email}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.status}
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
                    <div>No Data</div>
                )}
            </Container>
            <Modal
                style={{ top: "10%" }}
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
            >
                <Header content="Add Admin Account" />
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                required
                                fluid
                                name="firstName"
                                label="First name"
                                placeholder="First Name"
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="lastName"
                                label="Last name"
                                placeholder="Last Name"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Input
                            required
                            fluid
                            name="email"
                            label="Email"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <Form.Input
                            required
                            fluid
                            name="password"
                            label="Password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <Form.Group widths="equal">
                            <Form.Select
                                fluid
                                name="stat"
                                label="Status"
                                onChange={handleChange}
                                options={status}
                                defaultValue={formData.stat}
                            />
                            <Form.Select
                                fluid
                                name="level"
                                label="Account Level"
                                options={levels}
                                onChange={handleChange}
                                defaultValue={formData.level}
                            />
                        </Form.Group>
                        <Form.Button content='Submit'  />
                    </Form>
                </Modal.Content>
            </Modal>
        </PageContainer>
    );
    
};

export default Users;
