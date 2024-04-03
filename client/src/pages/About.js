import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Layout from '../components/layout/Layout';

const About = () => {
  return (
    <Layout title={"About Us- Ecommerce App"}>
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-5 mt-4">
            <Image src="https://th.bing.com/th/id/OIP.eaa7x1UHUYXdh2LPcTlRygHaEk?rs=1&pid=ImgDetMain" roundedCircle style={{width: "400px", height:"400px"}} fluid />
          </Col>
          <Col md={6} className="mb-4">
            <h1 className="display-1 mb-4">About Us</h1>
            <p className="lead">
              Welcome to our online store! We are passionate about providing high-quality products to our customers and ensuring an exceptional shopping experience.
            </p>
            <p className="lead">
              At our store, you'll find a wide range of products including clothing, accessories, electronics, and more. We strive to offer the latest trends and best brands at competitive prices.
            </p>
            <p className="lead">
              Our team is dedicated to customer satisfaction, and we're here to assist you with any questions or concerns you may have. We value your feedback and continuously work to improve our services.
            </p>
          </Col>
          
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
