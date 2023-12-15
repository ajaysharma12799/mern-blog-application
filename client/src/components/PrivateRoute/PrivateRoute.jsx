/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../redux/features/auth/auth.slice";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    // API to Get User Info
    dispatch(getCurrentUser({ toast }));
  }, []);

  if (!isAuthenticated && !currentUser) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

export default PrivateRoute;
