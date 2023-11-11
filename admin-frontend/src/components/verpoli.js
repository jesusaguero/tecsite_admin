import React, { useEffect, useState } from 'react';

const Verpoli = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/adminapp/api/polideportivos/');
        const jsonData = await response.json();
        setData(jsonData);
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
      <h1>Lista de Polideportivos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Verpoli;
