import React from "react";
import "./footer.scss";
import logo from "../../images/Logo.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="display">
          <div className="logo">
            <img style={{width: "50px"}} src={logo} alt="Logo_" />
          </div>
          <div className="texts">
            <ul>
              <HashLink smooth to="/#BizKimmiz">
                <li>Biz kimmiz?</li>
              </HashLink>
              <HashLink smooth to="/#KursHaqida">
                <li>Kurs haqida</li>
              </HashLink>
              <HashLink smooth to="/#Natija">
                <li>Natija</li>
              </HashLink>
              <li>Aloqa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
