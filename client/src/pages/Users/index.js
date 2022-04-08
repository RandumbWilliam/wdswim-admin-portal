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
    }, [dispatch]);

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
                                        {item.user_name}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.status_id}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.account_lvl}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.created_by}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.created_on}
                                    </CustomTable.Cell>
                                </CustomTable.Row>
                            ))}
                        </CustomTable.Body>
                    </CustomTable>
                ) : (
                    <div>No Accounts</div>
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
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Input
                                fluid
                                name="firstName"
                                label="First name"
                                placeholder="First Name"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="lastName"
                                label="Last name"
                                placeholder="Last Name"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Input
                            fluid
                            name="email"
                            label="Email"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <Form.Input
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
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="red" onClick={() => setOpen(false)}>
                        <Icon name="remove" /> No
                    </Button>
                    <Button color="green" onClick={handleSubmit}>
                        <Icon name="checkmark" /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        </PageContainer>
    );
};

export default Users;
