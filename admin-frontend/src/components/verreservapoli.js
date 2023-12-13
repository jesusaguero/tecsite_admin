import React, { useEffect, useState } from 'react';

const VerReservaPoli = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/adminapp/api/reservapolideportivos/');
        const data = await response.json();
        setReservas(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservas();
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
        <h2 className="mb-4">Reservas de Polideportivos</h2>
        <table className="table table-striped table-bordered">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Nombre Polideportivo</th>
      <th scope="col">Fecha</th>
      <th scope="col">Usuario</th>

    </tr>
  </thead>
  <tbody>
    {reservas.map(item => (
      <tr key={item.id}>
        <td>{item.nombrePolideportivo}</td>
        <td>{item.fecha}</td> 

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

export default VerReservaPoli;