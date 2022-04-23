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
import { CustomTable, CustomButton } from "./StyledOtherFees";
import { useDispatch } from "react-redux";
import { addOtherFees, getOtherFees } from "../../../../actions/classSettings/otherFees";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const initialState = {
    description: "",
    price: "",
    status: ""
};

const OtherFees = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const otherFeesData = useSelector((state) => state.otherFees);
    
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
        dispatch(addOtherFees(formData, navigate));
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getOtherFees());
    }, []);

    return (
        <PageContainer>
            <Container>
                <CustomButton onClick={handleOpenModal}>Add Other Fees</CustomButton>
                {otherFeesData ? (
                    <CustomTable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    Description
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Price
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Status
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {otherFeesData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        {item.description}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.price}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.status}
                                    </CustomTable.Cell>
                                </CustomTable.Row>
                            ))}
                        </CustomTable.Body>
                    </CustomTable>
                ) : (
                    <div>No Other Fees</div>
                )}
            </Container>
            <Modal
                style={{ top: "10%" }}
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
            >
                <Header content="Add Other Fees" />
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                required
                                fluid
                                name="description"
                                label="Description"
                                placeholder="Description"
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="price"
                                label="Price"
                                placeholder="Price"
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

export default OtherFees;
