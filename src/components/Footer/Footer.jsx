import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="para">
          <p> &copy; Kevin Frontend - All rights reserved</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faFacebookF} className="icons" />
          <FontAwesomeIcon icon={faInstagram} className="icons" />
          <FontAwesomeIcon icon={faTwitter} className="icons" />
          <FontAwesomeIcon icon={faYoutube} className="icons" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
