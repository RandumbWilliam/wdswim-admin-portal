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
import { CustomTable, CustomButton } from "./StyledSeasons";
import { getSeasons, addSeasons } from "../../actions/seasons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../helpers/auth";
import SemanticDatepicker from 'react-semantic-ui-datepickers';



const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    createdBy: isAuthenticated().email,
};


const Seasons = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const seasonData = useSelector((state) => state.seasons);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [currentDate, setNewDate] = useState(null);
    const onChange = (event, data) => setNewDate(data.value);

    const handleOpenModal = () => {
        setOpen(true);
    };
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSeasons(formData, navigate));
        setOpen(false);
    };
    
    useEffect(() => {
        dispatch(getSeasons());
    }, []);

    return (
        <PageContainer>
            <Container>
                <CustomButton onClick={handleOpenModal}>Add Season</CustomButton>
                {seasonData ? (
                    <CustomTable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    Season Name
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Start Date
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    End Date
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Notes
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {seasonData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        {item.seasonName}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.startDate && item.startDate.substring(0,10)}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.endDate && item.endDate.substring(0,10)}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.note ? "" : item.note}
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
                        <Form.Input
                                required
                                fluid
                                name="seasonName"
                                label="Season name"
                                placeholder="Season Name"
                                onChange={handleChange}
                        />
                        <Form.Group widths="equal">
                            
                            <SemanticDatepicker 
                                required
                                fluid
                                name="startDate"
                                label="Start date"
                                onChange={handleChange} 
                            />  
                            <SemanticDatepicker 
                                required
                                fluid
                                name="End Date"
                                label="End date"
                                onChange={handleChange} 
                            />  
                        </Form.Group>
                        
                        <Form.Input
                            required
                            fluid
                            name="note"
                            label="Note"
                            placeholder="Note"
                            onChange={handleChange}
                        />
                        
                        <Form.Button content='Submit'  />
                    </Form>
                </Modal.Content>
            </Modal>
        </PageContainer>
    );
    
};

export default Seasons;
