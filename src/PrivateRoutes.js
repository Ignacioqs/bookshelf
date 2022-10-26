import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import myContext from "./Context";

const PrivateRoutes = () => {
  const ctx = useContext(myContext);
  let auth = ctx.isLoggedIn;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
