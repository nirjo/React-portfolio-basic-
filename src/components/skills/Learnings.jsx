/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const Learnings = () => {
  return (
    <>
      <div className="skills_content">
        <h3 className="skills__title">Learning Technologies</h3>

        <div className="skills__data">
          <i className="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">Typescript</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">AI-Technology</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Learnings;
