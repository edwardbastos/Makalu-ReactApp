import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext';
//Importo el Hook useContext: 
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, describ }) => {
  //1) Creamos un estado con la cantidad de productos agregados: 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext: 
  const {agregarProducto} = useContext(CarritoContext);

  //2) Creamos una función manejadora de la cantidad: 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados:" + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad: 
    const item = {id, nombre, precio, describ}; 
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p> Descripción: {describ}</p>
      <img src={img} alt={nombre} />
      {
        //Acá empleamos la lógica del montaje y desmontaje de componentes: 
      }
      {
        agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
 /* 
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
  );*/



}

export default ItemDetail