import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';


const VerReservaPoli = () => {
  const [reservasPoli, setReservasPoli] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [polideportivos, setPolideportivos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(currentDate.toISOString().split('T')[0]);
  const [llegoReserva, setLlegoReserva] = useState({});
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  
  const isReservaDelDiaActual = (fecha) => {
    const reservaDate = new Date(fecha);
    const currentDateString = currentDate.toISOString().split('T')[0];
    return reservaDate.toISOString().split('T')[0] === currentDateString;
  };
  
  const filteredReservas = reservasPoli.filter(reservaPoli => {
    const reservaDate = new Date(reservaPoli.fecha);
    const selectedDateObject = new Date(selectedDate);
    return reservaDate.toISOString().split('T')[0] === selectedDateObject.toISOString().split('T')[0];
  });

  const handleLlegoChange = (id) => {
    setLlegoReserva((prevLlegoReserva) => ({
      ...prevLlegoReserva,
      [id]: !prevLlegoReserva[id],
    }));
  };
  
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

  const isReservaPasada = (fecha) => {
    const reservaDate = new Date(fecha);
    return reservaDate < currentDate;
  };
  

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
        
        <div className="mb-3">
          <label htmlFor="dateFilter" className="form-label">Filtrar por fecha:</label>
          <input
            type="date"
            id="dateFilter"
            className="form-control"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>

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
          {filteredReservas.map((reservaPoli) => {
  const horarioEncontrado = horarios.find((horario) => horario.id === reservaPoli.Horario);
  const polideportivoEncontrado = polideportivos.find((polideportivo) => polideportivo.id === reservaPoli.polideportivo);
  const usuarioEncontrado = usuarios.find((usuario) => usuario.id === reservaPoli.Usuario);
  const reservaPasada = isReservaPasada(reservaPoli.fecha);
  
  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    doc.text('Detalle de Reservas de Polideportivos', 20, 10);
    doc.autoTable({
      head: [['Fecha de reserva', 'Hora Inicio', 'Hora Fin', 'Nombre del polideportivo', 'Cod. Estudiante', 'Llegó']],
      body: filteredReservas.map((reservaPoli) => {
        const horarioEncontrado = horarios.find((horario) => horario.id === reservaPoli.Horario);
        const polideportivoEncontrado = polideportivos.find((polideportivo) => polideportivo.id === reservaPoli.polideportivo);
        const usuarioEncontrado = usuarios.find((usuario) => usuario.id === reservaPoli.Usuario);
        const reservaPasada = isReservaPasada(reservaPoli.fecha);

        return [
          reservaPoli.fecha,
          horarioEncontrado ? horarioEncontrado.hora_inicio : 'N/A',
          horarioEncontrado ? horarioEncontrado.hora_fin : 'N/A',
          polideportivoEncontrado ? polideportivoEncontrado.nombre : 'N/A',
          usuarioEncontrado ? usuarioEncontrado.codigo : 'N/A',
          llegoReserva[reservaPoli.id] ? 'Sí' : 'No',
        ];
      }),
    });

    doc.save('reservas_poli.pdf');
  };
  return (
    <tr
      key={reservaPoli.id}
      className={`${reservaPasada ? 'reserva-pasada' : ''} ${llegoReserva[reservaPoli.id] ? 'reserva-llego' : ''}`}
      disabled={reservaPasada}
    >
      <td>{reservaPoli.fecha}</td>
      <td>{horarioEncontrado ? horarioEncontrado.hora_inicio : 'N/A'}</td>
      <td>{horarioEncontrado ? horarioEncontrado.hora_fin : 'N/A'}</td>
      <td>{polideportivoEncontrado ? polideportivoEncontrado.nombre : 'N/A'}</td>
      <td>{usuarioEncontrado ? usuarioEncontrado.codigo : 'N/A'}</td>
      <td>
        <input
          type="checkbox"
          checked={llegoReserva[reservaPoli.id] || false}
          onChange={() => handleLlegoChange(reservaPoli.id)}
          disabled={reservaPasada}
        />
        Llegó
      </td>
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
