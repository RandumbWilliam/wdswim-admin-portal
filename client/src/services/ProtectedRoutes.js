import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

const ProtectedRoutes = () => {
  const authenticated = true;
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
