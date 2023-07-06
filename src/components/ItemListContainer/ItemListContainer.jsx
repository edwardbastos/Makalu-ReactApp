import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  const categoriaTitle = idCategoria
      ? idCategoria.charAt(0).toUpperCase() + idCategoria.slice(1)
      : "Nuestros productos";

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [idCategoria])

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
}

export default ItemListContainer