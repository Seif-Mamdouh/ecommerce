"use client";
import React from 'react'

import '../styles/styles.css';

interface ShopItemProps {
    title: string;
    price: number;
    rating: number;
    brand: string;
    thumbnail: string;
}

const ShopItem = (props: ShopItemProps) => {
  return (
    <div className="shop-card">
      <img src={props.thumbnail} alt={props.title} />
      <div>{props.title}</div>
      <div>${props.price}</div>
      <div>rating: {props.rating}</div>
      <div>brand: {props.brand}</div>
    </div>
  );
}

export default ShopItem
