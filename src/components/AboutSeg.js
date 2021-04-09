// IMPORT LIBRARIES
import React, { Component } from "react";

// IMPORT STYLESHEETS
import "../stylesheets/AboutSeg.css";

class AboutSeg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container__outer">
        <div className="container">
          <h1 className="header about__header">A LITTLE ABOUT ME</h1>
          <p className="para about__para">
            I started coding 5 years ago when I took courses on algorithmics and data structures 
            and the C language in University, but I was exposed to programming at a very young age when I was 8 or 9 years old 
            when my older brother showed me a caml light interpreter and taught me how I can assign numeric values to variables that I can name 
            and then do arithmetic operations with, which I thought was very cool at the time (I was in elementary school and didn't know what a calculator was <span role="img" aria-label="emoji">&#128516;</span>).
          </p>
          
          <p className="para about__para">
            Even though formal University education gave me strong foundations in Computer Science and Software Engineering,
            learning by myself from the greatest source of information humankind has ever known (AKA The Internet) by reading books and 
            developing, tweaking and reverse engineering different projects that I find on GitHub 
            and taking on real world projects is how I reached the level which I'm at today.
          </p>

          <p className="para about__para">
            I also love reading and learning about things in other fields like
            physics, astrophysics, philosophy, psycho-analysis, new scientific discoveries and technological advances.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutSeg;
