import React, { useRef, useState } from "react";
import "./Category.css";

const Category = () => {
  const [count, setCount] = useState(0);
  const r = useRef();
  const scrollRef = useRef(null);
  function handleFocus() {
    setCount(count + 1);
    r.current.focus();
    r.current.style.backgroundColor = "red";

    console.log(r);
  }
  function handleScroll() {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
    scrollRef.current.style.backgroundColor = "red";

    console.log(scrollRef);
  }

  const cato = [1, 2, 3];
  return (
    <>
      <input type="text" ref={r} />
      <section className="c-section" onClick={handleFocus}>
        <div className="catogery-container">
          {cato.map((_, index) => (
            <div ref={scrollRef} className="flex-category" key={index}>
              <h2 className="h2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h2>
              <div className="category">
                <button onClick={handleScroll} className="btn-category">
                  button {count}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
