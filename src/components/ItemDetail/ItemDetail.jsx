import React from 'react';
import './ItemDetail.css';
import { Card, Button } from 'react-bootstrap';

const ItemDetail = ({ id, nombre, precio, img }) => {
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
            <Card.Text className="precioProducto">Precio: {precio}</Card.Text>
            <Card.Text>ID: {id}</Card.Text>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?
            </Card.Text>
            <Button variant="primary">Agregar al carrito</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default ItemDetail;
