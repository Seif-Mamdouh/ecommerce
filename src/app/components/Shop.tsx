"use client";
import React from "react";
import ShopItem from "./ShopItem";

import "../styles/styles.css";

const Shop = () => {
    const [state, setState] = React.useState([]);
    const [error, setError] = React.useState(null);

    console.log(state);

  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then(
        (data) => {
            setState(data.products);
        },
        (error) => setError(error)
        )
  }, []);
    

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (state.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className = "shop-items-container">
      {state &&
        state.map((item) => (
          <div key={item.id}>
            <ShopItem
              title={item.title}
              price={item.price}
              rating={item.rating}
              brand={item.brand}
              thumbnail={item.thumbnail} />
          </div>
        ))}
    </div>
  );
};


export default Shop;
