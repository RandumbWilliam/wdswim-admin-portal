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
import { CustomTable, CustomButton, CustomModal} from "./StyledClasses";
import { useDispatch } from "react-redux";
import { getClasses, addClasses} from "../../actions/classes";
import { getSeasons} from "../../actions/seasons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../helpers/auth";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { Dropdown } from "../../components/Form";

const instructors = [
    { text: "John", value: "John" },
    { text: "Richard", value: "Richard" },
];

const seasons = [
];

const initialState = {
    seasonId:"",
    numStudents:"",
    instructorId:"",
    lessonTypeId:"",
    swimLevelId:"",
    locationId:"",
};


const Classes = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const classesData = useSelector((state) => state.classes);
    const seasonsData = useSelector((state) => state.seasons);
    
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
        dispatch(addClasses(formData, navigate));
        setOpen(false);
    };

    // const pushSeasonData = (seasonData) => {
    //     seasonsData.forEach(e => {
    //         console.log("hit")
    //         seasons.push({text: e.seasonName, value: e.id})
    //     });
    // }
    
    useEffect(() => {
        dispatch(getClasses());
        dispatch(getSeasons());
    }, []);
    
    return (
        <>
        {seasonsData.length !== 0 && classesData.length !== 0 ? (
            <PageContainer>
            <Container>
                <CustomButton onClick={handleOpenModal}>Add Class</CustomButton>
                {classesData ? (
                    <CustomTable unstackable>
                        <CustomTable.Header>
                            <CustomTable.Row>
                                <CustomTable.HeaderCell>
                                    Location
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Lesson Type
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    # Students
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Start Date
                                </CustomTable.HeaderCell>
                                <CustomTable.HeaderCell>
                                    Start Time
                                </CustomTable.HeaderCell>
                            </CustomTable.Row>
                        </CustomTable.Header>
                        <CustomTable.Body>
                            {classesData.map((item, index) => (
                                <CustomTable.Row key={index}>
                                    <CustomTable.Cell>
                                        {item.locationId}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.lessonTypeId}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.numStudents}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.startDate && item.startDate.substring(0,10)}
                                    </CustomTable.Cell>
                                    <CustomTable.Cell>
                                        {item.startTime}
                                    </CustomTable.Cell>
                                </CustomTable.Row>
                            ))}
                        </CustomTable.Body>
                    </CustomTable>
                ) : (
                    <div>No Data</div>
                )}
            </Container>
            <CustomModal
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
            >
                <Header content="Add Admin Account" />
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Dropdown
                            options={seasonsData}   
                            text="seasonName"
                            value="id"
                            name="seasonId"
                            label="Season"
                            onChange={handleChange}
                            defaultValue={seasonsData[0]["id"]}
                        />
                        
                        <Form.Input
                            required
                            fluid
                            name="numStudents"
                            label="# Students"
                            placeholder="# Students"
                            onChange={handleChange}
                        />

                        <Form.Select
                            required
                            fluid
                            name="instructorId"
                            label="Instructor"
                            onChange={handleChange}
                            options={instructors}
                            defaultValue={formData.stat}
                        />

                        <Form.Select
                            required
                            fluid
                            name="lessonTypeId"
                            label="Lesson Type"
                            onChange={handleChange}
                            options={instructors}
                            defaultValue={formData.stat}
                        />

                        <Form.Select
                            required
                            fluid
                            name="swimLevelId"
                            label="Swim Level"
                            onChange={handleChange}
                            options={instructors}
                            defaultValue={formData.stat}
                        />

                        <Form.Select
                            required
                            fluid
                            name="locationId"
                            label="Location"
                            onChange={handleChange}
                            options={instructors}
                            defaultValue={formData.stat}
                        />

                        <DatePicker
                            style={{
                                padding: "1.2em 1em ",
                                marginBottom: "1em"
                              }}
                            format="MMMM DD YYYY"
                            sort
                            multiple
                            showOtherDays
                            title="Select Dates"
                            plugins={[
                                <DatePanel />
                            ]}
                        />
                        
                        <Form.Button content='Submit'  />
                    </Form>
                </Modal.Content>
            </CustomModal>
        </PageContainer>
        ) : (
            <div>Loading</div>
        )}
        </>
    );
    
};

export default Classes;
