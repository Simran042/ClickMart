import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location= useLocation();
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleNewPasswordChange = (e) => {
      setNewPassword(e.target.value);
    };
    const handleAnswerChange = (e) => {
        setAnswer(e.target.value);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
          email: email,
          newPassword: newPassword,
          answer: answer
        };
        console.log(formData);
        try {
          const res = await axios.post(
            `${process.env.react_app_api}/api/v1/auth/forgot-password`,
            formData
          );
          console.log(formData);
          if (res.data.success) {
            toast.success(res.data.message);
            setTimeout(() => {
              navigate('/login');
            }, 2000); // 2000 milliseconds delay
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      };
      
  return (
    <Layout title= {"Forgot Password"}>
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
              type="text"
              placeholder="Your First Pet's name"
              value={answer}
              onChange={handleAnswerChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
            />
          </Form.Group>
          <div className="m-3 d-flex align-items-center justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button></div>
          
        </Form>
      </Container>
    </Layout>
  )
}

export default ForgotPassword
