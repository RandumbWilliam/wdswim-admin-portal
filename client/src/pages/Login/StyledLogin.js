import styled from "styled-components";
import {
    Button,
    Form,
    FormField,
    Grid,
    GridColumn,
    Input,
} from "semantic-ui-react";

export const Wrapper = styled.div`
    &&& {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const StyledGrid = styled(Grid)`
    &&& {
        width: 100%;
        height: 100%;
    }
`;

export const StyledGraphicColumn = styled(GridColumn)`
    &&&&& {
        padding: 0;
        background: #eaedfc;
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 767px) {
            display: none;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export const StyledTextColumn = styled(GridColumn)`
    &&&&& {
        padding: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const Heading = styled.h1`
    &&& {
        font-weight: 600;
        color: #243e63;
        font-size: 30px;
        margin-top: 48px;
    }
`;

export const StyledLoginInput = styled(Input)`
    &&& {
        margin-bottom: 20px;
    }
`;

export const StyledForm = styled(Form)`
    &&& {
        margin-top: 32px;
    }
`;

export const StyledFormField = styled(FormField)`
    &&& {
        width: 100%;
        flex: 1 1 0%;
        margin-left: auto;
        margin-right: auto;
        max-width: 320px;
    }
`;

export const StyledSignInButton = styled(Button)`
    &&& {
        width: 100%;
        max-width: 320px;
        letter-spacing: 0.025em;
        padding-block: 12px;
        border-radius: 10px;
        font-weight: 400;
    }
`;
