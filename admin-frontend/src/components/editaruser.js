import React, { useEffect, useState } from 'react';

const EditarUser = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [userSeleccionado, setUserSeleccionado] = useState({ id: null, codigo: '' });
  const [nuevoCodigo, setNuevoCodigo] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/adminapp/api/usuarios/');
        if (response.ok) {
          const data = await response.json();
          setUsuarios(data);
        } else {
          console.error('Error al obtener la lista de usuarios:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleUserChange = (event) => {
    console.log('handleUserChange:', event.target.value);
    console.log('userSeleccionado:', userSeleccionado);
    console.log('nuevoCodigo:', nuevoCodigo);
    console.log('nuevaContrasena:', nuevaContrasena);
    const codigoSeleccionado = event.target.value;
    const user = usuarios.find(item => item.codigo === codigoSeleccionado);
    setUserSeleccionado({ id: user ? user.id : null, codigo: codigoSeleccionado });

    setNuevoCodigo(user ? user.codigo : '');
    setNuevaContrasena(user ? user.contrasena : '');
  };

  const handleCodigoChange = (event) => {
    setNuevoCodigo(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setNuevaContrasena(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log('handleSubmit');
    event.preventDefault();

    if (!userSeleccionado.id) {
      setMensaje('Debes seleccionar un usuario para actualizar.');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/adminapp/api/usuarios/${userSeleccionado.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codigo: nuevoCodigo, contrasena: nuevaContrasena }),
      });

      if (response.ok) {
        setMensaje('Usuario actualizado exitosamente');
        setUserSeleccionado({ id: null });
        setNuevoCodigo('');
        setNuevaContrasena('');
      } else {
        console.error(`Error al actualizar usuario: ${response.statusText}`);

        try {
          const responseData = await response.json();
          console.error('Datos de la respuesta:', responseData);
        } catch (jsonError) {
          console.error('Error al analizar JSON de la respuesta:', jsonError);
        }

        setMensaje(`Error al actualizar usuario: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error en handleSubmit:', error);
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
        <h1>Editar Usuario</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userSelect" className="form-label">
              Selecciona un usuario:
            </label>
            <select
              className="form-select"
              id="userSelect"
              onChange={handleUserChange}
              value={userSeleccionado ? userSeleccionado.codigo : ''}
            >
              <option value="" disabled>Selecciona un usuario</option>
              {usuarios.map(user => (
                <option key={user.codigo} value={user.codigo}>{user.codigo}</option>
              ))}
            </select>
          </div>

          {userSeleccionado && (
            <>
              <div className="mb-3">
                <label htmlFor="nuevoCodigo" className="form-label">
                  Nuevo código:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nuevoCodigo"
                  value={nuevoCodigo}
                  onChange={handleCodigoChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="nuevaContrasena" className="form-label">
                  Nueva contraseña:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="nuevaContrasena"
                  value={nuevaContrasena}
                  onChange={handleContrasenaChange}
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

export default EditarUser;
