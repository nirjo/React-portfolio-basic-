import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Cloud from "./Cloud";
import Learnings from "./Learnings";

const skills = () => {
  return (
    <section className="skill section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Tecnical level</span>
      {/* <p className="skills__description">
      I love to create design which speaks, Keep it clean, minimal and simple.
I LIKE TO DESIGN
Web Design
Mobile Apps
TOOLS
Figma

I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
SKILLS
Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.

TOOLS
VScode, Github etc.
      </p> */}
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Cloud />
        <Learnings />
      </div>
    </section>
  );
};

export default skills;
