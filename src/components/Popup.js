// import libraries
import React, { Component } from "react";

// import stylesheets
import "../stylesheets/popup.css";

class Popup extends Component {
  render() {
    return (
      <div className="popup" id="popupBackground">
        <div className="popup__inner">
          <p className="popup__close" id="popupCloseBtn">
            X
          </p>
          <div className="popup__content">
            <h3 className="popup__header">{this.props.popup}</h3>
            <div className="header__underline" />
            {/* Phone popup content */}
            {this.props.popup === "Phone" && (
              <div>
                <h5 className="popup__subheader">
                  Here is My Main Phone Number (I have Whatsapp on it). Don't hesitate to Give me a Call or send me a message. 
                </h5>
                <h1 className="popup__main">+221781263286</h1>
              </div>
            )}
            {/* Email popup content */}
            {this.props.popup === "Email" && (
              <div>
                <h5 className="popup__subheader">
                  Email me anytime, I will get back to you as soon as possible.
                </h5>
                <h1 className="popup__main__email">ahmedcheikhsidahmed@gmail.com</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
