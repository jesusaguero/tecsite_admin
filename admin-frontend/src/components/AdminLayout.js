// AdminLayout.js
import React from 'react';
import CardDefault from './CardDefault';


const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <header className="bg-dark text-white">
        <div className="container py-2">
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <a href="/" className="d-flex align-items-center text-white text-decoration-none">
              <img src="/logo.png" alt="TECSITE Logo" width="120" height="120" className="logo" />
            </a>
          </div>
        </div>
      </header>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Bienvenido</h1>
        <p className="lead">Gracias por formar parte del TEAM TECSITE by Tecsup.</p>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
            <CardDefault
              title="Usuarios"
              imageSrc="/alumnos.png"
              imageWidth={400}
              imageHeight={300}
            />
        <div className="mt-3 text-center">
        <a href="/veruser" className="btn btn-primary mb-3">Ver lista</a>
        <a href="/Agregaruser" className="btn btn-success mb-3 mx-2">Agregar</a>
        <a href="/editaruser" className="btn btn-warning mb-3 mx-2">Editar</a>
        </div>
          </div>
          <div className="col-md-4">
            <CardDefault
              title="Laboratorios"
              imageSrc="/aulas.png"
              imageWidth={400}
              imageHeight={300}
            />
        <div className="mt-3 text-center">
        <a href="/verlab" className="btn btn-primary mb-3">Ver lista</a>
        <a href="/Agregarlab" className="btn btn-success mb-3 mx-2">Agregar</a>
        <a href="/editarlab" className="btn btn-warning mb-3 mx-2">Editar</a>
        </div>
          </div>
          <div className="col-md-4">
            <CardDefault
              title="Polideportivos"
              imageSrc="/polideportivo.png"
              imageWidth={400}
              imageHeight={300}
            />
        <div className="mt-3 text-center">
        <a href="/Verpoli" className="btn btn-primary mb-3">Ver lista</a>
        <a href="/Agregarpoli" className="btn btn-success mb-3 mx-2">Agregar</a>
        <a href="/editarpoli" className="btn btn-warning mb-3 mx-2">Editar</a>
        </div>
          </div>
          <div className="col-md-4">
            <CardDefault
              title="Horario"
              imageSrc="/calendar.png"
              imageWidth={380}
              imageHeight={300}
            />
        <div className="mt-3 text-center">
        <a href="/verhorario" className="btn btn-primary mb-3">Ver horarios</a>
        <a href="/Agregarhorario" className="btn btn-success mb-3 mx-2">Agregar</a>
        <a href="/editarhorario" className="btn btn-warning mb-3 mx-2">Editar</a>        </div>
          </div>
          <div className="col-md-4">
            <CardDefault
              title="Reserva Polideportivo"
              imageSrc="/polideportivobk.png"
              imageWidth={400}
              imageHeight={300}
            />
        <div className="mt-3 text-center">
        <a href="/verreservapoli" className="btn btn-primary mb-3">Ver reservas</a>
        </div>
          </div>
          <div className="col-md-4">
            <CardDefault
              title="Reserva Laboratorio"
              imageSrc="/laboratoriobk.png"
              imageWidth={400}
              imageHeight={300}
            />
        <div className="mt-3 text-center">
        <a href="/verreservalab" className="btn btn-primary mb-3">Ver reservas</a>
        </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white">
        <div className="container py-2">
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <a href="/" className="d-flex align-items-center text-white text-decoration-none">
              <img src="/logo.png" alt="TECSITE Logo" width="120" height="120" className="logo" />
            </a>
          </div>
        </div>
      </footer>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
