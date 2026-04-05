import React from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Logo</div>
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
        <button className="menu">
          <IoMdMenu className="icon" />
          <IoMdClose className="icon" />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
