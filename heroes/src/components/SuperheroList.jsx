import React from 'react';

function SuperheroList({ heroes }) {
  if (heroes.length === 0) {
    return <p className='no-superheroes-msg'>¡Aún no hay superhéroes registrados! Sé el primero.</p>;
  }

  return (
    <div className="superhero-list-container">
      <h3>Superhéroes Registrados:</h3>
      <div className="superhero-cards">
        {/* Bonus Maestro: Mostrar cada superhéroe usando el método map */}
        {heroes.map((hero) => (
          <div key={hero.id} className="superhero-card">
            <h4>{hero.nombre} {hero.apellido}</h4>
            <p>📧 {hero.correo}</p>
            {/* Aviso: En una aplicación real, NUNCA muestres la contraseña */}
            <p className='secret-data'>🔓 Contraseña registrada (Ultra Secreta)</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuperheroList;