import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";

const ProtectedRoutes = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
