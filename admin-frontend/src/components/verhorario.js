import React, { useEffect, useState } from 'react';

const VerHorario = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/adminapp/api/horarios/');
        const horariosData = await response.json();
        setData(horariosData);
      } catch (error) {
        console.error('Error fetching horarios:', error);
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
      <h2>Listado de Horarios</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Hora de Inicio</th>
            <th scope="col">Hora de Fin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((horario) => (
            <tr key={horario.id}>
              <td>{horario.hora_inicio}</td>
              <td>{horario.hora_fin}</td>
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

export default VerHorario;
