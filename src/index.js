import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { CheckOutProvider } from './components/CheckOutContainer/CheckOutContainer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <CheckOutProvider>
    <App />
  </CheckOutProvider>,
  //</React.StrictMode>
);


