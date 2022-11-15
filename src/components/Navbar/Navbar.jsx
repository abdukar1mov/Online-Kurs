import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Logo from "../../images/Logo.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setFixed(true); //navbar 80 dan keyin fixed boladi
      } else {
        setFixed(false);
      }
    });
  });

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light" ${
        fixed && "fixedNav navbar-expand-lg navbar-light bg-light"
      }`}
    >
      <div class="container">
        <Link to="/">
          <img
            style={{ width: "50px" }}
            className="logo"
            src={Logo}
            alt="Logo_img"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <div className="texts">
              <ul>
                <HashLink smooth to="/#Home">
                  <li className="link">Home</li>
                </HashLink>
                <HashLink smooth to="/#Kurslar">
                  <li className="link">Kurslar</li>
                </HashLink>
                <HashLink smooth to="/#Ustozlar">
                  <li className="link">Ustozlar</li>
                </HashLink>
                <HashLink smooth to="/#Natija">
                  <li className="link">Natija</li>
                </HashLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
