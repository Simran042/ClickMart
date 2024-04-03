import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const SpinnerPage = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location= useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => {
        // Ensure to return the updated value
        return prevValue - 1; // Decrement the count
      });
    }, 1000);

    // Redirect when count reaches 0
    if (count === 0) {
      navigate('/login', {
        state: location.pathname
      });
    }

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [count, navigate, location]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h1>Redirecting you in {count} seconds...</h1>
    </div>
  );
};

export default SpinnerPage;
