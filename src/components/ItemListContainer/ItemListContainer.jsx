import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    // Determinar qué función usar para obtener los productos en función de si hay una categoría seleccionada o no
    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProductos;

    funcionProductos(idCategoria)
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));
  }, [idCategoria]);

  // Determinar el título de la categoría en función de si hay una categoría seleccionada o no
  const categoriaTitle = idCategoria
    ? idCategoria.charAt(0).toUpperCase() + idCategoria.slice(1)
    : "Nuestros productos";

  // Obtener todos los productos si no hay una categoría seleccionada
  useEffect(() => {
    if (!idCategoria) {
      getProductos()
        .then((res) => setProductos(res))
        .catch((error) => console.log(error));
    }
  }, [idCategoria]);

  return (
    <div className="item-list-container">
      <div className="categorias-container">
        <h3 className="categorias">{categoriaTitle}</h3>
      </div>
      <div className="line"></div>
      <div className="container-productos">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
