import React, { useState } from 'react';

const AgregarPoli = () => {
  const [nuevoPoli, setNuevoPoli] = useState({
    nombre: '',
  });

  const [mensaje, setMensaje] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevoPoli((prevState) => ({
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
        setMensaje('Polideportivo agregado exitosamente');
        setNuevoPoli({ nombre: '' });
      } else {
        setMensaje(`Error al agregar polideportivo: ${response.statusText}`);
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
        <h1>Agregar Polideportivo</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={nuevoPoli.nombre}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Agregar
          </button>
        </form>
        {mensaje && (
          <div className={`alert ${mensaje.includes('éxito') ? 'alert-success' : 'alert-success'} mt-3`} role="alert">
            {mensaje}
          </div>
        )}
        <div className="button-group">
          <a href="/"className="btn btn-lg btn-primary mt-3">Regresar</a>
        </div>
      </div>
    </div>
  );
};

export default AgregarPoli;
