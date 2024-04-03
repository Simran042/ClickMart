import React from 'react'
import Layout from '../components/layout/Layout'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <Layout title={"Page not found"}>
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="text-center">
              <h1 className="display-4">404</h1>
              <p className="lead">Page Not Found!!</p>
              <p>The page you are looking for does not exist.</p>
              <Button variant="primary" as={Link} to="/">
                Go Back to Homepage
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PageNotFound
