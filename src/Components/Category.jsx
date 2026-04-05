import React from "react";
import "./Category.css";

const Category = () => {
  const cato = [1, 2, 3];
  return (
    <>
      <section>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
        <div className="catogery-container">
          {cato.map((_, index) => (
            <div className="flex-category" key={index}>
              <div className="category">
                <button className="btn-category">button</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
