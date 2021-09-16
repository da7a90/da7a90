// IMPORT LIBRARIES
import React, { Component } from "react";

// IMPORT STYLESHEETS
import "../stylesheets/Contact.css";

// IMPORT COMPONENTS
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
          para="You can reach out to me through my E-mail address: sidbarrack@gmail.com my phone: +221781263286 or through linkedIn by clicking on the button below"
          button="Sid Barrack on LinkedIn"
          link="https://www.linkedin.com/in/sid-barrack-2496ba177/"
        />

      </div>
    );
  }
}

export default Contact;
