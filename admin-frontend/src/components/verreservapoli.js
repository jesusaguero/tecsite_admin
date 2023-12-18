import React, { useEffect, useState } from 'react';

const VerReservaPoli = () => {
  const [reservasPoli, setReservasPoli] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [polideportivos, setPolideportivos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservasResponse = await fetch('http://127.0.0.1:8000/adminapp/api/reservapolideportivos/');
        const reservasPoliData = await reservasResponse.json();
        setReservasPoli(reservasPoliData);
  
        const horariosResponse = await fetch('http://127.0.0.1:8000/adminapp/api/horarios/');
        const horariosData = await horariosResponse.json();
        setHorarios(horariosData);
  
        const polideportivosResponse = await fetch('http://127.0.0.1:8000/adminapp/api/polideportivos/');
        const polideportivosData = await polideportivosResponse.json();
        setPolideportivos(polideportivosData);
  
        const usuariosResponse = await fetch('http://127.0.0.1:8000/adminapp/api/usuarios/');
        const usuariosData = await usuariosResponse.json();
        setUsuarios(usuariosData);
  
        setLoading(false);
  
        console.log('Datos cargados correctamente:');
        console.log('Reservas:', reservasPoliData);
        console.log('Horarios:', horariosData);
        console.log('Polideportivos:', polideportivosData);
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
        <h2 className="mb-4">Reservas de Polideportivos</h2>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Fecha de reserva</th>
              <th scope="col">Hora Inicio</th>
              <th scope="col">Hora Fin</th>
              <th scope="col">Nombre del polideportivo</th>
              <th scope="col">Cod. Estudiante</th>
            </tr>
          </thead>
          <tbody>
          {reservasPoli.map(reservaPoli => {
            const horarioEncontrado = horarios.find(horario => horario.id === reservaPoli.Horario);
            const polideportivoEncontrado = polideportivos.find(polideportivo => polideportivo.id === reservaPoli.polideportivo);
            const usuarioEncontrado = usuarios.find(usuario => usuario.id === reservaPoli.Usuario);

            return (
              <tr key={reservaPoli.id}>
                <td>{reservaPoli.fecha}</td>
                <td>{horarioEncontrado ? horarioEncontrado.hora_inicio : 'N/A'}</td>
                <td>{horarioEncontrado ? horarioEncontrado.hora_fin : 'N/A'}</td>
                <td>{polideportivoEncontrado ? polideportivoEncontrado.nombre : 'N/A'}</td>
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

export default VerReservaPoli;
