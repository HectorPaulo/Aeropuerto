import React, { useState, useEffect } from 'react';
import { getAllAeropuertos } from '../services/http.aeropuerto';

const ListaAeropuertos = () => {
    const [aeropuertos, setAeropuertos] = useState([]);

    const fetchAeropuertos = async () => {
        try {
            const response = await getAllAeropuertos();
            setAeropuertos(response.data);
        } catch (error) {
            console.error('Error al obtener los aeropuertos:', error);
        }
    };

    useEffect(() => {
        fetchAeropuertos();
    }, []);

    return (
        <div className="lista-aeropuertos">
            <h2>LISTA DE AEROPUERTOS</h2>
            <ul className="aeropuerto-list">
                {aeropuertos.map((aeropuerto) => (
                    <div key={aeropuerto.id} className="aeropuerto-card">
                        <div className="aeropuerto-item">
                            <strong>Nombre:</strong>
                            <span>{aeropuerto.nombre}</span>
                        </div>
                        <div className="aeropuerto-item">
                            <strong>No. Pistas:</strong>
                            <span>{aeropuerto.numeroPistas}</span>
                        </div>
                        <div className="aeropuerto-item">
                            <strong>T. Aviones:</strong>
                            <span>{aeropuerto.tipoAvion}</span>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ListaAeropuertos;