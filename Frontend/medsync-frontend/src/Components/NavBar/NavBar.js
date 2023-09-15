import React from "react";

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li className="SignUp">
              <a href="#" class="signup">
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
