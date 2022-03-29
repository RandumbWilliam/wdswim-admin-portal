import React, { Fragment } from "react";
import { AppContainer } from "./styles/StyledElements";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./styles/StyledGlobal";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <AppContainer>
                    <Navbar />
                    <Header />
                </AppContainer>
            </BrowserRouter>
        </Fragment>
    );
};

export default App;
