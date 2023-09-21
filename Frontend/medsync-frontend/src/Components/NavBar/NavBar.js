import React from "react";
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <div>
      <div className="NavBar" class="NavBar">
        <div>
          <h1 class="Nav-title">MedSync</h1>
        </div>
        <div>
          <ul>
            <li>
              <a href="../Landing/Landing.js">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="../Doctors/Doctors.js">Doctors</a>
            </li>
            <li>
              <a href="../Login/Login.js">Login</a>
            </li>
            <li className="SignUp">
              <a href="Register/Register.js" class="signup">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
