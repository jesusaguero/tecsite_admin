import React from 'react';

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-layout">
            <header>
                <div className="px-3 py-2 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <svg className="bi me-2" width="40" height="32" role="img" aria-label="TECSITE"><use/></svg>
                            </a>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <a href="#" className="nav-link text-secondary">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use Href="#Admin"/></svg>
                                        Admin
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#speedometer2"/></svg>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#table"/></svg>
                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#grid"/></svg>
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#people-circle"/></svg>
                                        Customers
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
            </header>

            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
                    </a>
                    <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
                    </ul>
                </footer>
            </div>
                <main>{children}</main>
            </div>
    );
};

export default AdminLayout;