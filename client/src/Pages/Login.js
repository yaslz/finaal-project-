import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../JS/Actions/user";

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user));
    // navigate("/Profile");
  };
  return (
    <div>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter name"
        name="name"
        onChange={handleChange}
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Enter password..."
        name="password"
        onChange={handleChange}
      />
      <Button variant="primary" type="submit" onClick={handleUser}>
        Login
      </Button>
    </div>
  );
};

export default Login;

