import React from "react";
import { Navigate } from "react-router-dom";
import { useFilter } from "./FilterContext.jsx";

export default function ProtectedRoute({ children }) {
  const { user } = useFilter();

  if (!user) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }

  return children;
}