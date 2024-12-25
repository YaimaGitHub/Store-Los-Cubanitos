import React, { createContext, useState, useEffect } from "react";
import { alldata } from "./Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < alldata.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  // Load cart from local storage or use the default cart
  const initialCart =
    JSON.parse(localStorage.getItem("cart")) || getDefaultCart();

  const [cartItems, setCartItems] = useState(initialCart);

  // Update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = alldata.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const updateCartItemCount = (newAmount, id) =>
    setCartItems((prev) => ({ ...prev, [id]: newAmount }));

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };
       
  
  return (

    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
