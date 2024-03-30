"use client";
import React from "react";
import ShopItem from "./ShopItem";

import "../styles/styles.css";
import Filter from "./Filter";

const Shop = () => {
  const [state, setState] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [filter, setFilter] = React.useState([]);

React.useEffect(() => {
  const limit = 10;

  fetch(`https://dummyjson.com/products?limit=${limit}`)
    .then((response) => response.json())
    .then(
      (data) => {
        setState(data.products);
      },
      (error) => setError(error)
    );
}, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (state.length === 0) {
    return <div>Loading...</div>;
  }

  const handleFilter = (category) => {
    if (filter.includes(category)) {
      setFilter(filter.filter((item) => item !== category));
    } else {
      setFilter([...filter, category]);
    }
  };

  return (
    <div className="container">
      <div className="filter-container">
        {state &&
          Array.from(new Set(state.map((item) => item.category))).map(
            (category) => (
              <div key={category}>
                <Filter
                  category={category}
                  isChecked={filter.includes(category)}
                  onCheckboxChange={handleFilter}
                />
              </div>
            )
          )}
      </div>
      <div className="shop-items-container">
        {state &&
          state.filter((item) => filter.length === 0 || filter.includes(item.category))
          .map((item) => (
            <div key={item.id}>
              <ShopItem
                title={item.title}
                price={item.price}
                rating={item.rating}
                brand={item.brand}
                thumbnail={item.thumbnail}
              />
            </div>
          ))}
      </div>
    </div>
  );
};


export default Shop;
