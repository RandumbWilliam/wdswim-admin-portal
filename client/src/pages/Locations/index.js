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
import { CustomTable, CustomButton } from "./StyledLocations";
import { useDispatch } from "react-redux";
import { addLocations, getLocations } from "../../actions/locations";
import { getCampus } from "../../actions/campus";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const activeStatus = [
    { text: "Active", value: "A" },
    { text: "Inactive", value: "Z" },
];
const campus = [
    { text: 1, value: "A" },
    { text: 2, value: "Z" },
];

const initialState = {
    campusId: "",
    locationName: "",
    address: "",
    mapURL: "",
    activeStatus: ""
};

const Locations = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const locationsData = useSelector((state) => state.locations);
    const campusData = useSelector((state) => state.campus);

    console.log(campusData)
    
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
        dispatch(addLocations(formData, navigate));
        setOpen(false);
    };

    useEffect(() => { 
        dispatch(getLocations(), getCampus());
    }, []);

    return (
        <PageContainer>
            <Container>
                <CustomButton onClick={handleOpenModal}>Add Locations</CustomButton>
                {locationsData ? (
                    <CustomTable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    Campus
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Location
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Address
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Map URL
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
                                        {item.campusName}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.locationName}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.address}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.mapURL}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.activeStatus}
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
                <Header content="Add Locations" />
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Select
                                required
                                fluid
                                name="campusId"
                                label="Campus"
                                onChange={handleChange}
                                options={locationsData}
                                defaultValue={formData.stat}
                            />
                            <Form.Input
                                required
                                fluid
                                name="locationName"
                                label="Location"
                                placeholder="Location"
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="address"
                                label="Address"
                                placeholder="Address"
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                fluid
                                name="mapUrl"
                                label="MapURL"
                                placeholder="MapURL"
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

export default Locations;
