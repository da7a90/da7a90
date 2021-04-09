// IMPORT LIBRARIES
import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMPORT STYLESHEETS
import "../stylesheets/Footer.css";

// IMPORT IMAGES
import LogoPNG from "../images/logo.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <div className="footerInner container">
          <Link to="" className="footer__link">
            <img
              src={LogoPNG}
              className="footer__logo"
              alt="logo"
              onClick={() => this.props.scrollToPosition(0)}
            />
          </Link>
          <p className="footer__copyright">Sidahmed Ahmed Cheikh ©2021</p>
        </div>
      </div>
    );
  }
}

export default Footer;
