// IMPORT LIBRARIES
import React, { Component } from "react";

// IMPORT STYLESHEETS
import "../stylesheets/Contact.css";

// IMPORT COMPONENTS
import ContactSeg from "./ContactSeg";
import Footer from "./Footer";
import Heading from "./Heading";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="parallax__cover__contact">
        {/* Header */}
        <Heading
          title="Contact"
          para="For all your inquiries or if you just want to reach out you can fill the form below or reach out to me directly via my phone number or E-mail"
          button={false}
        />

        {/* Contact Form */}
        <div className="container__outer lightBG">
          <div className="container">
            <h1 className="contact__header">SEND MESSAGE</h1>
            <form
              action="https://formspree.io/f/mdoyopby"
              method="POST"
              className="contact__form"
            >
              <input
                name="name"
                type="text"
                placeholder="Name..."
                className="contact__name"
                autoComplete="foo"
              />
              <input
                name="email"
                type="text"
                placeholder="Email..."
                className="contact__email"
                autoComplete="foo"
              />
              <textarea
                name="message"
                type="text"
                rows="8"
                placeholder="Message..."
                className="contact__message"
              />
              <button type="submit" className="contact__submit">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Email and Phone Icons */}
        <ContactSeg
          showPopup={this.props.showPopup}
          closePopup={this.props.closePopup}
          header={false}
        />

        {/* Footer */}
        <Footer scrollToPosition={this.props.scrollToPosition} />
      </div>
    );
  }
}

export default Contact;
