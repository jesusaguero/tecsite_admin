import React, { useState } from 'react';

const AdminPanel = () => {
  const [nombrePolideportivo, setNombrePolideportivo] = useState('');

  const handleAgregarPolideportivo = () => {
    console.log('Agregar polideportivo:', nombrePolideportivo);
  };

  return (
    <div>
      <h2>Panel de Administración</h2>
      <form>
        <label>
          Nombre del Polideportivo:
          <input
            type="text"
            value={nombrePolideportivo}
            onChange={(e) => setNombrePolideportivo(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleAgregarPolideportivo}>
          Agregar Polideportivo
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
