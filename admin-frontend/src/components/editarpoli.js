import React, { useEffect, useState } from 'react';

const EditarPoli = () => {
  const [polideportivos, setPolideportivos] = useState([]);
  const [poliSeleccionado, setPoliSeleccionado] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

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

    // Inicializa el nuevoNombre con el nombre actual del polideportivo seleccionado
    setNuevoNombre(poli ? poli.nombre : '');
  };

  const handleNombreChange = (event) => {
    setNuevoNombre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!poliSeleccionado) {
      setMensaje('Debes seleccionar un polideportivo para actualizar.');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/adminapp/api/polideportivos/${poliSeleccionado.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: nuevoNombre }),
      });

      if (response.ok) {
        setMensaje('Polideportivo actualizado exitosamente');
        // Puedes limpiar el formulario después de actualizar exitosamente
        setPoliSeleccionado(null);
        setNuevoNombre('');
      } else {
        setMensaje(`Error al actualizar polideportivo: ${response.statusText}`);
      }
    } catch (error) {
      setMensaje(`Error: ${error.message}`);
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
      <div className="container mt-4">
        <h1>Actualizar Polideportivo</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="poliSelect" className="form-label">
              Selecciona un polideportivo:
            </label>
            <select
              className="form-select"
              id="poliSelect"
              onChange={handlePoliChange}
              value={poliSeleccionado ? poliSeleccionado.id : ''}
            >
              <option value="" disabled>Selecciona un polideportivo</option>
              {polideportivos.map(poli => (
                <option key={poli.id} value={poli.id}>{poli.nombre}</option>
              ))}
            </select>
          </div>

          {poliSeleccionado && (
  <div className="mb-3">
    <label htmlFor="nuevoNombre" className="form-label">
      Nuevo nombre:
    </label>
    <input
            type="text"
            className="form-control"
            id="nuevoNombre"
            value={nuevoNombre}
            onChange={handleNombreChange}
            />
        </div>
      )}


          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
        </form>

        {mensaje && (
          <div className={`alert ${mensaje.includes('éxito') ? 'alert-success' : 'alert-success'} mt-3`} role="alert">
            {mensaje}
          </div>
        )}
          <div className="button-group">
          <a href="/" className="btn btn-lg btn-primary mt-3">Regresar</a>
        </div>
      </div>
    </div>
  );
};

export default EditarPoli;
