import React, { useEffect, useState } from "react";
import {
    Container,
    Modal,
    Button,
    Icon,
    Header,
    Form,
    Label,
} from "semantic-ui-react";
import { PageContainer } from "../../../styles/StyledElements";
import { CustomTable, CustomButton } from "./StyledAccountHolders";
import { useDispatch } from "react-redux";
import { addAccountHolders, getAccountHolder, getOneAccountHolder } from "../../../actions/accountHolders";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown } from "../../../components/Form";

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

const studentInitalState = {
    accountHolderId: "",
    firstName: "",
    lastName: ""
};

const gender = [
    { text: "Male", value: "male" },
    { text: "Female", value: "female" },
];


const AccountHolders = () => {
    const [studentsOpen, setStudentsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [studentFormData, setStudentFormData] = useState(studentInitalState);
    const [currentAccountHolder, setCurrentAccountHolder] = useState("");
    const accountHoldersData = useSelector((state) => state.accountHolders);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleOpenModalAccountHodlers = () => {
        setOpen(true);
    };

    const handleOpenModalStudents = (accountId, accountName) => {
        setStudentsOpen(true);
        setStudentFormData({ ...studentFormData, accountHolderId: accountId });
        setCurrentAccountHolder(accountName);
    };
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleStudentChange = (e) => {
        setStudentFormData({ ...studentFormData, [e.target.name]: e.target.value });
    };

    const handleStudentSubmit = (e) => {
        console.log(studentFormData)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAccountHolders(formData, navigate));
        setOpen(false);
    };
    
    useEffect(() => { 
        dispatch(getAccountHolder(), getOneAccountHolder());
    }, []);

    return (
        <PageContainer>
            <Container>
                <CustomButton onClick={handleOpenModalAccountHodlers}>Add Account Holders</CustomButton>
                {accountHoldersData ? (
                    <CustomTable unstackable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>

                                </CustomTable.HeaderCell>
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
                                    Address 1
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
                                        <CustomButton 
                                            onClick={() => {handleOpenModalStudents(item.id, item.contactName)}}>
                                            Add Student 
                                        </CustomButton> 
                                    </CustomTable.Cell>
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
                                        {item.address1}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.dateCreated && item.dateCreated.substring(0,10)}
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
                open={studentsOpen}
                onClose={() => setStudentsOpen(false)}
            >
                <Header>Add students to <strong>{currentAccountHolder}</strong></Header>
                <Modal.Content>
                    <Form onSubmit={handleStudentSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                required
                                fluid
                                name="firstName"
                                label="First Name"
                                placeholder="First Name"
                                onChange={handleStudentChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="lastName"
                                label="Last Name"
                                placeholder="Last Name"
                                onChange={handleStudentChange}
                            />
                            <Dropdown
                                options={gender}
                                text="text"
                                value="value"
                                name="gender"
                                label="Gender"
                                onChange={handleStudentChange}
                                defaultValue={gender[0]["value"]}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                fluid
                                name="allergies"
                                label="Allergies"
                                placeholder="Allergies"
                                onChange={handleStudentChange}
                            />
                            <Form.Input
                                fluid
                                name="allergiesActions"
                                label="Allergies Actions"
                                placeholder="Allergies Actions"
                                onChange={handleStudentChange}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                fluid
                                name="notes"
                                label="Notes"
                                placeholder="Notes"
                                onChange={handleStudentChange}
                            />
                        </Form.Group>
                        <Form.Button content='Submit'  />
                    </Form>
                </Modal.Content>
            </Modal>


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
                                label="Emergency Phone #"
                                placeholder="Emergency Phone #"
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
