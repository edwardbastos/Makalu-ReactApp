import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext"; // Importar el contexto CartContext
import { Table, Button } from "react-bootstrap"; // Importar componentes de react-bootstrap
import "./CheckOut.css"; // Importar estilos CSS

// Definir las rutas de las imágenes para los botones de incremento y decremento
const increaseButtonImg = process.env.PUBLIC_URL + "/assets/img/mas.png";
const decreaseButtonImg = process.env.PUBLIC_URL + "/assets/img/eliminar.png";

const CheckOut = () => {
  const { cartItems, setCartItems, setTotalQuantity } = useContext(CartContext); // Obtener el estado y las funciones del contexto CartContext
  const [totalPrice, setTotalPrice] = useState(0); // Estado local para almacenar el precio total

  useEffect(() => {
    calculateTotalPrice(); // Calcular el precio total al cargar el componente y cuando cambia el carrito de compras
  }, [cartItems]);

  const removeItem = (itemId) => {
    // Función para eliminar un elemento del carrito
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.cantidad > 1) {
          return { ...item, cantidad: item.cantidad - 1 }; // Reducir la cantidad en 1 si es mayor que 1
        } else {
          return {}; // Si la cantidad es 1, devolver un objeto vacío para eliminar el elemento
        }
      }
      return item;
    });

    const updatedItemsWithoutEmpty = updatedItems.filter(
      (item) => Object.keys(item).length !== 0
    ); // Filtrar los elementos vacíos eliminados del carrito

    setCartItems(updatedItemsWithoutEmpty); // Actualizar el estado del carrito con los elementos actualizados
    calculateTotalQuantity(updatedItemsWithoutEmpty); // Calcular la cantidad total de productos en el carrito
  };

  const increaseQuantity = (itemId) => {
    // Función para aumentar la cantidad de un elemento en el carrito
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, cantidad: item.cantidad + 1 }; // Aumentar la cantidad en 1
      }
      return item;
    });
    setCartItems(updatedItems); // Actualizar el estado del carrito con los elementos actualizados
    calculateTotalQuantity(updatedItems); // Calcular la cantidad total de productos en el carrito
  };

  const calculateTotalQuantity = (items) => {
    // Función para calcular la cantidad total de productos en el carrito
    const totalQuantity = items.reduce(
      (total, item) => total + item.cantidad,
      0
    );
    setTotalQuantity(totalQuantity); // Actualizar la cantidad total en el estado compartido
  };

  const calculateTotalPrice = () => {
    // Función para calcular el precio total de los productos en el carrito
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
    setTotalPrice(totalPrice); // Actualizar el precio total en el estado local
  };

  const finalizarCompra = () => {
    // Lógica para finalizar la compra
  };

  const vaciarCarrito = () => {
    // Función para vaciar el carrito de compras
    setCartItems([]); // Vaciar el carrito actualizando el estado con un array vacío
    setTotalQuantity(0); // Establecer la cantidad total en 0
  };

  return (
    <div className="checkout-container container-xl ps-5 ms-5">
      <h2>Carrito de compras</h2>
      <div className="horizontal-line"></div>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div className="checkout-container-child">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Precio Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>$ {item.precio} USD</td>
                  <td>{item.cantidad}</td>
                  <td>$ {item.precio * item.cantidad} USD</td>
                  <td>
                    <Button
                      className="quantity-button"
                      variant="white"
                      onClick={() => removeItem(item.id)}
                    >
                      <img src={decreaseButtonImg} alt="Disminuir" />
                    </Button>
                    <Button
                      className="quantity-button"
                      variant="white"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <img src={increaseButtonImg} alt="Aumentar" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4 style={{ fontWeight: "bold" }}>
            Total a pagar: $ {totalPrice} USD
          </h4>
          <div className="checkout-actions">
            <button
              variant="secondary"
              className="checkout-button"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>
            <button
              className="checkout-button"
              id="btnCompra"
              onClick={finalizarCompra}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
