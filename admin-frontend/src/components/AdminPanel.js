import React, { useState } from 'react';

const AdminPanel = () => {
  const [nombrePolideportivo, setNombrePolideportivo] = useState('');

  const handleAgregarPolideportivo = () => {
    // Lógica para enviar la información del nuevo polideportivo al servidor
    console.log('Agregar polideportivo:', nombrePolideportivo);
    // Puedes usar Axios u otra biblioteca para enviar la solicitud al servidor
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
      {/* Puedes agregar aquí una tabla u otros elementos para mostrar y gestionar polideportivos existentes */}
    </div>
  );
};

export default AdminPanel;
