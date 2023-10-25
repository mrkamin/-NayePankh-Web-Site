import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Varaible';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg position-fixed w-100">
    <div className="container-fluid">
      <NavLink to="/" className="navbar-brand">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
          <li className="nav-item">
            <NavLink
              to="/"
              exact
              className="nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/aboutus" className="nav-link" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/ourcertificate"
              className="nav-link"
              activeClassName="active"
            >
              Our Certificates
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/newspaper"
              className="nav-link"
              activeClassName="active"
            >
              NewsPaper-Recognition
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/donate" className="nav-link" activeClassName="active">
              Donate
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
