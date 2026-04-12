import React, { useCallback, useMemo, useState } from "react";
import "./Product.css";

const Product = () => {
  const [hasMesage, setHasMesage] = useState(false);
  const [select, setSelect] = useState("");
  function handleSelect(e) {
    setSelect(e.target.value);

    if (e.target.value === "radio1") {
      console.log("this is radio one");
    } else {
      console.log("this is radio two");
    }
  }
  console.log();

  // useMemo for expensive calculation
  const memHandler = useMemo(() => {}, []);
  // useCallback

  const callbackHandler = useCallback(() => {}, []);

  return (
    <div className="product-container">
      <input type="text" placeholder="Enter something..." />
      {/* boolean examples */}
      <div className="message-section">
        {hasMesage && <h1 className="fade-in">this is message </h1>}
        <h2>{hasMesage ? "yes" : "No"}</h2>
        <h3 className={hasMesage ? "black" : "red"}>hasMesage</h3>
      </div>

      <div className="controls-section">
        <h3>Controls</h3>
        <button disabled={hasMesage}>toggle</button>

        <div className="checkbox-container">
          <input type="checkbox" checked={hasMesage} name="" id="checkbox" />
          <label htmlFor="checkbox">Toggle Message</label>
        </div>

        <div className="radio-group">
          <div className="radio-item">
            <input
              type="radio"
              value="radio1"
              onChange={handleSelect}
              checked={select === "radio1"}
              name="radioGroup"
              id="radio1"
            />
            <label htmlFor="radio1">Radio Option 1</label>
          </div>

          <div className="radio-item">
            <input
              type="radio"
              value="radio2"
              onChange={handleSelect}
              checked={select === "radio2"}
              name="radioGroup"
              id="radio2"
            />
            <label htmlFor="radio2">Radio Option 2</label>
          </div>
        </div>
      </div>

      <div className="actions-section">
        <button onClick={() => setHasMesage(!hasMesage)}>update</button>
        <div
          className={`status-indicator ${hasMesage ? "status-active" : "status-inactive"}`}
        >
          Status: {hasMesage ? "Active" : "Inactive"}
        </div>
      </div>
    </div>
  );
};

export default Product;
