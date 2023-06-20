import React from "react";
import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock"; // Importar la función getUnProducto desde el módulo asyncmock
import ItemDetail from "../ItemDetail/ItemDetail"; // Importar el componente ItemDetail
import { useParams } from "react-router-dom"; // Importar el hook useParams para obtener los parámetros de la URL

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null); // Estado para almacenar el producto
  const { idItem } = useParams(); // Obtener el parámetro idItem de la URL utilizando el hook useParams

  useEffect(() => {
    getUnProducto(idItem) // Obtener el producto utilizando el idItem
      .then((res) => setProducto(res)) // Establecer el producto en el estado
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div>
      <ItemDetail {...producto} />{" "}
      {/* Pasar las propiedades del producto al componente ItemDetail */}
    </div>
  );
};

export default ItemDetailContainer;
