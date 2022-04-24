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
import { CustomTable, CustomButton } from "./StyledDiscounts";
import { useDispatch } from "react-redux";
import { addDiscounts, getDiscounts } from "../../../../actions/classSettings/discounts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const status = [
    { text: "Active", value: "A" },
    { text: "Inactive", value: "Z" },
];

const levels = [
    { text: "Noob", value: "0" },
    { text: "God", value: "1" },
];

const initialState = {
    levelId: "",
    duration: "",
    price: ""
};

const Discounts = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const discountsData = useSelector((state) => state.discounts);
    
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
        dispatch(addDiscounts(formData, navigate));
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getDiscounts());
    }, []);

    return (
        <PageContainer>
            <Container>
                <CustomButton onClick={handleOpenModal}>Add Discounts</CustomButton>
                {discountsData ? (
                    <CustomTable unstackable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    Description
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Percentage
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Status
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {discountsData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        {item.description}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.percentage}
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
                <Header content="Add Discounts" />
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
                                name="percentage"
                                label="Percentage"
                                placeholder="Percentage"
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
