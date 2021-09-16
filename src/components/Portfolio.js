import React, { Component } from "react";

// IMPORT STYLESHEETS
import "../stylesheets/Portfolio.css";


// IMPORT COMPONENTS
import Heading from "./Heading";

class PortHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  imageLoaded(imageName) {
    this.setState(prevState => ({
      images: [...prevState.images, imageName]
    }));
  }

  componentDidMount() {
    this.props.scrollToPosition(0);
  }

  render() {
    return (
      <div className="parallax__cover__portfolio">
        {/* ------ section header -----------*/}
        <Heading
          title="Projects"
          para="You can check out my github account through the link 
          below to see some of the projects I have worked on lately."
          button="Github"
          link="https://github.com/da7a90"
        />
      </div>
    );
  }
}

export default PortHeader;
