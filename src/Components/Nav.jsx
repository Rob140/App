import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import "./Nav.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  function togglehandler() {
    setToggle(!toggle);
  }
  return (
    <header className="header">
      <div className="logo">Logo</div>

      <nav className={`nav ${toggle ? "active" : ""}`}>
        <ul className="navLinks">
          <a className="">Home</a>
          <a className="">Home</a>
          <a className="">Home</a>
          <a className="">Home</a>
        </ul>
        <div className="icons-container">
          <IoMdMenu className="icon" />
          <IoMdClose className="icon" />
          <CiCircleCheck className="icon" />
        </div>
      </nav>
      <button className="menu" onClick={togglehandler}>
        {toggle ? (
          <IoMdClose className="icon" />
        ) : (
          <IoMdMenu className="icon" />
        )}
      </button>
    </header>
  );
};

export default Nav;
