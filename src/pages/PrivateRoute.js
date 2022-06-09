import React from "react";
import { Navigate } from "react-router-dom";
import { useMainContext } from "../context/main-context";

const PrivateRoute = ({ children }) => {
  const { language } = useMainContext();

  return language.length === 0 ? <Navigate to="/dashboard" /> : children;
};

export default PrivateRoute;
