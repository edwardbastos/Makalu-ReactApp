import React, { useContext } from 'react';
import { CheckOutContainer } from '../CheckOutContainer/CheckOutContainer';
import { Table, Button } from 'react-bootstrap';
import './CheckOut.css';

const CheckOut = () => {
  const { cartItems, setCartItems, totalQuantity, setTotalQuantity } = useContext(CheckOutContainer);

  const removeItem = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId && item.cantidad > 1) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    updateTotalQuantity(updatedItems);
  };

  const increaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    updateTotalQuantity(updatedItems);
  };

  const updateTotalQuantity = (items) => {
    const quantity = items.reduce((total, item) => total + item.cantidad, 0);
    setTotalQuantity(quantity);
  };

  const finalizarCompra = () => {
    // Lógica para finalizar la compra
  };

  return (
    <div className="checkout-container">
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>
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
                  <td>{item.precio}</td>
                  <td>{item.cantidad}</td>
                  <td>{item.precio * item.cantidad}</td>
                  <td>
                    <Button variant="secondary" onClick={() => increaseQuantity(item.id)}>
                      +
                    </Button>
                    <Button variant="secondary" onClick={() => removeItem(item.id)}>
                      -
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>Total: {totalQuantity}</p>
          <div className="checkout-actions">
            <Button variant="secondary" onClick={() => setCartItems([])}>
              Vaciar carrito
            </Button>
            <Button variant="secondary" onClick={finalizarCompra}>
              Finalizar compra
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
