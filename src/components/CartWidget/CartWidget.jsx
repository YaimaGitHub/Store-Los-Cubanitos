import { useContext } from "react";
import Logo from "../../assets/icons/carrito.png";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import '../CartWidget/CartWidget.css';

/**
 * Componente que muestra un ícono de carrito y el contador de elementos en el carrito.
 * Utiliza el contexto del carrito para obtener la información.
 *
 * @returns {JSX.Element} - Elemento JSX que muestra el ícono del carrito y el contador.
 */
export const CartWidget = () => {
    // Obtener el contexto del carrito
    const cartContext = useContext(CartContext);

    // Calcular el número total de elementos en el carrito
    const totalItemCount = cartContext.cartItems.reduce((total, item) => total + item.cantidad, 0);

    return (
        <>
            {/* Enlace que redirige al carrito */}
            <Link to="/cart">
                <button className="btn btn--secondary btncarro" id="verCarro">
                    {/* Ícono del carrito */}
                    <img src={Logo} alt="carrito" className="carrito-png" />
                    {/* Contador de elementos en el carrito */}
                    {totalItemCount}
                </button>
            </Link>
        </>
    );
}
