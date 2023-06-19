import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import { Card, Button, Form } from 'react-bootstrap';
import { CheckOutContainer } from '../CheckOutContainer/CheckOutContainer';

const ItemDetail = ({ id, nombre, precio, img, descripcion }) => {
  const [cantidad, setCantidad] = useState(1);
  const { cartItems, setCartItems, setTotalQuantity } = useContext(CheckOutContainer);

  const handleCantidadChange = (event) => {
    setCantidad(Number(event.target.value));
  };

  const handleAgregarCarrito = () => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      const updatedItems = cartItems.map(item => {
        if (item.id === id) {
          return { ...item, cantidad: item.cantidad + cantidad };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { id, nombre, precio, cantidad }]);
    }
    setTotalQuantity(prevTotalQuantity => prevTotalQuantity + cantidad);
  };
  

  return (
    <Card className="contenedorItem">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className="productoImagenContainer mx-auto">
            <div className="zoom">
              <img src={img} alt={nombre} className="productoImagen" />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <Card.Body className="detalleProducto">
            <Card.Title className="tituloProducto">{nombre}</Card.Title>
            <div className="precioIdContainer">
              <Card.Text className="precioProducto">Precio: {precio}</Card.Text>
              <Card.Text>ID: {id}</Card.Text>
            </div>
            <Card.Text className="descripcionProducto">{descripcion}</Card.Text>
            <div className="inputCantidad">
              <Form.Group controlId="cantidad">
                <Form.Label>Cantidad:</Form.Label>
                <Form.Control
                  type="number"
                  value={cantidad}
                  min="1"
                  onChange={handleCantidadChange}
                />
              </Form.Group>
            </div>
            <Button className="btnAgregarCarrito" onClick={handleAgregarCarrito}>
              Agregar al carrito
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default ItemDetail;
