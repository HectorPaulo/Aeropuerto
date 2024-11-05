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
        <div>
            <h1>Lista de Aeropuertos</h1>
            <ul>
                {aeropuertos.map((aeropuerto) => (
                    <div key={aeropuerto.id}>
                    <li>{aeropuerto.nombre}</li>
                    <li>{aeropuerto.numeroPistas}</li>
                    <li>{aeropuerto.tipoAvion}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ListaAeropuertos;