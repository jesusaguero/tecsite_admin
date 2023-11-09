import React from 'react';

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-layout">
            <header>
                <div className="px-3 py-2 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
                            </a>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <a href="#" className="nav-link text-secondary">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#home"/></svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"/></svg>
                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"/></svg>
                                        Customers
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <main>{children}</main>
            </div>
    );
};

export default AdminLayout;