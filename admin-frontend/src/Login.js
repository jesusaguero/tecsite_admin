import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [codigo, setCodigo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/adminapp/api/login/', {
        codigo: codigo,
        contrasena: contrasena,
      });

      if (response.data.success) {
        // Redirigir o realizar acciones después del inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Código:
        <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;