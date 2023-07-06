import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from "react-bootstrap"; // Importar componentes de react-bootstrap

//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext';
//Importo el Hook useContext: 
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, describ, serial }) => {
  //1) Creamos un estado con la cantidad de productos agregados: 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext: 
  const { agregarProducto } = useContext(CarritoContext);

  //2) Creamos una función manejadora de la cantidad: 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados:" + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad: 
    const item = { id, nombre, precio, describ, serial };
    agregarProducto(item, cantidad);
  }

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
                Precio: ${precio}USD
              </Card.Text>
              <Card.Text>ID: {serial}</Card.Text>
            </div>
            <Card.Text className="descripcionProducto">{describ}</Card.Text>
            <Row className="inputCantidad"
              style={{ justifyContent: "flex-start" }}>
              {

              }
              {
                agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
              }
            </Row>
          </Card.Body>
        </Col>
      </Row>

    </Card>
  );



}

export default ItemDetail