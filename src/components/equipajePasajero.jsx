import React, { useState } from 'react';

    const EquipajePasajero = () => {
    const [equipaje, setEquipaje] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [ancho, setAncho] = useState('');

    const handleAgregar = () => {
        alert('Equipaje agregado correctamente.');
    };

    return (
        <div style={styles.container}>
        <div style={styles.header}>
            <h1 style={styles.title}>Asignar Equipajes</h1>
            <span style={styles.subtitle}>*Pasajero</span>
        </div>

        <form style={styles.form}>
            <label style={styles.label}>
            Peso (kg):
            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                style={styles.input}
            />
            </label>

            <label style={styles.label}>
            Altura (cm):
            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                style={styles.input}
            />
            </label>

            <label style={styles.label}>
            Ancho (cm):
            <input
                type="number"
                value={ancho}
                onChange={(e) => setAncho(e.target.value)}
                style={styles.input}
            />
            </label>

            <label style={styles.label}>
            Tipo de equipaje:
            <select
                value={equipaje}
                onChange={(e) => setEquipaje(e.target.value)}
                style={styles.select}
            >
                <option value="">Selecciona el tipo de equipaje</option>
                <option value="Equipaje de mano">Equipaje de mano</option>
                <option value="Artículo personal">Artículo personal</option>
                <option value="Equipaje documentado">Equipaje documentado</option>
                <option value="Equipaje especial">Equipaje especial</option>
            </select>
            </label>

            <div style={styles.buttons}>
            <button type="button" onClick={handleAgregar} style={styles.button}>
                Agregar
            </button>
            <button type="button" style={{ ...styles.button, backgroundColor: '#dc3545' }}>
                Eliminar
            </button>
            <button type="button" style={{ ...styles.button, backgroundColor: '#6c757d' }}>
                Cancelar
            </button>
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
    input: {
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginTop: '5px',
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

export default EquipajePasajero;
