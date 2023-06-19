import React, { useContext, useEffect, useState } from "react";
import { CheckOutContainer } from "../CheckOutContainer/CheckOutContainer";
import { Table, Button } from "react-bootstrap";
import "./CheckOut.css";

const increaseButtonImg = process.env.PUBLIC_URL + "/assets/img/mas.png";
const decreaseButtonImg = process.env.PUBLIC_URL + "/assets/img/eliminar.png";

const CheckOut = () => {
  const { cartItems, setCartItems } = useContext(CheckOutContainer);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const removeItem = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.cantidad > 1) {
          return { ...item, cantidad: item.cantidad - 1 };
        } else {
          return null;
        }
      }
      return item;
    });
  
    const updatedItemsWithoutNull = updatedItems.filter((item) => item !== null);
  
    setCartItems(updatedItemsWithoutNull);
  };  

  const increaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
    setTotalPrice(totalPrice);
  };

  const finalizarCompra = () => {
    // Lógica para finalizar la compra
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
          <h4 style={{fontWeight: "bold"}} >Total a pagar : $ {totalPrice} USD</h4>
          <div className="checkout-actions">
            <button
              variant="secondary"
              className="checkout-button"
              onClick={() => setCartItems([])}
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
