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
      <h1>Lista de Elementos</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default VerLista;