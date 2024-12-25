import React, { useContext } from "react";
import { ShopContext } from "../../Shop-context";
export const RepairProduct = (props) => {
  const { id, cat, image, title, details, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  while (cat == "rep") {
    return (
      <div>
        <div key={id} id="popcrad" className="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                width={120}
                src={image}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{details}</p>
              </div>
            </div>
          </div>
          <span>
            Book this for just <b> $ {price}</b>
          </span>
          <button  className="cartbtn" onClick={() => addToCart(id)}>
          Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    );
  }
};
