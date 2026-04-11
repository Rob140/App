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

  // useMemo for expensive calculation
  const memHandler = useMemo(() => {}, []);
  // useCallback

  const callbackHandler = useCallback(() => {}, []);

  return (
    <>
      <input
        type="
      "
      />
      {/* boolean examples */}
      {hasMesage && <h1>this is message </h1> ? <h1>no message</h1> : null}
      <h2>{hasMesage ? "yes" : "No"}</h2>
      <button disabled={hasMesage}>toggle</button>
      <input type="checkbox" checked={hasMesage} name="" id="" />
      {/* <label htmlFor="radio2"></label> */}
      <input
        type="radio"
        value="radio1"
        onChange={handleSelect}
        checked={select === "radio1"}
        name=""
        id=""
      />
      {/* <label htmlFor="radio2"></label> */}
      <input
        type="radio"
        value="radio2"
        onChange={handleSelect}
        checked={select === "radio2"}
        name=""
        id=""
      />

      <h3 className={hasMesage ? "black" : "red"}>hasMesage</h3>
      <button onClick={() => setHasMesage(!hasMesage)}>update</button>
    </>
  );
};

export default Product;
