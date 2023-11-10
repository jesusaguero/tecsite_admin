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
        </div>
    );
    };
export default AdminLayout;
