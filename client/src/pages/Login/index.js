import React, { useState, useEffect } from "react";
import {
    Heading,
    StyledForm,
    StyledFormField,
    StyledGraphicColumn,
    StyledGrid,
    StyledLoginInput,
    StyledSignInButton,
    StyledTextColumn,
    Wrapper,
} from "./StyledLogin";
import { PageContainer } from "../../styles/StyledElements";
import LoginPic from "../../assets/Abstract.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { REMOVE_ERROR } from "../../constants/actionTypes";
import { isAuthenticated } from "../../helpers/auth";

const initialState = {
    email: "",
    password: "",
};

const Login = () => {
    const [formData, setFormData] = useState(initialState);
    const { authData, isLoading, isError, message } = useSelector(
        (state) => state.auth
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (authData?.message) {
            removeError();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData, navigate));
    };

    const removeError = () => {
        dispatch({ type: REMOVE_ERROR });
    };

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <PageContainer>
            <Wrapper>
                <StyledGrid columns={2}>
                    <StyledGraphicColumn>
                        <img src={LoginPic} />
                    </StyledGraphicColumn>
                    <StyledTextColumn textAlign="center">
                        <>
                            <Heading>Log In</Heading>
                            <StyledForm onSubmit={handleSubmit}>
                                <StyledFormField>
                                    <StyledLoginInput
                                        name="email"
                                        type="text"
                                        width={16}
                                        onChange={handleChange}
                                        value={formData.email}
                                        placeholder="Email"
                                    />
                                    <StyledLoginInput
                                        name="password"
                                        type="password"
                                        width={16}
                                        onChange={handleChange}
                                        value={formData.password}
                                        placeholder="Password"
                                    />
                                    {isLoading ? (
                                        <StyledSignInButton
                                            content="Log In"
                                            primary
                                            loading
                                            disabled
                                        />
                                    ) : (
                                        <StyledSignInButton
                                            content="Log In"
                                            type="submit"
                                            primary
                                            disabled={
                                                !formData.email ||
                                                !formData.password
                                                    ? true
                                                    : false
                                            }
                                        />
                                    )}
                                    {isError && (
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                                paddingTop: "1rem",
                                                color: "red",
                                            }}
                                        >
                                            {message}
                                        </p>
                                    )}
                                </StyledFormField>
                            </StyledForm>
                        </>
                    </StyledTextColumn>
                </StyledGrid>
            </Wrapper>
        </PageContainer>
    );
};

export default Login;
