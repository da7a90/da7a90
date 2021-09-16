// IMPORT LIBRARIES
import React, { Component } from "react";

// IMPORT COMPONENTS
import Heading from "./Heading";

// IMPORT IMAGES
import ResumePDF from "../images/resume/resume-img.pdf";

// IMPORT STYLESHEETS

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.scrollToPosition(0);
  }

  render() {
    return (
      <div className="">
        <div className="parallax__cover__portfolio">
          <Heading
            title="Resume"
            para="Here is my resume that you can download in PDF format 
            by clicking on the button below."
            button="Download PDF"
            link={ResumePDF}
          />

        </div>
      </div>
    );
  }
}

export default Resume;
