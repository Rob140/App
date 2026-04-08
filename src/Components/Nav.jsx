import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { FaCartArrowDown, FaRegUserCircle } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  function togglehandler() {
    setToggle(!toggle);
  }
  // handle document with useeffect
  useEffect(() => {
    if (count > 5) {
      document.title = count;
    }
    // const handleDoc = () => {
    // setCount(count + 1);
    // };
    return () => {
      document.title = "react";
    };
  }, [count]);
  return (
    <header className="header">
      <div className="logo" onClick={() => setCount(count + 1)}>
        Logo
      </div>

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
