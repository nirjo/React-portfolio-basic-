import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
// import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Footer from "./components/footer/Footer";
import Site from "./components/site/site";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        {/* <Site />       */}
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
