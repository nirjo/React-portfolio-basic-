/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const Cloud = () => {
  return (
    <div className="skills_content">
      <h3 className="skills__title">Cloud Technologies</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">AWS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Azure</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
         </div>
        
        
      </div>
    </div>
  );
};

export default Cloud;
