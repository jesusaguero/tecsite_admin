import React, { useEffect, useState } from 'react';

const ActualizarPoli = () => {
  const [polideportivos, setPolideportivos] = useState([]);
  const [poliSeleccionado, setPoliSeleccionado] = useState(null);

  useEffect(() => {
    const fetchPolideportivos = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/adminapp/api/polideportivos/');
        if (response.ok) {
          const data = await response.json();
          setPolideportivos(data);
        } else {
          console.error('Error al obtener la lista de polideportivos:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPolideportivos();
  }, []);

  const handlePoliChange = (event) => {
    const idSeleccionado = parseInt(event.target.value, 10);
    const poli = polideportivos.find(item => item.id === idSeleccionado);
    setPoliSeleccionado(poli);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!poliSeleccionado) {
      console.error('Debes seleccionar un polideportivo para actualizar.');
      return;
    }
  };

  return (
    <div>
      <h1>Actualizar Polideportivo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Selecciona un polideportivo:
          <select onChange={handlePoliChange} value={poliSeleccionado ? poliSeleccionado.id : ''}>
            <option value="" disabled>Selecciona un polideportivo</option>
            {polideportivos.map(poli => (
              <option key={poli.id} value={poli.id}>{poli.nombre}</option>
            ))}
          </select>
        </label>

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default ActualizarPoli;
