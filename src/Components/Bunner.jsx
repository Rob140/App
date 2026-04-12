import React, { useEffect, useRef, useState } from "react";
import "./Bunner.css";

const Bunner = () => {
  const [users, setUsers] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [searchName, setSearchName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#667eea");

  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setUsers(data);
      setFilteredProducts(data);
    };
    fetchData();
  }, []);

  // Filter products by name
  const handleFilterByName = (searchTerm) => {
    setSearchName(searchTerm);
    if (users && users.products) {
      const filtered = {
        ...users,
        products: users.products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      };
      setFilteredProducts(filtered);
    }
  };

  // Delete product
  const handleDeleteProduct = (productId) => {
    if (filteredProducts && filteredProducts.products) {
      const updated = {
        ...filteredProducts,
        products: filteredProducts.products.filter((p) => p.id !== productId),
      };
      setFilteredProducts(updated);
    }
  };

  // Change background
  const handleBackgroundChange = (color) => {
    setBackgroundColor(color);
  };

  // Timer functionality (commented out)
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setSeconds((prev) => prev + 1);
  //   }, 2000);
  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, []);

  return (
    <>
      {/* Background Control Section */}
      <div className="background-control">
        <h3>Customize Background</h3>
        <div className="color-picker-group">
          {[
            { color: "#667eea", label: "Purple" },
            { color: "#ff6b6b", label: "Red" },
            { color: "#4ecdc4", label: "Teal" },
            { color: "#ffa500", label: "Orange" },
            { color: "#1e90ff", label: "Blue" },
            { color: "#2ecc71", label: "Green" },
          ].map((bg) => (
            <button
              key={bg.color}
              className={`color-btn ${backgroundColor === bg.color ? "active" : ""}`}
              style={{ backgroundColor: bg.color }}
              onClick={() => handleBackgroundChange(bg.color)}
              title={bg.label}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h2>Featured Products</h2>

        {/* Filter Section */}
        <div className="filter-section">
          <input
            type="text"
            className="search-input"
            placeholder="Filter by product name or category..."
            value={searchName}
            onChange={(e) => handleFilterByName(e.target.value)}
          />
          <span className="filter-count">
            Showing {filteredProducts?.products?.length || 0} of{" "}
            {users?.products?.length || 0} products
          </span>
        </div>

        {/* Products List */}
        {filteredProducts && filteredProducts.products.length > 0 ? (
          <ul className="products-list">
            {filteredProducts.products.slice(0, 8).map((product) => (
              <li key={product.id} className="product-item">
                <div className="product-info">
                  <span className="product-title">{product.title}</span>
                  <span className="product-category">{product.category}</span>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteProduct(product.id)}
                  title="Delete product"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-results">
            No products found. Try a different search.
          </div>
        )}
      </div>

      {/* Main Banner Section */}
      <section
        style={{
          background: `linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}99 100%)`,
        }}
      >
        <div className="bunner-container">
          <div className="bunner-content">
            <h1>Welcome to Our Platform</h1>
            <p>
              Discover amazing products and explore our comprehensive
              collection. Experience the future of online shopping with
              cutting-edge technology and seamless user experience.
            </p>
            <button onClick={() => setSeconds(seconds + 1)}>
              Explore Now {seconds > 0 && `(${seconds})`}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bunner;
