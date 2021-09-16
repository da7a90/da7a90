// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLESHEETS
import "../stylesheets/Heading.css";

// IMPORT IMAGES
import layer_4 from "../images/parallax/layer_4.svg";
import layer_3 from "../images/parallax/layer_3.svg";

const Heading = props => {
  return (
    <div>
    <div className="container__outer">
      <div className="container heading__container">
        <h1 className="heading__header" onClick={() => console.log(props)}>
          {props.title}
        </h1>
        <p className="heading__para">{props.para}</p>
        {props.button && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="heading__link"
          >
            <button className="heading__button">{props.button}</button>
          </a>
        )}
      </div>
    </div>
           {/* Second closest Mountains layer */}
           <div className="parallax__layer parallax__layer__5">
          <img
            src={layer_3}
            height="455px"
            width="3000px"
            className="parallax__img"
            alt="mountains"
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
          />
        </div>

    </div>
  );
};

export default Heading;
