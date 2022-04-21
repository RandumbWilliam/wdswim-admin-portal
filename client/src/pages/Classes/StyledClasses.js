import styled from "styled-components";
import { Table, Button, Modal, Form, Dropdown } from "semantic-ui-react";
import DatePicker from "react-multi-date-picker";

export const CustomTable = styled(Table)``;

export const CustomButton = styled(Button)``;

export const CustomModal = styled(Modal)`
    &&&{
        top: 10%;
    }

`;


export const CustomForm = styled(Form)`
    top: 25%;
`;

export const CustomDatePicker = styled(DatePicker)`
    margin: 0 0 1em;
`;

export const CustomDropdown = styled(Dropdown)``;
