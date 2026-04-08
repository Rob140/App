import React, { useEffect, useState } from "react";
import "./Home.css";
import img from "../assets/gesund.jpg";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState();
  const [color, setColor] = useState("");
  const [inputValue, setInputValue] = useState("");

  // useeffect with window events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setColor(inputValue);
      } else {
        setWindowWidth(window.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("resizing");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section>
        <input
          type="color"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="home-container">
          <div className="home-flex">
            <div className="home-content">
              <h1 style={{ backgroundColor: color }}>
                Healthy Food, Healthy Life {windowWidth}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas
              </p>
              <button onClick={() => setColor(inputValue)} className="home-btn">
                Order Now
              </button>
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
