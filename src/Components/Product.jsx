import React, { useCallback, useMemo } from "react";
import "./Product.css";

const Product = () => {
  // useMemo for expensive calculation
  const memHandler = useMemo(() => {}, [dependency, clicked]);

  const callbackHandler = useCallback(() => {}, []);
  return <div>Product</div>;
};

export default Product;
