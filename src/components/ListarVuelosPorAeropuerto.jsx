import { useEffect, useState } from "react";
import { getVuelos } from "../services/ApiVuelo";

const ListarVuelosPorAeropuerto = ({ flights, setActiveComponent }) => {
    // Agrupar vuelos por aeropuerto de origen
    const vuelosPorAeropuerto = flights.reduce((acc, vuelo) => {
        const aeropuerto = vuelo.origen; // Suponiendo que 'origen' representa el aeropuerto
        if (!acc[aeropuerto]) {
            acc[aeropuerto] = [];
        }
        acc[aeropuerto].push(vuelo);
        return acc;
    }, {});

    return (
        <div style={styles.container}>
            <button onClick={() => setActiveComponent('registro')} style={styles.backButton}>
                ⬅ Regresar
            </button>
            <h1 style={styles.title}>Lista de Vuelos por Aeropuerto</h1>
            {Object.keys(vuelosPorAeropuerto).length > 0 ? (
                Object.keys(vuelosPorAeropuerto).map((aeropuerto) => (
                    <div key={aeropuerto}>
                        <h2 style={styles.terminalTitle}>Aeropuerto: {aeropuerto}</h2>
                        <ul style={styles.list}>
                            {vuelosPorAeropuerto[aeropuerto].map((vuelo, index) => (
                                <li key={index} style={styles.listItem}>
                                    <p><strong>Terminal:</strong> {vuelo.claveTerminal}</p>
                                    <p><strong>Vehículo Aéreo:</strong> {vuelo.vehiculoAereo}</p>
                                    <p><strong>Destino:</strong> {vuelo.destino}</p>
                                    <p><strong>Duración:</strong> {vuelo.duracion}</p>
                                    <p><strong>Hora de Salida:</strong> {vuelo.horaSalida}</p>
                                    <p><strong>Hora de Llegada:</strong> {vuelo.horaLlegada}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>No se encontraron vuelos por aeropuerto.</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    terminalTitle: {
        fontSize: '20px',
        marginTop: '20px',
    },
    backButton: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px',
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
        marginBottom: '10px',
    },
};

export default ListarVuelosPorAeropuerto;
