import './ItemCount.css'
import { useState } from 'react'
import { Card, Button, Form, Row, Col } from "react-bootstrap"; // Importar componentes de react-bootstrap

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    const [inputCantidad, setInputCantidad] = useState(contador);

    // Actualizar la cantidad del producto según lo ingresado en el campo de formulario
    
    const CambiarCantidad = (event) => {
        const cantidad = Number(event.target.value);            
        setInputCantidad(cantidad);
        if (cantidad >= inicial && cantidad <= stock) {
          setContador(cantidad);
        }
      };
      
    return (
        <>
            {/* <div>
                <button className='miBtn' onClick={decrementar}> - </button>
                <strong> {contador} </strong>
                <button className='miBtn' onClick={incrementar}> + </button>
            </div>
            <button className='miBtn' onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button> */}

            <Col md={2}>
                <Form.Group controlId="cantidad">
                    <Form.Label>Cantidad:</Form.Label>
                    <Form.Control
                        type="number"
                        value={stock}
                        min="1"
                        onChange={CambiarCantidad}
                    />
                </Form.Group>
            </Col>
            <Col md={2}>
                <Button
                    className="btnAgregarCarrito"
                    onClick={() => funcionAgregar(contador)}> Agregar al Carrito
                </Button>
            </Col>
        </>
    )
}

export default ItemCount