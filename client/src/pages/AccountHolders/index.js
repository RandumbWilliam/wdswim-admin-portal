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
import { CustomTable, CustomButton } from "./StyledAccountHolders";
import { useDispatch } from "react-redux";
import { addAccountHolders, getAccountHolder } from "../../actions/accountHolders";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const initialState = {
    contactName: "",
    email: "",
    phoneNumber: "",
    emergencyContact: "",
    emergenctPhone: "",
    contactName: "",
    email: "",
    phoneNumber: "",
    emergencyContact: "",
    emergenctPhone: "",
    emergencyContact: "",
    emergenctPhone: ""
};

const AccountHolders = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const accountHoldersData = useSelector((state) => state.accountHolders);
    
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
        dispatch(addAccountHolders(formData, navigate));
        setOpen(false);
    };

    useEffect(() => { 
        dispatch(getAccountHolder());
    }, []);

    return (
        <PageContainer>
            <Container>
                <CustomButton onClick={handleOpenModal}>Add Account Holders</CustomButton>
                {accountHoldersData ? (
                    <CustomTable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    Contact Name
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Email
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Phone Number
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Emegency Contact
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Emergency Phone
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Address 1
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Address 2
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    City
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Province
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Postal Code
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Date Created
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Notes
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {accountHoldersData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        {item.contactName}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.email}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.phoneNumber}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.emergencyContact}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.emergenctPhone}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.address1}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.address2}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.city}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.province}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.postalCode}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.dateCreated}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.notes}
                                    </CustomTable.Cell>
                                </CustomTable.Row>
                            ))}
                        </CustomTable.Body>
                    </CustomTable>
                ) : (
                    <div>No Account Holders</div>
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
                                name="contactName"
                                label="Contact Name"
                                placeholder="Contact Name"
                                onChange={handleChange}
                            />
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
                                name="phoneNumber"
                                label="Phone Number"
                                placeholder="Phone Number"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                fluid
                                name="emergencyContact"
                                label="Emergency Contact"
                                placeholder="Emergency Contact"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="emergencyPhone"
                                label="emergency Phone"
                                placeholder="emergency Phone"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                required
                                fluid
                                name="address1"
                                label="Address 1"
                                placeholder="Address 1"
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="address2"
                                label="Address 2"
                                placeholder="Address 2"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                required
                                fluid
                                name="city"
                                label="City"
                                placeholder="City"
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="province"
                                label="Province"
                                placeholder="Province"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                required
                                fluid
                                name="dateCreated"
                                label="Date Created"
                                placeholder="Date Created"
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="notes"
                                label="Notes"
                                placeholder="Notes"
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

export default AccountHolders;
