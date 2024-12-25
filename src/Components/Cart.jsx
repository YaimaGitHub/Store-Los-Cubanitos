import React, { useContext } from "react";
import { ShopContext } from "../Shop-context";
import { alldata } from "../Products"; // Assuming you have a file named Products.js
import { CartItem } from "../cart-item"; // Assuming you have a file named cart-item.js
import { useState } from "react";

import RegistrationPage from "./Forum.jsx/RegistrationPage";
export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext); // Use the custom hook
  const totalAmount = getTotalCartAmount(); // Implement this function
  const [cbtn, rbtn] = useState(false);
    
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
        <div className="cartItems">
          {alldata.map((product) => {
            if (cartItems[product.id] !== 0) {
              // Assuming this logic matches your cartItems structure
              return <CartItem key={product.id} data={product} />;
            }
            return null;
          })}
        </div>
      </div>
      <div>
        <div className="checkout">
          <p>Total ${totalAmount}</p>
          <button  className="checkbtn"  onClick={() => rbtn(true)}>Check Out</button>
        </div>
      </div>
      <RegistrationPage
        trigger={cbtn}
        setTrigger={rbtn}
        totalAmount={totalAmount}
      />
    </div>
  );
};
