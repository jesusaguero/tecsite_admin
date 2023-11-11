import React from 'react';

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
            <div className="jumbotron text-center">
            <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">POLIDEPORTIVOS</h4>
                    </div>
                    <div className="card-body text-center">
                        <ul className="list-unstyled mt-3 mb-4">
                            <img src="/polideportivo.png" alt="TECSITE Logo" width="400" height="300" className="logo" />
                        </ul>
                        <div className="button-group">
                        <a href="./verpoli"className="btn btn-lg btn-warning mt-3">Ver Lista</a>
                        <a href="./agregarpoli"className="btn btn-lg btn-success mt-3">Agregar</a>
                        <a href="./actualizarpoli"className="btn btn-lg btn-primary mt-3">Actualizar</a>
                        </div>
                    </div>
                </div>
                </div>
            <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">LABORATORIOS</h4>
                    </div>
                    <div className="card-body text-center">
                        <ul className="list-unstyled mt-3 mb-4">
                            <img src="/aulas.png" alt="TECSITE Logo" width="400" height="300" className="logo" />
                        </ul>
                        <div className="button-group">
                            <a href=""className="btn btn-lg btn-warning mt-3">Ver Lista</a>
                            <a href=""className="btn btn-lg btn-success mt-3 btn-separator">Agregar</a>
                            <a href=""className="btn btn-lg btn-primary mt-3">Actualizar</a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="card-deck mb-3 text-center">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">USUARIOS</h4>
                    </div>
                    <div className="card-body text-center">
                        <ul className="list-unstyled mt-3 mb-4">
                            <img src="/alumnos.png" alt="TECSITE Logo" width="400" height="300" className="logo" />
                        </ul>
                        <div className="button-group">
                            <a href=""className="btn btn-lg btn-warning mt-3">Ver Lista</a>
                            <a href=""className="btn btn-lg btn-success mt-3 btn-separator">Agregar</a>
                            <a href=""className="btn btn-lg btn-primary mt-3">Actualizar</a>
                        </div>
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
