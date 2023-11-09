import React, { useState } from 'react';
import AdminLayout from "./AdminLayout";

const AdminPanel = () => {
    const [nombrePolideportivo, setNombrePolideportivo] = useState('');

    const handleAgregarPolideportivo = () => {
        console.log('Agregar polideportivo:', nombrePolideportivo);
    };

    return (
        <AdminLayout>
            <form>
                <label>
                    Nombre del Polideportivo:
                    <input
                        type="text"
                        value={nombrePolideportivo}
                        onChange={(e) => setNombrePolideportivo(e.target.value)}
                    />
                </label>
                <button type="button" onClick={handleAgregarPolideportivo}>
                    Agregar Polideportivo
                </button>
            </form>
        </AdminLayout>
    );
};

export default AdminPanel;
