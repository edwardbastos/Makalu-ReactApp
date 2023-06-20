import React, { useState, useContext } from "react";
import "./ItemDetail.css"; // Importar estilos CSS
import { Card, Button, Form, Row, Col } from "react-bootstrap"; // Importar componentes de react-bootstrap
import { CartContext } from "../CartContext/CartContext"; // Importar el contexto CartContext

const ItemDetail = ({ id, nombre, precio, img, descripcion }) => {
  const [cantidad, setCantidad] = useState(1); // Estado para la cantidad del producto
  const { cartItems, setCartItems, setTotalQuantity } = useContext(CartContext); // Obtener los elementos del carrito y las funciones para modificarlo del contexto CartContext

  const handleCantidadChange = (event) => {
    setCantidad(Number(event.target.value)); // Actualizar la cantidad del producto según lo ingresado en el campo de formulario
  };

  const handleAgregarCarrito = () => {
    const existingItem = cartItems.find((item) => item.id === id); // Verificar si el producto ya está en el carrito
    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, cantidad: item.cantidad + cantidad }; // Actualizar la cantidad del producto existente en el carrito
        }
        return item;
      });
      setCartItems(updatedItems); // Actualizar los elementos del carrito con la cantidad actualizada
    } else {
      setCartItems([...cartItems, { id, nombre, precio, cantidad }]); // Agregar un nuevo producto al carrito
    }
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + cantidad); // Actualizar la cantidad total del carrito
  };

  return (
    <Card className="contenedorItem">
      <Row>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="productoImagenContainer mx-auto">
            <div className="zoom">
              <img src={img} alt={nombre} className="productoImagen" />
            </div>
          </div>
        </Col>
        <Col md={8}>
          <Card.Body className="detalleProducto">
            <Card.Title className="tituloProducto">{nombre}</Card.Title>
            <div className="precioIdContainer">
              <Card.Text className="precioProducto">
                Precio: $ {precio} USD
              </Card.Text>
              <Card.Text>ID: {id}</Card.Text>
            </div>
            <Card.Text className="descripcionProducto">{descripcion}</Card.Text>
            <Row
              className="inputCantidad"
              style={{ justifyContent: "flex-start" }}
            >
              <Col md={2}>
                <Form.Group controlId="cantidad">
                  <Form.Label>Cantidad:</Form.Label>
                  <Form.Control
                    type="number"
                    value={cantidad}
                    min="1"
                    onChange={handleCantidadChange}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Button
                  className="btnAgregarCarrito"
                  onClick={handleAgregarCarrito}
                >
                  Agregar al carrito
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
