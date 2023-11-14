import React, { useState } from 'react';

const AgregarUser = () => {
  const [nuevoUser, setNuevoUser] = useState({
    codigo: '',
    contrasena: '',
  });

  const [mensaje, setMensaje] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevoUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/adminapp/api/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUser),
      });

      if (response.ok) {
        setMensaje('Usuario agregado exitosamente');
        setNuevoUser({ codigo: '', contrasena: '' });
      } else {
        setMensaje(`Error al agregar usuario: ${response.statusText}`);
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
        <h1>Agregar Usuario</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="codigo" className="form-label">
              Código:
            </label>
            <input
              type="text"
              className="form-control"
              id="codigo"
              name="codigo"
              value={nuevoUser.codigo}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              Contraseña:
            </label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              name="contrasena"
              value={nuevoUser.contrasena}
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
          <a href="/" className="btn btn-lg btn-primary mt-3">Regresar</a>
        </div>
      </div>
    </div>
  );
};

export default AgregarUser;
