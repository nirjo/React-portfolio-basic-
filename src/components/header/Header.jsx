import React , { useState } from "react";
import "./header.css";

const Header = () => {

const [Toggle, ShowMenu] = useState(false)


  return (
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Nirmal
          </a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul li className="nav__list grid">
              <li li className="nav__item">
                <a href="#Home" className="nav__link" active-link>
                Home
                <i className="uil uil-estate nav__icon"></i>
                </a>
              </li>
              <li li className="nav__item">
                <a href="#About" className="nav__link">

                  
                  <i className="uil uil-user nav__icon"></i>
                  About
                </a>
              </li>
              <li li className="nav__item">
                <a href="#Skills" className="nav__link">

                  <i className="uil uil-fil-alt nav__icon"></i>
                  Skills

                </a>
              </li>
              <li li className="nav__item">
                <a href="#services" className="nav__link">

                  <i className="uil uil-briefcase nav__icon"></i>
                  Services

                </a>
              </li>
              <li li className="nav__item">
                <a href="#portfolio" className="nav__link">

                  <i className="uil uil-scenery nav__icon"></i>
                  Portfolio

                </a>
              </li>
              <li li className="nav__item">
                <a href="#contact" className="nav__link">

                  <i className="uil uil-message nav__icon"></i>
                  Contact

                </a>
              </li>


            </ul>

            <i class="uil uil-times nav__close" onClick={()=>{
              ShowMenu(!Toggle)
            }}></i>
          </div>
          <div className="nav__toggle" onClick={()=>ShowMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
          </div>
        </nav>
      </header>
  );
};

export default Header;
