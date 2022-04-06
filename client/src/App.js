import React, { Fragment } from "react";
import { AppContainer, ContentContainer } from "./styles/StyledElements";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./styles/StyledGlobal";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoutes from "./services/ProtectedRoutes";

const App = () => {
    const authenticated = JSON.parse(localStorage.getItem("profile"));

    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        exact
                        element={
                            !authenticated ? <Login /> : <Navigate to="/" />
                        }
                    />
                    <Route element={<ProtectedRoutes />}>
                        <Route
                            path="/*"
                            element={
                                <AppContainer>
                                    <Navbar />
                                    <ContentContainer>
                                        <Header />
                                        <Routes>
                                            <Route
                                                path="/"
                                                exact
                                                element={<Dashboard />}
                                            />
                                            <Route
                                                path="/admin"
                                                exact
                                                element={<Admin />}
                                            />
                                        </Routes>
                                    </ContentContainer>
                                </AppContainer>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};

export default App;
