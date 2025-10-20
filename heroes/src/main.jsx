import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Importa el archivo CSS global
import './App.css'; // Asegúrate de que esta ruta sea correcta

// Encuentra el elemento raíz donde se montará la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  // ⚡️ CLAVE: Usa <React.StrictMode>
  // Si todo el código anterior (SuperheroForm.jsx y App.jsx) está correctamente
  // optimizado, el StrictMode no causará problemas y es buena práctica.
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);