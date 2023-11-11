import React, { useState } from 'react';

const AgregarLaboratorio = () => {
  const [nombre, setNombre] = useState('');
  const [pabellon, setPabellon] = useState('');

  const handleAgregar = () => {
    fetch('http://127.0.0.1:8000/adminapp/api/laboratorios/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, pabellon }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Laboratorio agregado:', data);
      })
      .catch(error => console.error('Error al agregar el laboratorio:', error));
  };

  return (
    <div>
      <h1>Agregar Laboratorio</h1>
      <form>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Pabellón:
          <input type="text" value={pabellon} onChange={e => setPabellon(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAgregar}>
          Agregar Laboratorio
        </button>
      </form>
    </div>
  );
};

export default AgregarLaboratorio;
