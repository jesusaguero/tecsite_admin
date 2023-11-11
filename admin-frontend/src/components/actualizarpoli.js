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
    <header className="bg-dark text-white">
        <div className="container py-2">
            <div className="d-flex flex-wrap align-items-center justify-content-center">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none">
                    <img src="/logo.png" alt="TECSITE Logo" width="120" height="120" className="logo" />
                </a>
            </div>
        </div>
    </header>
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
