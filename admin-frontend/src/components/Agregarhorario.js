import React, { useState } from 'react';

const AgregarHorario = () => {
  const [nuevoHorario, setNuevoHorario] = useState({
    hora_inicio: '',
    hora_fin: '',
  });

  const [mensaje, setMensaje] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoHorario({
      ...nuevoHorario,
      [name]: value,
    });
  };

  const agregarHorario = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/adminapp/api/horarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoHorario),
      });

      if (response.ok) {
        setMensaje('Horario agregado exitosamente.');
      } else {
        setMensaje('Error al agregar el horario. Por favor, verifica los datos e intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al agregar el horario:', error);
      setMensaje('Error al agregar el horario. Por favor, intenta nuevamente más tarde.');
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
      <h2>Agregar Nuevo Horario</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="hora_inicio" className="form-label">Hora de Inicio:</label>
          <input
            type="time"
            className="form-control"
            id="hora_inicio"
            name="hora_inicio"
            value={nuevoHorario.hora_inicio}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hora_fin" className="form-label">Hora de Fin:</label>
          <input
            type="time"
            className="form-control"
            id="hora_fin"
            name="hora_fin"
            value={nuevoHorario.hora_fin}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-success" onClick={agregarHorario}>
          Agregar Horario
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


export default AgregarHorario;
