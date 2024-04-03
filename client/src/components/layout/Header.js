import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../favicon.ico";
import { useAuth } from "../../context/auth";
import toast, { Toaster } from 'react-hot-toast';
const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successful", { duration: 2000 });
  };
  return (
    <>
      <nav
        className="navbar sticky-top bg-dark navbar-expand-lg border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <img className="navimage" src={icon} alt="" />
          <NavLink to="/" className="navbar-brand">
            ECOMMERCE APP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/category" className="nav-link">
                  Category
                </NavLink>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Signup
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="nav-link"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item cart">
                <NavLink to="/cart" className="nav-link">
                  Cart [0]
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
