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
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../actions/auth";
import { REMOVE_ERROR } from "../../constants/actionTypes";

const initialState = {
    email: "",
    password: "",
};

const Login = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const authData = useSelector((state) => state.auth.authData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (authData?.message) removeError();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(login(formData, navigate));
    };

    const removeError = () => {
        dispatch({ type: REMOVE_ERROR });
    };

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
                                    <StyledSignInButton
                                        content="Log In"
                                        type="submit"
                                        primary
                                    />
                                    {/* {loading ? (
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
                                        />
                                    )} */}
                                    {authData?.message && (
                                        <p style={{ color: "red" }}>
                                            {authData?.message}
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
