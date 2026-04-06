import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { FaCartArrowDown, FaRegUserCircle } from "react-icons/fa";
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
          <FaCartArrowDown className="icon" />
          <FaRegUserCircle className="icon" />
          <CiCircleCheck className="icon" />
        </div>
      </nav>
      <div className="menu-container">
        <button className="menu" onClick={togglehandler}>
          {toggle ? (
            <IoMdClose className="icon" />
          ) : (
            <IoMdMenu className="icon" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Nav;
