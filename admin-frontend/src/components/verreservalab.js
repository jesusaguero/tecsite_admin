import React, { useEffect, useState } from 'react';

const VerReservaLab = () => {
  const [reservasLab, setReservasLab] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [laboratorios, setLaboratorios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener reservas de laboratorios
        const reservasResponse = await fetch('http://127.0.0.1:8000/adminapp/api/reservalaboratorios/');
        const reservasData = await reservasResponse.json();
        setReservasLab(reservasData);

        // Obtener datos de horarios
        const horariosResponse = await fetch('http://127.0.0.1:8000/adminapp/api/horarios/');
        const horariosData = await horariosResponse.json();
        setHorarios(horariosData);

        // Obtener datos de laboratorios
        const laboratoriosResponse = await fetch('http://127.0.0.1:8000/adminapp/api/laboratorios/');
        const laboratoriosData = await laboratoriosResponse.json();
        setLaboratorios(laboratoriosData);

        // Obtener datos de usuarios
        const usuariosResponse = await fetch('http://127.0.0.1:8000/adminapp/api/usuarios/');
        const usuariosData = await usuariosResponse.json();
        setUsuarios(usuariosData);
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
        <h2 className="mb-4">Reservas de Laboratorios</h2>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Fecha de reserva</th>
              <th scope="col">Hora Inicio</th>
              <th scope="col">Hora Fin</th>
              <th scope="col">Nombre del laboratorio</th>
              <th scope="col">Cod. Estudiante</th>
            </tr>
          </thead>
          <tbody>
          {reservasLab.map(reservaLab => (
            <tr key={reservaLab.id}>
              <td>{reservaLab.fecha}</td>
              <td>{horarios.find(horario => horario.id === reservaLab.horario)?.hora_inicio}</td>
              <td>{horarios.find(horario => horario.id === reservaLab.horario)?.hora_fin}</td>
              <td>{laboratorios.find(laboratorio => laboratorio.id === reservaLab.laboratorio)?.nombre}</td>
              <td>{usuarios.find(usuario => usuario.id === reservaLab.usuario)?.codigo}</td>
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