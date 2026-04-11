import React, { useEffect, useRef, useState } from "react";
import "./Bunner.css";

const Bunner = () => {
  const [seconds, setSeconds] = useState(0);
  const [users, setUsers] = useState(null);

  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
    // console.log(fetchData());
  }, []);
  // console.log(users, "this is user");
  let isIndex = "alex";
  let is = `tom ${isIndex}`;
  function truthy() {
    if (isIndex && is) {
      console.log(is);
      return isIndex.length + 4;
    } else {
      return isIndex.toUpperCase();
    }
  }
  console.log(truthy(), "isindex");
  let str = "helo";
  let num = 12;
  let add = Number(str) - num;
  console.log(add);

  const run = Math.floor(Math.random() * 6);
  console.log(run);
  console.log(!!{}, typeof []);

  //   timer with useref and useeffect
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setSeconds((prev) => prev + 1);
  //     console.log(intervalRef.current, "this is interv");
  //   }, 2000);

  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, []);
  return (
    <>
      <ul>
        {users?.products.map((user) => (
          <li key={user.id}>{user.category}</li>
        ))}
      </ul>
      <section>
        <div className="bunner-container">
          <div className="bunner-content">
            <h1>Bunner</h1>
            <p>This is a simple Bunner component.</p>
            <button>click {seconds}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bunner;
