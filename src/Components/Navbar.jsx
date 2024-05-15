// Importing Components
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  return (
    // Creating navbar and also routing it
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold fs-4 nav_content" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold fs-4 nav_content" to="/users">Users</NavLink>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/create" className="nav-link text-white fw-bold fs-4 nav_content">Add Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
