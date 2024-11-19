import React, { useState } from 'react';

    const EquipajeAdmin = () => {
    const [idPasajero, setIdPasajero] = useState('');
    const [equipajeList, setEquipajeList] = useState([]);

    const handleBuscar = () => {
        alert('Buscando equipaje...');
    };

    const handleListar = () => {
        alert('Listando equipaje...');
    };

    return (
        <div style={styles.container}>
        <div style={styles.header}>
            <h1 style={styles.title}>Asignar Equipajes</h1>
            <span style={styles.subtitle}>*Administrativo</span>
        </div>

        <form style={styles.form}>
            <label style={styles.label}>
            ID Pasajero:
            <div style={styles.inputGroup}>
                <input
                type="text"
                value={idPasajero}
                onChange={(e) => setIdPasajero(e.target.value)}
                style={styles.input}
                />
                <button type="button" onClick={handleBuscar} style={styles.button}>
                Buscar
                </button>
            </div>
            </label>

            <div style={styles.listContainer}>
            <button type="button" onClick={handleListar} style={styles.button}>
                Listar equipaje
            </button>
            <ul style={styles.list}>
                {equipajeList.length === 0 ? (
                <li>No hay equipaje registrado.</li>
                ) : (
                equipajeList.map((equipaje, index) => <li key={index}>{equipaje}</li>)
                )}
            </ul>
            </div>
        </form>
        </div>
    );
    };

    const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8f9fa',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    title: {
        fontSize: '24px',
        color: '#333',
    },
    subtitle: {
        fontSize: '16px',
        color: '#dc3545',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '16px',
        color: '#555',
    },
    inputGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    input: {
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        flex: 1,
    },
    listContainer: {
        marginTop: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        marginTop: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default EquipajeAdmin;
