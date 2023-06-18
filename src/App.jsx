import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/CheckOut/CheckOut';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CheckOutProvider } from './components/CheckOutContainer/CheckOutContainer';


function App() {
  return (
    <Router>
      <CheckOutProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route exact path="/carrito" element={<Cart />} />
      </Routes>
      </CheckOutProvider>
    </Router>
  );
}

export default App;
