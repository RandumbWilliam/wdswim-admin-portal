import React, { useEffect, useState } from "react";
import {
    Container,
    Modal,
    Button,
    Icon,
    Header,
    Form,
    Dropdown,
} from "semantic-ui-react";
import { PageContainer } from "../../../styles/StyledElements";
import { CustomTable, CustomButton } from "./StyledLocations";
import { useDispatch } from "react-redux";
import { getCampus, addCampus } from "../../../actions/campus";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    FaPen
} from "react-icons/fa";


const initialState = {
    campusName: "",
};

const activeStatus = [
    {text: 'Active',value: 'A',},
    {text: 'Deactive', value: 'D',}
]

const Campuses = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const locationsData = useSelector((state) => state.locations);
    const campusData = useSelector((state) => state.campus);
    
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
        dispatch(addCampus(formData,navigate));
        setOpen(false);
    };

    useEffect(() => { 
        dispatch(getCampus());
    }, []);


    return (
        <PageContainer>
            <Container>
                <Dropdown
                    selection
                    fluid
                    defaultValue={activeStatus[0].value}
                    options={activeStatus}
                />
                
                {locationsData ? (
                    <CustomTable unstackable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Campus ID
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Campus Name
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Status
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {locationsData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        <CustomButton 
                                            /*onClick={}*/>
                                            <FaPen /> Edit 
                                        </CustomButton>
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.id}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.campusName}
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
                <CustomButton onClick={handleOpenModal}>Add Campus</CustomButton>
            </Container>
            <Modal
                style={{ top: "10%" }}
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
            >
                <Header content="Add Campus" />
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                required
                                fluid
                                name="campusName"
                                label="Campus Name"
                                placeholder="Campus Name"
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

export default Campuses;
