import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <MDBFooter style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} className="bg-dark text-center text-white">
        <div
            className="text-center p-3 footer"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
            © 2020 Copyright: 
            <a className="text-white footer-links" href="https://mdbootstrap.com/">
            MDBootstrap.com
            </a>
            <p className="text-center mt-3">
            <Link className="text-white footer-links p-3" to="/about"> About </Link>
            |
            <Link className="text-white footer-links p-3" to="/contact"> Contact </Link>
            |
            <Link className="text-white footer-links p-3" to="/policy"> Privacy Policy </Link>
        </p>
        </div>
        
        </MDBFooter>
    </div>
  );
};

export default Footer;
