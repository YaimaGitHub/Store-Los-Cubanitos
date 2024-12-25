import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import logo from '../../assets/logo/logo-tienda.png';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import Swal from 'sweetalert2';
import '../CartOrders/CartOrders.css';

function CartOrders() {
  // Estado local para el ID del pedido
  const [pedidoId, setPedidoId] = useState("");

  // Obtener datos del carrito y funciones relacionadas desde el contexto
  const { finalizarCompra, calcularTotalAPagar, cartItems } = useContext(CartContext);

  // Estado local para los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    repeatEmail: "",
    phone: ""
  });

  // Estado local para manejar errores de validación
  const [errors, setErrors] = useState({});

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para realizar una compra
  const comprar = () => {
    if (!validar()) {
      return;
    }

    const pedido = {
      buyer: formData,
      items: cartItems,
      total: calcularTotalAPagar(),
      date: Date.now()
    };

    try {
      // Agregar el pedido a la base de datos Firebase
      const pedidosRef = collection(db, "orders");
      addDoc(pedidosRef, pedido)
        .then((doc) => {
          setPedidoId(doc.id);
          finalizarCompra();
          mostrarMensajeConfirmacion(doc.id);
        })
        .catch((error) => {
          console.error("Error al enviar el pedido:", error);
        });
    } catch (error) {
      console.error("Error al enviar el pedido:", error);
    }
  };

  // Función para validar los campos del formulario
  const validar = () => {
    const newErrors = {};

    if (formData.name.length < 8) {
      newErrors.name = "Nombre y Apellido válidos";
    }

    if (formData.email !== formData.repeatEmail) {
      newErrors.email = "Los correos electrónicos no coinciden";
      newErrors.repeatEmail = "Los correos electrónicos no coinciden";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Función para mostrar un mensaje de confirmación
  const mostrarMensajeConfirmacion = (pedidoId) => {
    Swal.fire({
      icon: 'success',
      title: 'Gracias por confiar en ShopLine ',
      text: `Tu orden de compra es: ${pedidoId}`,
      showCancelButton: false,
      confirmButtonText: 'Cerrar'
    });
  };

  return (
    <>
      <div className="bg-dark d-flex justify-content-center">
        {/* Puedes agregar contenido adicional aquí si es necesario */}
      </div>

      <div className="form-container container">
        <h2 className="form-header">Completa tus datos</h2>
        <p className="form-description">Por favor, completa los datos y nos contactaremos a la brevedad para finalizar la compra</p>
        <div className="form-content">
          <input
            className="form-input"
            name="name"
            type="text"
            placeholder="Nombre y apellido"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className="form-input"
            name="email"
            type="email"
            placeholder="Ingresa tu email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            className="form-input"
            name="repeatEmail"
            type="email"
            placeholder="Repetir email"
            value={formData.repeatEmail}
            onChange={handleInputChange}
          />
          <input
            className="form-input"
            name="phone"
            type="text"
            placeholder="Ingresa tu teléfono"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error-form">{errors.name}</p>}
          {errors.email && <p className="error-form">{errors.email}</p>}
          <button type='button' className="button" onClick={comprar}>
            Finalizar Compra
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default CartOrders;
