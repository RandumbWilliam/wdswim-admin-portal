import React, { Fragment } from "react";
import { AppContainer, ContentContainer } from "./styles/StyledElements";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/StyledGlobal";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Login from "./pages/Login";
import ProtectedRoutes from "./services/ProtectedRoutes";
import Users from "./pages/Users";
import Classes from "./pages/Classes";
import Seasons from "./pages/Seasons";
import Discounts from "./pages/ClassSettings/Discounts";
import LessonType from "./pages/ClassSettings/LessonType";
import Locations from "./pages/Locations";

const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/login" exact element={<Login />} />
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
                                                path="/users"
                                                exact
                                                element={<Users />}
                                            />
                                            <Route
                                                path="/classes"
                                                exact
                                                element={<Classes />}
                                            />
                                            <Route
                                                path="/seasons"
                                                exact
                                                element={<Seasons />}
                                            />
                                            <Route
                                                path="/discounts"
                                                exact
                                                element={<Discounts />}
                                            />
                                            <Route
                                                path="/lessonType"
                                                exact
                                                element={<LessonType />}
                                            />
                                            <Route
                                                path="/locations"
                                                exact
                                                element={<Locations />}
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
