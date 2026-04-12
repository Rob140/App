import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Bunner from "./Components/Bunner";
import Category from "./Components/Category";
import Product from "./Components/Product";
// import Blog from "./Components/Blog";
import Testemonial from "./Components/Testemonial";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Bunner />
      <Category />
      <Product />
      <Form />
      {/* <Blog />
      <Testemonial />
      <Footer /> */}
    </>
  );
};

export default App;
