import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Layout from "../components/layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <Container className="mt-5">
        <Row>
          {/* Contact Information */}
          <Col md={6} className="mb-4">
            <h1 className="font-weight-bold mb-4">Get in Touch</h1>
            <p className="lead">
              Have any questions or inquiries? Don't hesitate to contact us:
            </p>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <strong> </strong> example@example.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <strong> </strong> 123-456-7890
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <strong></strong> 1234 Example St, City, Country
              </li>
            </ul>
          </Col>
          {/* Image */}
          <Col md={6} className="text-center">
            <Image
              src="https://www.echelonseniorliving.com/wp-content/uploads/2021/11/contactus.jpg"
              roundedCircle
              className="mb-4 shadow-lg"
              style={{width: "300px", height:"300px"}}
            />
            <p className="text-muted">
              Feel free to reach out to us using the information above.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Contact;
