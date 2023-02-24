import react from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Portfolio from "./components/Pages/Portfolio";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />

<<<<<<< HEAD
        <div>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
=======
      <div class="hero">
        <div class="hero-inner">
          <h1>Welcome To My Website!!!!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nesciunt accusantium tempora voluptatem velit enim quaerat sapiente
            sed, repellat temporibus eaque dignissimos, saepe ab recusandae
            incidunt fuga veniam vero vitae!
          </p>
          <a href="#" class="button">
            Learn More
          </a>
>>>>>>> 26f302a0e069da3348adff7ed88b8f8782f56a42
        </div>
      </Router>
    </>
  );
};

export default App;
