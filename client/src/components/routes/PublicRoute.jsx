/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);

  if (isAuthenticated && currentUser) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return children;
};

export default PublicRoute;
