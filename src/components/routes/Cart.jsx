import React from 'react';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from 'react-router-dom';
import '../routes/Cart.css';
import carroVacio from '../../assets/img/carrito-vacio.png'

function Cart() {
  const cartContext = useContext(CartContext);

  const totalAPagar = cartContext.cartItems.reduce((total, item) => {
    const itemTotal = item.precio * item.cantidad;
    return total + itemTotal;
  }, 0);

  return (
    <>
      <div className='mb-5 pt-1 mt-0 container-fluid'>
        <div className="container text-center col-lg mt-3 cart-title">

        </div>
      </div>

      {cartContext.cartItems.length === 0 ? (
        <div className='d-flex flex-column align-items-center'>
          <img className='imgcart' src={carroVacio} alt="Carrito vacío" />
        </div>
      ) : (
        <div>
          <div className="container">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr className="table-primary">
                    <th className="text-left">Articulos</th>
                    <th className="text-left">C/U</th>
                    <th className="text-left">Precio</th>
                    <th className="text-left">Total</th>
                    <th className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartContext.cartItems.length === 0 ? (
                    <tr className="table-info">
                      <td colSpan="5">Tu carrito está vacío</td>
                    </tr>
                  ) : (
                    cartContext.cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <p>{item.nombre}</p>
                          </div>
                        </td>

                        <td>
                          <p>{item.cantidad}</p>
                        </td>

                        <td>
                          <p>${item.precio}</p>
                        </td>

                        <td>
                          <p>${item.precio * item.cantidad}</p>
                        </td>

                        <td className="text-center">
                          <button type="button" className="btn btn-link btn-sm" onClick={() => cartContext.removeItem(item.id)}>
                            <i className="fa-solid fa-trash df"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>


          </div>

          <div className='d-flex flex-column text-center'>
            <h4 className='mt-4 mb-4 txt'>Importe a pagar: ${totalAPagar.toFixed(2)}</h4>
            <div className='p-1'></div>
            <div>
              <Link to="/checkout">
                <button class="xddd">
                  Realizar compra
                  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
