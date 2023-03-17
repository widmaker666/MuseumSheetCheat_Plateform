import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoutes = () => {
  const { currentUser } = useContext(AuthContext);

  if (
    currentUser == null ||
    currentUser.accessToken === "" ||
    currentUser.accessToken === null ||
    currentUser.accessToken === undefined
  ) {
    let auth = { token: false };
    return auth.token ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let auth = { token: true };
    return auth.token ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
