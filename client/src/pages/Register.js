import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      password: password,
      address: address,
      phone: phone,
    };
    const res = await axios.post(
      `${process.env.react_app_api}/api/v1/auth/register`,
      formData
    );
    //console.log(formData);
    if (res.data.success) {
      toast.success(res.data.message, { duration: 2000 });
      navigate("/login");
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
        className="d-flex justify-content-center align-items-center"
        style={{ maxWidth: "1000px", minHeight: "73.5vh" }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </Form.Group>
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
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Your first pet's name?"
              value={answer}
              onChange={handleAnswerChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default Register;
