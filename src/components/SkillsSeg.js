// IMPORT LIBRARIES
import React, { Component } from "react";

// IMPORT STYLESHEETS
import "../stylesheets/SkillsSeg.css";

// IMPORT COMPONENTS
import SkillsIcon from "./SkillsIcon";

class SkillsSeg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "all"
    };
  }

  handleSkillsChange(skill) {
    this.setState({ skills: skill });
  }

  render() {
    // Skills Array
    const skillsArray = [
      { name: "HTML5", icon: "html5", category: "dev" },
      { name: "CSS3", icon: "css3", category: "dev" },
      { name: "Javascript", icon: "js", category: "dev" },
      { name: "Python", icon: "python", category: "dev" },
      { name: "Java", icon: "java", category: "dev" },
      { name: "Spring", icon: "spring", category: "dev" },
      { name: "Puppeteer", icon: "puppeteer", category: "dev" },
      { name: "TensorFlowJS", icon: "tsjs", category: "dev" },
      { name: "React", icon: "react", category: "dev" },
      { name: "Vue", icon: "vue", category: "dev" },
      { name: "Node", icon: "nodejs", category: "dev" },
      { name: "MongoDB", icon: "mongodb", category: "dev" },
      { name: "MySQL", icon: "mysql", category: "dev" },
      { name: "Express", icon: "express", category: "dev" },
      { name: "Jquery", icon: "jquery", category: "dev" },
      { name: "SASS", icon: "sass", category: "dev" },
      { name: "Redux", icon: "redux", category: "dev" },
      { name: "Photoshop", icon: "photoshop", category: "design" },
      { name: "git", icon: "git", category: "tools" },
      { name: "Webpack", icon: "webpack", category: "tools" },
      { name: "Docker", icon: "docker", category: "tools"},
      { name: "Jenkins", icon: "jenkins", category: "tools"},
      { name: "SonarQube", icon: "sonarqube", category: "tools"},
      { name: "AWS", icon: "aws", category: "tools"},
      { name: "Firebase", icon: "firebase", category: "tools"}
      
      
    ];
    return (
      <div className="container__outer lightBG">
        <div className="container">
          {/* Header and Paragraph */}
          <h1 className="header skills__header">SOME OF WHAT I CAN DO</h1>
          <p className="para skills__para">
            Here are some of the skills that I've acquired throughout the years. My Main stack is generally around
            Javascript, Jquery, Node, MongoDB and React.
          </p>
          {/* Skills filter buttons */}
          <div className="skills__controls">
            {/* All Skills */}
            <div
              className={
                this.state.skills === "all"
                  ? "skills__controlsBox skills__active"
                  : "skills__controlsBox"
              }
              onClick={() => this.handleSkillsChange("all")}
            >
              <p className="skills__controlsLabel">All</p>
              <div className="skills__controlsSwitch" />
            </div>
            {/* Development Skills */}
            <div
              className={
                this.state.skills === "dev"
                  ? "skills__controlsBox skills__active"
                  : "skills__controlsBox"
              }
              onClick={() => this.handleSkillsChange("dev")}
            >
              <p className="skills__controlsLabel">Development</p>
              <div className="skills__controlsSwitch" />
            </div>
            {/* Design Skills */}
            <div
              className={
                this.state.skills === "design"
                  ? "skills__controlsBox skills__active"
                  : "skills__controlsBox"
              }
              onClick={() => this.handleSkillsChange("design")}
            >
              <p className="skills__controlsLabel">Design</p>
              <div className="skills__controlsSwitch" />
            </div>
            {/* Tools */}
            <div
              className={
                this.state.skills === "tools"
                  ? "skills__controlsBox skills__active"
                  : "skills__controlsBox"
              }
              onClick={() => this.handleSkillsChange("tools")}
            >
              <p className="skills__controlsLabel">Tools</p>
              <div className="skills__controlsSwitch" />
            </div>
          </div>

          {/* Skills icons */}
          <div className="skills__iconContainer">
            {/* Loops skills array, creates SkillsIcon component for each array item */}
            {skillsArray.map((value, i) => {
              return (
                <SkillsIcon
                  src={require(`../images/icons/${value.icon}.svg`)}
                  key={i}
                  category={value.category}
                  name={value.name}
                  selectedCategory={this.state.skills}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsSeg;
