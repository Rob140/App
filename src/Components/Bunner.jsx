import React, { useEffect, useRef, useState } from "react";
import "./Bunner.css";

const Bunner = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  //   timer with useref and useeffect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("this is interv");
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <section>
      <div className="bunner-container">
        <div className="bunner-content">
          <h1>Bunner</h1>
          <p>This is a simple Bunner component.</p>
          <button>click {seconds}</button>
        </div>
      </div>
    </section>
  );
};

export default Bunner;
