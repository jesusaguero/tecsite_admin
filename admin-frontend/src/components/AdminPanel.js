import React, { useState } from 'react';
import AdminLayout from "./AdminLayout";

const AdminPanel = () => {
    const [nombrePolideportivo, setNombrePolideportivo] = useState('');

    const handleAgregarPolideportivo = () => {
        console.log('Agregar polideportivo:', nombrePolideportivo);
    };

    return (
        <AdminLayout>

        </AdminLayout>
    );
};

export default AdminPanel;
