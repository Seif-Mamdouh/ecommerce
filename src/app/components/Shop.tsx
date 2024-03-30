"use client";
import React from "react";
import ShopItem from "./ShopItem";

import "../styles/styles.css";
import Filter from "./Filter";
import Cart from "./Cart";
import useShoppingCart from "./useShoppingCart";

const Shop = () => {

    const { state, handleFilter, addToCart } = useShoppingCart();
    const { data, error, filter, cart, totalCartValue } = state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (data.length === 0) {
      return <div>Loading...</div>;
    }


  return (
    <div className="container">
      <div>
        {data &&
          Array.from(new Set(data.map((item) => item.category))).map(
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
        {data &&
          data
            .filter((item) => filter.length === 0 || filter.includes(item.category))
            .map((item) => (
              <div key={item.id}>
                <ShopItem
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  brand={item.brand}
                  thumbnail={item.thumbnail}
                  addToCart={() => addToCart(item)}
                />
              </div>
            ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} totalCartValue={totalCartValue} />
      </div>
    </div>
  );
};


export default Shop;
