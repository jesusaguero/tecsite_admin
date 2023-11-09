import React from 'react';

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-layout">
        <header className="bg-dark text-white">
            <div className="container py-2">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <a href="/" className="d-flex align-items-center text-white text-decoration-none">
                        <img src="/ruta/de/la/imagen.png" alt="TECSITE Logo" width="40" height="32" className="me-2" />
                        <span className="fs-4">TECSITE</span>
                    </a>

                    <ul className="nav col-12 col-lg-auto mt-2 mt-lg-0 text-small">
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#Admin"/></svg>
                                Admin
                            </a>
                        </li>
                        {/* Agrega más elementos de menú según sea necesario */}
                    </ul>
                </div>
            </div>
        </header>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"><use href="#bootstrap"/></svg>
                    </a>
                    <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"/></svg></a></li>
                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"/></svg></a></li>
                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"/></svg></a></li>
                    </ul>
                </footer>
            </div>
                <main>{children}</main>
            </div>
    );
};

export default AdminLayout;