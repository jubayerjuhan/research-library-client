import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const UserAuthChecker = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state?.user);

  if (user) return <div>{children}</div>;
  return <Navigate to={"/login"} state={{ from: location.pathname }} />;
};

export default UserAuthChecker;
