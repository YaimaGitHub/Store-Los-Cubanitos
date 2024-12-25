import { ShopContext } from "./Shop-context";
import React, { useContext } from "react";

export const CartItem = (props) => {
  const { id, image, title, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartitem">
      <img width={120} src={image} alt="nothing"/>
      <div className="description">
        <p>{title}</p>
      </div>
      <div className="inprice">
        <span>
          <b>${price}</b>
        </span>
      </div>
      <div className="countHandler">
        <button onClick={() => removeFromCart(id)}>-</button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)}>+</button>
      </div>
    </div>
  );
};
