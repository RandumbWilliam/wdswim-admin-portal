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
import { CustomTable, CustomButton } from "./StyledSwimLevels";
import { useDispatch } from "react-redux";
import { addSwimLevels, getSwimLevels } from "../../../../actions/classSettings/swimLevels";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const activeStatus = [
    { text: "Active", value: "A" },
    { text: "Inactive", value: "Z" },
];

const initialState = {
    name: "",
    status: "",
    displayOrder: ""
};

const SwimLevels = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const swimLevelsData = useSelector((state) => state.swimLevels);
    
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
        dispatch(addSwimLevels(formData, navigate));
        setOpen(false);
    };

    useEffect(() => { 
        dispatch(getSwimLevels());
    }, []);

    return (
        <PageContainer>
            <Container>
                <CustomButton onClick={handleOpenModal}>Add Swim Levels</CustomButton>
                {swimLevelsData ? (
                    <CustomTable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    Swim Level
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Status
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {swimLevelsData.map((item, index) => (
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
                    <div>No Swim Levels</div>
                )}
            </Container>
            <Modal
                style={{ top: "10%" }}
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
            >
                <Header content="Add Swim Levels" />
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                required
                                fluid
                                name="name"
                                label="Swim Level Names"
                                placeholder="SwimLevel"
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="displayOrder"
                                label="Display Order"
                                placeholder="DisplayOrder"
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

export default SwimLevels;
