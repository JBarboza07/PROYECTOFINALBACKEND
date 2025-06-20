import React from 'react';

const AdminDashboard = () => {
    
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Admin Dashboard</h1>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: '1rem', minWidth: 200 }}>
                    <h2>Usuarios</h2>
                    <p>Gestiona los usuarios registrados.</p>
                    <button>Ver usuarios</button>
                </div>
                <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: '1rem', minWidth: 200 }}>
                    <h2>Productos</h2>
                    <p>Administra los productos disponibles.</p>
                    <button>Ver productos</button>
                </div>
                <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: '1rem', minWidth: 200 }}>
                    <h2>Órdenes</h2>
                    <p>Revisa y gestiona las órdenes.</p>
                    <button>Ver órdenes</button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;