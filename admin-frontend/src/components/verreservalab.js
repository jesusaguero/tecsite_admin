import React, { useEffect, useState } from 'react';

const VerReservaLab = () => {
  const [reservasLab, setReservasLab] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [laboratorios, setLaboratorios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservasResponse = await fetch('http://127.0.0.1:8000/adminapp/api/reservalaboratorios/');
        const reservasLabData = await reservasResponse.json();
        setReservasLab(reservasLabData);

        const horariosResponse = await fetch('http://127.0.0.1:8000/adminapp/api/horarios/');
        const horariosData = await horariosResponse.json();
        setHorarios(horariosData);

        const laboratoriosResponse = await fetch('http://127.0.0.1:8000/adminapp/api/laboratorios/');
        const laboratoriosData = await laboratoriosResponse.json();
        setLaboratorios(laboratoriosData);

        const usuariosResponse = await fetch('http://127.0.0.1:8000/adminapp/api/usuarios/');
        const usuariosData = await usuariosResponse.json();
        setUsuarios(usuariosData);

        setLoading(false);
        console.log('Datos cargados correctamente:');
        console.log('Reservas:', reservasLabData);
        console.log('Horarios:', horariosData);
        console.log('Laboratorios:', laboratoriosData);
        console.log('Usuarios:', usuariosData);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

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
          {reservasLab.map(reservaLab => {
            const horarioEncontrado = horarios.find(horario => horario.id === reservaLab.Horario);
            const laboratorioEncontrado = laboratorios.find(laboratorio => laboratorio.id === reservaLab.laboratorio);
            const usuarioEncontrado = usuarios.find(usuario => usuario.id === reservaLab.Usuario);

            return (
              <tr key={reservaLab.id}>
                <td>{reservaLab.fecha}</td>
                <td>{horarioEncontrado ? horarioEncontrado.hora_inicio : 'N/A'}</td>
                <td>{horarioEncontrado ? horarioEncontrado.hora_fin : 'N/A'}</td>
                <td>{laboratorioEncontrado ? laboratorioEncontrado.nombre : 'N/A'}</td>
                <td>{usuarioEncontrado ? usuarioEncontrado.codigo : 'N/A'}</td>
              </tr>
            );
          })}

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