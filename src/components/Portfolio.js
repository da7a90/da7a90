import React, { Component } from "react";

// IMPORT STYLESHEETS
import "../stylesheets/Portfolio.css";

// IMPORT IMAGES
import CospamasPNG from "../images/portfolio/cospamas.PNG";
import FreeacademyPNG from "../images/portfolio/freeacademy.PNG";
import PhaserPNG from "../images/portfolio/phaser.PNG";
import ShortestpPNG from "../images/portfolio/shortestp.PNG";

// IMPORT COMPONENTS
import Footer from "./Footer";
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
          title="Portfolio"
          para="My portfolio includes personal projects that I made for fun or to Improve my skills and professional projects that I have done for 
          clients and/or companies. I have many other projects at my Github page that
          you can also check out."
          button="GITHUB"
          link="https://github.com/da7a90"
        />

        {/* ------ section One -----------*/}
        <div className="container__outer lightBG">
          <div
            className={
              this.state.images.includes("picOne")
                ? "portfolio container portImgLoaded"
                : "portfolio container"
            }
          >
            <div>
              <div className="portfolio__textTop">
                <h1 className="portfolio__header">Cospamas</h1>
                <p className="portfolio__para">
                  consumables and spares stock management system that enables Field Engineers in over 1300 sites all over senegal to make requests for things like 
                  cables, generator fluid and also Télécom replacement spare pieces and has configurable reports that provide insight for management to facilitate decision making in terms of logistics.
                </p>
              </div>
              <div className="portfolio__tallLeft">
                <img
                  onLoad={() => this.imageLoaded("picOne")}
                  src={CospamasPNG}
                  className="portfolio__Img"
                  alt="Cospamas screenshot"
                />
              </div>

              <div className="portfolio__textBottom">
                <h2 className="portfolio__innerHeader">Technologies</h2>
                <p className="portfolio__para">
                  NodeJS, Express, Mongoose, MongoDB, HTML, CSS, Jquery, DataTables.
                </p>
                
            
              </div>
            </div>
          </div>
        </div>
        {/* ------ section Two -----------*/}
        <div className="container__outer portfolio__outer__dark">
          <div
            className={
              this.state.images.includes("picFour")
                ? "portfolio container portImgLoaded"
                : "portfolio container"
            }
          >
            <h1 className="portfolio__header portfolio__fullWidth">
              Free Academy
            </h1>
            <p className="portfolio__para portfolio__fullWidth">
              An E-learning platform for the sales workforce of Free au Sénégal.
            </p>
            <div className="portfolio__inner portfolio__innerMargin">
              <div className="portfolio__rightPanel portfolio__widePanel">
                <img
                  onLoad={() => this.imageLoaded("picFour")}
                  src={FreeacademyPNG}
                  className="portfolio__Img"
                  alt="Code snippets website screen shot"
                />
              </div>
              <div className="portfolio__textBottom__thinLeft">
                <h2 className="portfolio__innerHeader">Technologies</h2>
                <p className="portfolio__para">
                  HTML, CSS, Jquery, Moodle, PHP, MySQL.
                </p>
                
                <div className="portfolio__btnContainer">
                  <a
                    href="https://freeacademy.free.sn/cours"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn portfolio__btnOrange">
                      Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------ section Three -----------*/}
        <div className="container__outer portfolio__outer__light">
          <div
            className={
              this.state.images.includes("picThree")
                ? "portfolio container portImgLoaded"
                : "portfolio container"
            }
          >
            <h1 className="portfolio__header portfolio__fullWidth">
              Je t'adore
            </h1>
            <p className="portfolio__para portfolio__fullWidth">
              this is a simple platformer style game I made following the example in the Phaser.io website with a 
              cheeky portrayal of a landmark in Nouakchott, Mauritania where I'm originally from (if you recognize the head bouncing in the game its a pure coincidence... Maybe <span role="img" aria-label="emoji">&#128540;</span>).
            </p>
            <div className="portfolio__innerMargin">
              <div className="portfolio__leftPanel portfolio__widePanel">
                <img
                  onLoad={() => this.imageLoaded("picThree")}
                  src={PhaserPNG}
                  className="portfolio__Img"
                  alt="Spelling analyser website screen shot"
                />
              </div>
              <div className="portfolio__textBottom__thin">
                <h2 className="portfolio__innerHeader">Technologies</h2>
                <p className="portfolio__para">
                  Javascript, Phaser.io, Express, CSS, HTML.
                </p>
               
                <div className="portfolio__btnContainer">
                  <a
                    href="https://github.com/da7a90/phaserGame"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn">GITHUB</button>
                  </a>
                  <a
                    href="https://da7a90.github.io/phaserGame"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn portfolio__btnOrange">
                      Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------ section Four -----------*/}
        <div className="container__outer portfolio__outer__dark">
          <div
            className={
              this.state.images.includes("picTwo")
                ? "portfolio container portImgLoaded"
                : "portfolio container"
            }
          >
            <div className="portfolio__textTop__left">
              <h1 className="portfolio__header">Shortest path Visualizer</h1>
              <p className="portfolio__para">
                This is a fun visualization of the BFS algorithm for pathfinding.
              </p>
            </div>

            <div className="portfolio__tallRight">
              <img
                onLoad={() => this.imageLoaded("picTwo")}
                src={ShortestpPNG}
                className="portfolio__Img"
                alt="uproar web design website screen shot"
              />
            </div>
            <div className="portfolio__textBottom__left">
              <h2 className="portfolio__innerHeader">Technologies</h2>
              <p className="portfolio__para">
                React, Javascript, CSS, HTML.
              </p>
              
              <div className="portfolio__btnContainer">
                <a
                  href="https://github.com/da7a90/PathfinderVisualizer"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="portfolio__link"
                >
                  <button className="portfolio__btn">GITHUB</button>
                </a>
                <a
                  href="https://da7a90.github.io/PathfinderVisualizer/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="portfolio__link"
                >
                  <button className="portfolio__btn portfolio__btnOrange">
                    Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ------ section Footer -----------*/}
        <Footer scrollToPosition={this.props.scrollToPosition} />
      </div>
    );
  }
}

export default PortHeader;
