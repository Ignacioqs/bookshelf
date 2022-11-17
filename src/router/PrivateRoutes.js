import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../Contexts/LoginContext";

const PrivateRoutes = () => {
  const ctx = useContext(LoginContext);
  let auth = ctx.isLoggedIn;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
