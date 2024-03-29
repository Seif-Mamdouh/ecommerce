"use client";
import React, {useState} from "react";

interface ShopApiData {
  id: string;
  title: string;
  price: number;
  rating: number;
  brand: string;
  thumbnail: string;
}

interface State {
  data: ShopApiData[] | null;
  error: string;
}

const useShopAPI = () => {
    const [state, setState] = useState<State>({ data: null, error: null});

    React.useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then(
                (data) => setState({ ...state, data: data }),
                (error) => setState({ ...state, error: error })
            );
    }, []);

    return { data: state.data, error: state.error };
};

export default useShopAPI;

// id": 1,
// "title": "iPhone 9",
// "price": 549,
// "rating": 4.69,
// "stock": 94,
// "brand": "Apple",
// "category": "smartphones",
// "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
