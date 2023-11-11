import React, { useState } from 'react';

const AgregarPoli = () => {
  const [nuevoPoli, setNuevoPoli] = useState({
    nombre: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevoPoli(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/adminapp/api/polideportivos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoPoli),
      });

      if (response.ok) {
        console.log('Polideportivo agregado exitosamente');
      } else {
        console.error('Error al agregar polideportivo:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Agregar Polideportivo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={nuevoPoli.nombre} onChange={handleInputChange} />
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AgregarPoli;
