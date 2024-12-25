import { createContext, useContext, useState } from "react";

// Crear un contexto de carrito
export const CartContext = createContext([]);

// Hook personalizado para acceder al contexto del carrito
export function useCartContext() {
    return useContext(CartContext);
}

// Proveedor de carrito que gestiona los datos del carrito y expone funciones para interactuar con él
export function CartProvider({ children }) {
    // Estado local para los elementos del carrito
    const [carro, setCarro] = useState([]);

    // Estado local para la información del pedido (vacío en este ejemplo)
    const [order, setOrder] = useState({});

    // Función para agregar un elemento al carrito
    const addItemToCart = (item) => {
        // Verificar si el elemento ya está en el carrito
        const isInCart = carro.findIndex((cartItem) => cartItem.id === item.id);

        if (isInCart !== -1) {
            // Actualizar la cantidad si el elemento ya está en el carrito
            const actualizarItemsCarro = carro.map((cartItem, index) =>
                index === isInCart
                    ? { ...cartItem, cantidad: cartItem.cantidad + item.cantidad }
                    : cartItem
            );
            setCarro(actualizarItemsCarro);
        } else {
            // Agregar el elemento al carrito si no existe en el carrito
            setCarro([...carro, item]);
        }
    };

    // Función para calcular el total a pagar en el carrito
    const calcularTotalAPagar = () => {
        const total = carro.reduce((total, item) => total + item.precio * item.cantidad, 0);
        return total;
    };

    // Función para eliminar un elemento del carrito
    const removeItem = (itemId) => {
        const actualizarCarro = carro.filter((item) => item.id !== itemId);
        setCarro(actualizarCarro);
    };

    // Función para finalizar la compra (vacía el carrito en este ejemplo)
    const finalizarCompra = () => {
        setCarro([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems: carro, // Elementos en el carrito
                addItemToCart, // Función para agregar elementos al carrito
                calcularTotalAPagar, // Función para calcular el total a pagar
                removeItem, // Función para eliminar un elemento del carrito
                finalizarCompra, // Función para finalizar la compra
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
