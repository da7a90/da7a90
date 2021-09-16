// IMPORT LIBRARIES
import React, { Component } from "react";

// IMPORT COMPONENTS
import Landing from "./Landing";

// IMPORT STYLESHEETS
import "../stylesheets/Home.css";

// IMPORT IMAGES
import layer_3 from "../images/parallax/layer_3.svg";
import layer_4 from "../images/parallax/layer_4.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  // Waits for all images to be loaded, then fades cover out
  imageLoaded(imageName) {
    this.setState(prevState => ({
      images: [...prevState.images, imageName]
    }));
  }

  render() {
    return (
      <div>
        {/* Cover (fades out once all images are loaded) */}
        <div
          className={
            this.state.images.length === 6
              ? "landingImagesLoaded"
              : "landingImagesLoading"
          }
        />
        {/* Background layer */}
        <div className="parallax__layer parallax__layer__1">
          {/* Landing Container (name, title and clouds) */}
          <Landing imageLoaded={this.imageLoaded} />
        </div>


        {/* Second closest Mountains layer */}
        <div className="parallax__layer parallax__layer__5">
          <img
            src={layer_3}
            height="455px"
            width="3000px"
            className="parallax__img"
            alt="mountains"
            onLoad={() => this.imageLoaded("layer3")}
          />
        </div>
        {/* closest Mountains layer */}
        <div className="parallax__layer beforecover">
          <img
            src={layer_4}
            height="455px"
            width="3000px"
            className="parallax__img"
            alt="mountains"
            onLoad={() => this.imageLoaded("layer4")}
          />
        </div>

      </div>
    );
  }
}

export default Home;
