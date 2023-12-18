import React, { useEffect, useState } from 'react';

const Editarlab = () => {
  const [laboratorios, setLaboratorios] = useState([]);
  const [labSeleccionado, setLabSeleccionado] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoPabellon, setNuevoPabellon] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchLaboratorios = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/adminapp/api/laboratorios/');
        if (response.ok) {
          const data = await response.json();
          setLaboratorios(data);
        } else {
          console.error('Error al obtener la lista de laboratorios:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchLaboratorios();
  }, []);

  const handleLabChange = (event) => {
    const idSeleccionado = parseInt(event.target.value, 10);
    const lab = laboratorios.find(item => item.id === idSeleccionado);
    setLabSeleccionado(lab);

    setNuevoNombre(lab ? lab.nombre : '');
    setNuevoPabellon(lab ? lab.pabellon : '');
  };

  const handleNombreChange = (event) => {
    setNuevoNombre(event.target.value);
  };

  const handlePabellonChange = (event) => {
    setNuevoPabellon(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!labSeleccionado) {
      setMensaje('Debes seleccionar un laboratorio para actualizar.');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/adminapp/api/laboratorios/${labSeleccionado.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: nuevoNombre, pabellon: nuevoPabellon }),
      });

      if (response.ok) {
        setMensaje('Laboratorio actualizado exitosamente');
        setLabSeleccionado(null);
        setNuevoNombre('');
        setNuevoPabellon('');
      } else {
        setMensaje(`Error al actualizar laboratorio: ${response.statusText}`);
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
        <h1>Editar Laboratorio</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="labSelect" className="form-label">
              Selecciona un laboratorio:
            </label>
            <select
              className="form-select"
              id="labSelect"
              onChange={handleLabChange}
              value={labSeleccionado ? labSeleccionado.id : ''}
            >
              <option value="" disabled>Selecciona un laboratorio</option>
              {laboratorios.map(lab => (
                <option key={lab.id} value={lab.id}>
                  {lab.nombre}
                </option>
              ))}
            </select>
          </div>

          {labSeleccionado && (
            <>
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

              <div className="mb-3">
                <label htmlFor="nuevoPabellon" className="form-label">
                  Nuevo pabellón:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nuevoPabellon"
                  value={nuevoPabellon}
                  onChange={handlePabellonChange}
                />
              </div>
            </>
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

export default Editarlab;
