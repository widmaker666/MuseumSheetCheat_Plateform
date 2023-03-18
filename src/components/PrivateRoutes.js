import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoutes = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  if (
    currentUser == null ||
    currentUser.uid === "" ||
    currentUser.uid === null ||
    currentUser.uid === undefined
  ) {     
    return  <Navigate to="/login" />;
  } else{
      return  currentUser === currentUser ||
      currentUser.uid === currentUser.uid ? <Outlet /> : <Navigate to="/login" />;
    }
};

export default PrivateRoutes;
