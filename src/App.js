import react from "react";
import "./styles.css";
import mypic from "./asserts/mypic.jpg";

const App = () => {
  return (
    <div className="App">
      <div class="header">
        <img src={mypic} alt="Italian Trulli" />
        <ul class="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
      </div>

      <div class="hero">
        <div class="hero-inner">
          <h1>Welcome To My Site!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nesciunt accusantium tempora voluptatem velit enim quaerat sapiente
            sed, repellat temporibus eaque dignissimos, saepe ab recusandae
            incidunt fuga veniam vero vitae!
          </p>
          <a href="#" class="button">
            Learn More
          </a>
        </div>
      </div>

      <div class="features">
        <div class="features-inner">
          <div class="featured-item">
            <h3>Cool Feature #1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              fuga, quod, eligendi iusto tenetur culpa veniam animi minus odit
              cupiditate, ducimus accusamus quaerat numquam odio corporis earum
              cum harum dolorem.
            </p>
          </div>
          <div class="featured-item">
            <h3>Cool Feature #2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              fuga, quod, eligendi iusto tenetur culpa veniam animi minus odit
              cupiditate, ducimus accusamus quaerat numquam odio corporis earum
              cum harum dolorem.
            </p>
          </div>
          <div class="featured-item">
            <h3>Cool Feature #3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              fuga, quod, eligendi iusto tenetur culpa veniam animi minus odit
              cupiditate, ducimus accusamus quaerat numquam odio corporis earum
              cum harum dolorem.
            </p>
          </div>

          <div class="featured-item">
            <h3>Cool Feature #4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              fuga, quod, eligendi iusto tenetur culpa veniam animi minus odit
              cupiditate, ducimus accusamus quaerat numquam odio corporis earum
              cum harum dolorem.
            </p>
          </div>
          <div class="featured-item">
            <h3>Cool Feature #5</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              fuga, quod, eligendi iusto tenetur culpa veniam animi minus odit
              cupiditate, ducimus accusamus quaerat numquam odio corporis earum
              cum harum dolorem.
            </p>
          </div>
          <div class="featured-item">
            <h3>Cool Feature #6</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              fuga, quod, eligendi iusto tenetur culpa veniam animi minus odit
              cupiditate, ducimus accusamus quaerat numquam odio corporis earum
              cum harum dolorem.
            </p>
          </div>
          <div class="featured-item">
            <h3>Cool Feature #7</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              fuga, quod, eligendi iusto tenetur culpa veniam animi minus odit
              cupiditate, ducimus accusamus quaerat numquam odio corporis earum
              cum harum dolorem.
            </p>
          </div>
          <div class="featured-item">
            <h3>Cool Feature #8</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              fuga, quod, eligendi iusto tenetur culpa veniam animi minus odit
              cupiditate, ducimus accusamus quaerat numquam odio corporis earum
              cum harum dolorem.
            </p>
          </div>
          {/* <div class="featured-item">
            <h3>Cool Feature #9</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              fuga, quod, eligendi iusto tenetur culpa veniam animi minus odit
              cupiditate, ducimus accusamus quaerat numquam odio corporis earum
              cum harum dolorem.
            </p>
          </div> */}
        </div>
      </div>

      <div class="footer">
        <p>&copy; 2020 Fictional Company</p>
      </div>
    </div>
  );
};

export default App;
