import React, { useEffect, useState } from 'react';

const VerLista = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a tu API
    fetch('http://127.0.0.1:8000/adminapp/api/laboratorios/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Laboratorios</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Pabellón</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.pabellon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerLista;
