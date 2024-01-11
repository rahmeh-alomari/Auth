import { React, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { signup } =  useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Firebase Configuration:", process.env.REACT_APP_FIREBASE_API_KEY);
  
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
  
    setError("");
    setLoading(true);
  
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      console.error("Failed to create an account", error.message);
      setError("Failed to create an account");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control id="email" type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password-confirm">
              Password Confirmation
            </Form.Label>
            <Form.Control
              id="password-confirm"
              type="password"
              ref={passwordConfirmRef}
              required
            />
          </Form.Group>
          <Button disabled={loading} className="w-100 mt-3" type="submit">
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Already have an account? <Link to="/login">Log In</Link>
    </div>
  </>
  );
}

export default Signup;
