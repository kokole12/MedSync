import React from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <div>
      <div className="NavBar">
        <div>
          <h1 class="Nav-title">MedSync</h1>
        </div>
        <div>
          <ul>
            <li>
            <Link className="link" to='/'>
              Home
            </Link>
            </li>
            <li>
              <Link className="link" to='/Services'>
              Services
              </Link>
            </li>
            <li>
            <Link className="link" to='/About'>
            About
            </Link>
            </li>
            <li>
            <Link className="link" to='/Doctors'>
            Doctors
            </Link>
            </li>
            <li>
            <Link className="link" to='/Login'>
            Login
            </Link>
            </li>
            <li className="SignUp">
            <Link className="link" to='/Register'>
            <p className="signupP">SignUp</p>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
