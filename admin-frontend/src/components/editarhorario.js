import React, { useEffect, useState } from 'react';

const EditarHorario = () => {
  const [horarios, setHorarios] = useState([]);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState({
    id: '',
    hora_inicio: '',
    hora_fin: '',
  });

  const [mensaje, setMensaje] = useState('');

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setHorarioSeleccionado({
      ...horarioSeleccionado,
      [e.target.name]: e.target.value,
    });
  };

  // Función para cargar la lista de horarios al montar el componente
  useEffect(() => {
    const cargarHorarios = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/adminapp/api/horarios/');
        const horariosData = await response.json();
        setHorarios(horariosData);
      } catch (error) {
        console.error('Error fetching horarios:', error);
      }
    };

    cargarHorarios();
  }, []);

  // Función para cargar el horario seleccionado al cambiar la selección en el formulario
  const handleSelectChange = (e) => {
    const horarioId = e.target.value;
    const horario = horarios.find((h) => h.id.toString() === horarioId);

    if (horario) {
      setHorarioSeleccionado({
        id: horario.id.toString(),
        hora_inicio: horario.hora_inicio,
        hora_fin: horario.hora_fin,
      });
    }
  };

  // Función para enviar la solicitud de edición al servidor
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:8000/adminapp/api/horarios/${horarioSeleccionado.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(horarioSeleccionado),
      });

      if (response.ok) {
        setMensaje('Horario editado exitosamente.');
      } else {
        setMensaje('Error al editar el horario.');
      }
    } catch (error) {
      console.error('Error editing horario:', error);
      setMensaje('Error al editar el horario.');
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
      <h2>Editar Horario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Seleccionar Horario:</label>
          <select onChange={handleSelectChange}>
            <option value="">Seleccione un horario</option>
            {horarios.map((h) => (
              <option key={h.id} value={h.id}>
                {h.hora_inicio} - {h.hora_fin}
              </option>
            ))}
          </select>
        </div>
        {horarioSeleccionado.id && (
          <>
            <div className="form-group">
              <label>ID:</label>
              <input type="text" className="form-control" name="id" value={horarioSeleccionado.id} readOnly />
            </div>
            <div className="form-group">
              <label>Hora de Inicio:</label>
              <input
                type="text"
                className="form-control"
                name="hora_inicio"
                value={horarioSeleccionado.hora_inicio}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Hora de Fin:</label>
              <input
                type="text"
                className="form-control"
                name="hora_fin"
                value={horarioSeleccionado.hora_fin}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Guardar Cambios
            </button>
          </>
        )}
      </form>
      {mensaje && <p>{mensaje}</p>}
      <div className="button-group">
          <a href="/" className="btn btn-lg btn-primary mt-3">Regresar</a>
        </div>
    </div>
  );
};

export default EditarHorario;
