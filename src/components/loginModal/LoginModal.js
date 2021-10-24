import React, { useState } from "react";
import { signup, login } from "../../apiRequests/databaseAPI";
import "./loginModal.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// setting intital state for the form
const initialState = {
  username: "",
  password: "",
  retypePassword: "",
  email: "",
  isSubmitting: false,
};
const initialLogin = {
  email: "",
  password: "",
};

const LoginModal = props => {
  const { loginVisible, setLoginVisible } = props;
  const [registerFormData, setRegisterFormData] = useState(initialState);
  const [loginFormData, setLoginFormData] = useState(initialLogin);
  const [showLogin, setShowLogin] = useState(false);

  const handleChange = event => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginChange = event => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = event => {
    event.preventDefault();
    login(loginFormData);
  };
  const handleSubmit = event => {
    event.preventDefault();
    signup(registerFormData).then(setLoginVisible(false));
  };
  console.log(registerFormData);
  return (
    <div className="overlay">
      <div className="modalContainer d-flex flex-column align-items-center justify-content-center">
        {showLogin ? (
          <>
            <h2 className="formHeader">Login</h2>
            <p>
              Don't Have an Account? Register
              <span
                className="showLogin"
                onClick={() => {
                  setShowLogin(!showLogin);
                  console.log(showLogin);
                }}>
                Here
              </span>
            </p>
            <Form onSubmit={handleLogin} className="formContainer">
              <Form.Group className=" w-100" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleLoginChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="w-100" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Login
              </Button>
            </Form>
          </>
        ) : (
          <>
            {" "}
            <h2 className="formHeader">Register</h2>
            <p>
              Already have an account? Sign in{" "}
              <span
                className="showLogin"
                onClick={() => {
                  setShowLogin(!showLogin);
                  console.log(showLogin);
                }}>
                Here
              </span>
            </p>
            <Form onSubmit={handleSubmit} className="formContainer">
              <Form.Group className="w-100">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Please enter a username, it must be unique.
                </Form.Text>
              </Form.Group>
              <Form.Group className=" w-100" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="w-100" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="w-100" controlId="formBasicPassword">
                <Form.Label>Retype Password</Form.Label>
                <Form.Control
                  type="password"
                  name="retypePassword"
                  placeholder="Retype Password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Register
              </Button>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
