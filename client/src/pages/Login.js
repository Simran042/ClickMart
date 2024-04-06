import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location= useLocation();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    const res = await axios.post(
      `${process.env.react_app_api}/api/v1/auth/login`,
      formData
    );
    //console.log(formData);
    if (res.data.success) {
      toast.success(res.data.message, { duration: 2000 });
      setAuth({
        ...auth,
        user: res.data.user,
        token: res.data.token,
      });
      localStorage.setItem("auth", JSON.stringify(res.data));
      setTimeout(()=>{
        navigate(location.state || "/");
      }, 2000)
      
    } else {
      toast.error(res.data.message, { duration: 2000 });
    }
    //toast.success("Successful submission")
    try {
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { duration: 2000 });
    }
  };

  return (
    <Layout>
      <Container
        className="d-flex fs-6 justify-content-center align-items-center"
        style={{ maxWidth: "600px", minHeight: "73.5vh" }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </Form.Group>
          <div className="m-3 d-flex align-items-center justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button></div>
          <div className="m-3 d-flex align-items-center justify-content-center">
            <Button variant="primary" onClick={()=>{navigate('/forgot-password')}}>
            Forgot Password
          </Button></div>
          
        </Form>
      </Container>
    </Layout>
  );
};

export default Login;
