import React, { useState } from 'react';

    const EquipajeAdmin = ({ passengers }) => {
    const [selectedPassenger, setSelectedPassenger] = useState('');
    const [equipajeList, setEquipajeList] = useState([]);

    const handleBuscar = () => {
        if (!selectedPassenger) {
        alert('Selecciona un pasajero para buscar.');
        return;
        }
        // Simula búsqueda de equipaje
        alert(`Buscando equipaje del pasajero: ${selectedPassenger}`);
        setEquipajeList([
        `Equipaje de mano para ${selectedPassenger}`,
        `Equipaje documentado para ${selectedPassenger}`,
        ]);
    };

    const handleListar = () => {
        if (equipajeList.length === 0) {
        alert('No hay equipaje registrado para este pasajero.');
        } else {
        alert(`Listando equipaje para ${selectedPassenger}`);
        }
    };

    return (
        <div style={styles.container}>
        <div style={styles.header}>
            <h1 style={styles.title}>Asignar Equipajes</h1>
            <span style={styles.subtitle}>*Administrativo</span>
        </div>

        <form style={styles.form}>
            <label style={styles.label}>
            Seleccionar Pasajero:
            <select
                value={selectedPassenger}
                onChange={(e) => setSelectedPassenger(e.target.value)}
                style={styles.select}
            >
                <option value="">Selecciona un pasajero</option>
                {passengers.map((passenger) => (
                <option key={passenger.id} value={passenger.nombre}>
                    {passenger.nombre} (ID: {passenger.id})
                </option>
                ))}
            </select>
            </label>

            <div style={styles.buttons}>
            <button type="button" onClick={handleBuscar} style={styles.button}>
                Buscar Equipaje
            </button>
            <button type="button" onClick={handleListar} style={styles.button}>
                Listar Equipaje
            </button>
            </div>

            <div style={styles.listContainer}>
            <h3>Equipaje Registrado:</h3>
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
    select: {
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginTop: '5px',
    },
    buttons: {
        display: 'flex',
        gap: '10px',
        marginTop: '15px',
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
    listContainer: {
        marginTop: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        marginTop: '10px',
    },
};

export default EquipajeAdmin;
