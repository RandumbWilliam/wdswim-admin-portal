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



const Seasons = () => {
    const [open, setOpen] = useState(false);
    const seasonData = useSelector((state) => state.seasons);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getSeasons());
    }, []);

    return (
        <PageContainer>
            <Container>
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
            {/* <Modal
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
            </Modal> */}
        </PageContainer>
    );
    
};

export default Seasons;
