"use client";
import React from 'react'

import '../styles/styles.css';

interface ShopItemProps {
  title: string;
  price: number;
  rating: number;
  brand: string;
  thumbnail: string;
  addToCart: () => void;
}

const ShopItem = (props: ShopItemProps) => {

  const handleAddToCart = () => {
    props.addToCart();
  }

  return (
    <div className="shop-card">
      <img src={props.thumbnail} alt={props.title} /> 
      <h6>{props.title}</h6>
      <h6>${props.price}</h6>
      <h6>rating: {props.rating}</h6>
      <h6>brand: {props.brand}</h6> 
      <button onClick={handleAddToCart}> Add To Cart </button>
    </div>
  );
}

export default ShopItem
