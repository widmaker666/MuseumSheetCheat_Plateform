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
    /* let auth = { token: false }; */
    return <Navigate to="/login" />;
  } else {
    /*  let auth = { token: true }; */
    return <Outlet />;
  }
};

export default PrivateRoutes;
