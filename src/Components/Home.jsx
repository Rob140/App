import React, { useEffect, useState } from "react";
import "./Home.css";
import img from "../assets/gesund.jpg";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState();
  const [color, setColor] = useState("");
  // useeffect with window events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setColor("red");
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
        <div className="home-container">
          <div className="home-flex">
            <div className="home-content">
              <h1 style={{ backgroundColor: { color } }}>
                Healthy Food, Healthy Life {windowWidth} {color}
              </h1>
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
