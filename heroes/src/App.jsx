import React, { useState } from 'react';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';
import img from './assets/img/spiderman.png'; 
import './App.css'; 

function App() {
  // Estado para el encabezado (Requisito Adicional)
  const [appHeader, setAppHeader] = useState("¡Bienvenido a la Liga de Superhéroes!");

  // Estado para la lista de superhéroes (Bonus Maestro)
  const [superheroes, setSuperheroes] = useState([]);

  // Función que agrega el héroe y cambia el encabezado
  const handleAddSuperhero = (formData) => {
    // 1. Agregar el nuevo superhéroe a la lista
    const newSuperhero = {
      ...formData,
      id: Date.now(), // ID único
    };
    setSuperheroes((prevSuperheroes) => [...prevSuperheroes, newSuperhero]);

    // 2. Cambiar el encabezado de la página (Bonus Maestro)
    setAppHeader("¡Registro Exitoso! Superhéroes Registrados:");
  };

  return (
    <div className="app-container">
      <h1>{appHeader}</h1>
      <hr />
      
      {/* CLAVE: La key estática evita que React trate el formulario como nuevo en cada renderizado */}
      <SuperheroForm 
        key="superhero-registration-form-stable" 
        onAddSuperhero={handleAddSuperhero} 
      />
      
      {/* Renderizado de la lista (Bonus Maestro) */}
      <SuperheroList heroes={superheroes} /> 

      {/* Visualización de la imagen opcional */}
      <div className='superhero-image-container'>
        <img src={img} alt="Superhéroe corriendo" className="superhero-img"/> 
      </div>
    </div>
  );
}

export default App;