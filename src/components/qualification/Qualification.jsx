import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__active button--flex "
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__active button--flex "
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Advanced computer Graphics
                </h3>
                <span className="qualification__subtitle">
                  Linkoping university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2010- 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title"> React-Basic</h3>
                <span className="qualification__subtitle">
Certification -HackerRank
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {" "}
                  B.Tech - Information Technology
                </h3>
                <span className="qualification__subtitle">
                  Pondicherry university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2004- 2008
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title"> React-Advanced</h3>
                <span className="qualification__subtitle">
                  tripleByte-certification - | Bangalore
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>  Present
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Frontend Developer</h3>
                <span className="qualification__subtitle">
                  FogWiseAB|Norrkoping -sweden
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017- 2018
                </div>
              </div>
               <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div> 
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title"> Frontend Developer</h3>
                <span className="qualification__subtitle">
                  Cybercom AB|Linkoping -sweden
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018-2019
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  
                  Freelance- Fullstack Developer
                </h3>
                <span className="qualification__subtitle">
                  work From home - Pondicherry | India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019- 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title">Frontend Developer </h3>
                <span className="qualification__subtitle">
                  Twilight IT solutions - Pondicherry| India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022- Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Qualification;
