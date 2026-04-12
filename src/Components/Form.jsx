import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [checkBox, setCheckBox] = useState(false);
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [password, setPassword] = useState("");
  const [radio, setRadio] = useState("");
  const [range, setRange] = useState(30);
  const [search, setSearch] = useState("");
  const [tele, setTele] = useState("");
  const [url, setUrl] = useState("");
  const [time, setTime] = useState("");
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submited");
  }

  return (
    <>
      <h1>this is forme page</h1>
      <form action="" onSubmit={handleSubmit}>
        {/* if you have more checkbox use array  */}
        {/* only in checkbox i cant use e.target.value */}
        <h2>ckeckbox type</h2>
        <input
          type="checkbox"
          checked={checkBox}
          onChange={(e) => setCheckBox(e.target.checked)}
          value=""
        />
        {/* almost equal to date type */}
        <h2>date type</h2>

        <input
          type="datetime-local"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <h2>email type</h2>

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <h2>Number type</h2>

        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />

        <h2>password type</h2>

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <h2>Radio type</h2>
        <label htmlFor="">visa</label>
        <input
          type="radio"
          onChange={(e) => setRadio(e.target.value)}
          value="visa"
          checked={radio === "visa"}
        />
        <label htmlFor="">paypal</label>
        <input
          type="radio"
          onChange={(e) => setRadio(e.target.value)}
          value="paypal"
          checked={radio === "paypal"}
        />
        <h2>range type</h2>

        <input
          type="range"
          onChange={(e) => setRange(e.target.value)}
          value={range}
        />
        <h2>search type</h2>

        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <h2>telefon type</h2>

        <input
          type="tel"
          onChange={(e) => setTele(e.target.value)}
          value={tele}
        />
        <h2>url type</h2>

        <input
          type="url"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />

        <h2>time type</h2>

        <input
          type="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        />

        <h2>textarea</h2>

        <textarea
          name=""
          id=""
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>

        <h2>textarea</h2>
        <select
          name=""
          id=""
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JS</option>
          <option value="react">REACT</option>
        </select>

        <button type="submit">form submit</button>
      </form>
    </>
  );
};

export default Form;
