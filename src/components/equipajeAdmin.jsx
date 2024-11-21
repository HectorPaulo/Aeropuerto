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
        setEquipajeList([
        { tipo: 'Equipaje de mano', peso: 5, altura: 40, ancho: 20 },
        { tipo: 'Equipaje documentado', peso: 23, altura: 70, ancho: 50 },
        ]);
    };

    const handleEdit = (index, field, value) => {
        const updatedList = [...equipajeList];
        updatedList[index][field] = value;
        setEquipajeList(updatedList);
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
            </div>

            {equipajeList.length > 0 && (
            <div style={styles.tableContainer}>
                <h3>Equipaje Registrado</h3>
                <table style={styles.table}>
                <thead>
                    <tr>
                    <th>Tipo de Equipaje</th>
                    <th>Peso (kg)</th>
                    <th>Altura (cm)</th>
                    <th>Ancho (cm)</th>
                    </tr>
                </thead>
                <tbody>
                    {equipajeList.map((equipaje, index) => (
                    <tr key={index}>
                        <td>{equipaje.tipo}</td>
                        <td>
                        <input
                            type="number"
                            value={equipaje.peso}
                            onChange={(e) => handleEdit(index, 'peso', e.target.value)}
                            style={styles.input}
                        />
                        </td>
                        <td>
                        <input
                            type="number"
                            value={equipaje.altura}
                            onChange={(e) => handleEdit(index, 'altura', e.target.value)}
                            style={styles.input}
                        />
                        </td>
                        <td>
                        <input
                            type="number"
                            value={equipaje.ancho}
                            onChange={(e) => handleEdit(index, 'ancho', e.target.value)}
                            style={styles.input}
                        />
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            )}
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
    tableContainer: {
        marginTop: '20px',
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '15px',
    },
    input: {
        width: '100%',
        padding: '5px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    th: {
        textAlign: 'left',
        padding: '10px',
        borderBottom: '1px solid #ddd',
    },
    td: {
        textAlign: 'left',
        padding: '10px',
        borderBottom: '1px solid #ddd',
    },
};

export default EquipajeAdmin;
