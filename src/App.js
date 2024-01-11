import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateProfile from "./compnents/UpdateProfile";
import ForgotPassword from "./compnents/ForgotPassword";
import Login from "./compnents/Login";
import Signup from "./compnents/Signup";
import Dashboard from "./compnents/Dashboard";
import AuthProvider from "./context/AuthContext";
import RequireAuth from "./context/RequireAuth";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route path="/update-profile" element={ <RequireAuth><UpdateProfile /></RequireAuth>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
