import React, { useEffect, useState } from 'react';

const ActualizarLaboratorio = ({ match }) => {
  const [laboratorio, setLaboratorio] = useState({});
  const [nombre, setNombre] = useState('');
  const [pabellon, setPabellon] = useState('');

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/adminapp/api/laboratorios/${match.params.id}/`)
      .then(response => response.json())
      .then(data => {
        setLaboratorio(data);
        setNombre(data.nombre);
        setPabellon(data.pabellon);
      })
      .catch(error => console.error('Error fetching laboratorio details:', error));
  }, [match.params.id]);

  const handleActualizar = () => {
    fetch(`http://127.0.0.1:8000/adminapp/api/laboratorios/${match.params.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, pabellon }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Laboratorio actualizado:', data);
      })
      .catch(error => console.error('Error al actualizar el laboratorio:', error));
  };

    return (
        <div>
            <h1>Actualizar Laboratorio</h1>
            <form>
        <label>
            Nombre:
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Pabellón:
          <input type="text" value={pabellon} onChange={e => setPabellon(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleActualizar}>
          Actualizar Laboratorio
        </button>
      </form>
    </div>
  );
};

export default ActualizarLaboratorio;

