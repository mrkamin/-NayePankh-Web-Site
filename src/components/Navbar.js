import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Varaible';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="Logo" />
      </Link>
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
            <Link to="/home" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ourcertificate" className="nav-link">
              Our Certificates
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/newspaper" className="nav-link">
              NewsPaper-Recognition
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/donate" className="nav-link">
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;
