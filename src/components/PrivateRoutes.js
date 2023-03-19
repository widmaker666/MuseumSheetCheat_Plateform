import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoutes = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  if (
    currentUser == null ||
    currentUser.accessToken === "" ||
    currentUser.accessToken === null ||
    currentUser.accessToken === undefined
  ) {
    return <Navigate to="/login" />;
  } else {
    return currentUser === currentUser ||
      currentUser.accessToken === currentUser.accessToken ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default PrivateRoutes;
