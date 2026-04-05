import React from "react";
import "./Home.css";
import img from "../assets/gesund.jpg";

const Home = () => {
  return (
    <>
      <section>
        <div className="home-container">
          <div className="home-flex">
            <div className="home-content">
              <h1>Healthy Food, Healthy Life</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas
              </p>
              <button className="home-btn">Order Now</button>
            </div>
          </div>
          <div className="home-flex">
            <div className="home-img">
              <img src={img} alt="img" className="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
