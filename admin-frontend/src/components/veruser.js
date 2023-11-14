import React, { useEffect, useState } from 'react';

const VerUser = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/adminapp/api/usuarios/');
        const jsonData = await response.json();
        setUsuarios(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
        <h2 className="mb-4">Lista de Usuarios</h2>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Contraseña</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(user => (
              <tr key={user.codigo}>
                <td>{user.codigo}</td>
                <td>{user.contrasena}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-group">
          <a href="/" className="btn btn-lg btn-primary mt-3">Regresar</a>
        </div>
      </div>
    </div>
  );
};

export default VerUser;
