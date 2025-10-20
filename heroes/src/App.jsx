import React, { useState } from 'react';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';
import img from './assets/img/spiderman.png'; 
import './App.css'; 

function App() {
  // Estado para el encabezado 
  const [appHeader, setAppHeader] = useState("¡Bienvenido a la Liga de Superhéroes!");

  // Estado para la lista de superhéroes 
  const [superheroes, setSuperheroes] = useState([]);

  // Función que agrega el héroe y cambia el encabezado
  const handleAddSuperhero = (formData) => {
    // Agrega el nuevo superhéroe a la lista
    const newSuperhero = {
      ...formData,
      id: Date.now(),
    };
    setSuperheroes((prevSuperheroes) => [...prevSuperheroes, newSuperhero]);

    //Cambia el encabezado de la página 
    setAppHeader("¡Registro Exitoso! Superhéroes Registrados:");
  };

  return (
    <div className="app-container">
      <h1>{appHeader}</h1>
      <hr />
      
      <SuperheroForm 
        key="superhero-registration-form-stable" 
        onAddSuperhero={handleAddSuperhero} 
      />
      
      {/* Renderizado de la lista */}
      <SuperheroList heroes={superheroes} /> 

      {/* Visualización de la imagen */}
      <div className='superhero-image-container'>
        <img src={img} alt="Superhéroe corriendo" className="superhero-img"/> 
      </div>
    </div>
  );
}

export default App;