import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import '../ItemCount/ItemCount.css'


export function ItemCount({ item }) {
  const cartContext = useContext(CartContext);
  const [count, setCount] = useState(1);

  function handleClickSuma() {
    setCount(count + 1);
  }

  function handleClickResta() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function onAdd() {
    const newItem = {
      id: item.id,
      nombre: item.Nombre,
      detalles: item.Detalles,
      precio: item.Precio,
      cantidad: count,
    };
    cartContext.addItemToCart(newItem);
    setCount(1);

    Toastify({
      text: "Producto agregado al carrito",
      duration: 2000,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <button className="btn" onClick={handleClickResta}>
          -
        </button>
        <p className="mt-3">{count}</p>
        <button className="btn" onClick={handleClickSuma}>
          +
        </button>
      </div>

      <div>
        <button className="btn btn-dark compra mb-3" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
}