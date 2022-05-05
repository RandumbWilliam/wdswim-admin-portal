import React, { useEffect, useState } from "react";
import {
    Form,

} from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getOneAccountHolder } from "../../../../actions/accountHolders";


const initialState = {
    contactName: "",
    email: "",
    phoneNumber: "",
    emergencyContact: "",
    emergenctPhone: "",
};

const Profile = () => {

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState(initialState);
    const [currentAccount, setCurrentAccount] = useState(location.state.accountId);
    const accountHoldersData = useSelector((state) => state.accountHolders);
    
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch();
    };


    useEffect(() => { 
        dispatch(getOneAccountHolder(location.state.accountId), navigate);
    }, []);

    return (
        <> 
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
                <Form.Button content='Update'  />
            </Form>
        </>
    );
    
};

export default Profile;
