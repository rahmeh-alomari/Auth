import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from 'react'

function RequireAuth({ children }) {
    const { currentUser } = useAuth();
    const location = useLocation();
    if (!currentUser) {
      return <Navigate to="/login" state={{ path: location.pathname }} />;
    }
    return children;
}

export default RequireAuth
