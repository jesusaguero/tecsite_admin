import React, { useEffect, useState } from 'react';

const VerReservaLab = () => {
  const [reservasLab, setReservasLab] = useState([]);

  useEffect(() => {
    const fetchReservasLab = async () => {
      try {
        // Realiza una solicitud para obtener las reservas de laboratorios
        const response = await fetch('http://127.0.0.1:8000/adminapp/api/reservas_laboratorios/');
        const data = await response.json();
        setReservasLab(data);
      } catch (error) {
        console.error('Error fetching laboratory reservations:', error);
      }
    };

    fetchReservasLab();
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
        <h2 className="mb-4">Reservas de Laboratorios</h2>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre Laboratorio</th>
            </tr>
          </thead>
          <tbody>
            {reservasLab.map(reservaLab => (
              <tr key={reservaLab.id}>
                <td>{reservaLab.id}</td>
                <td>{reservaLab.nombreLaboratorio}</td>
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

export default VerReservaLab;