import React, { useState } from 'react';
import { createAeropuerto } from '../services/http.aeropuerto';

const AltaAeropuerto = ({ onAeropuertoAdded }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        numeroPistas: '',
        tipoAvion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAeropuerto(formData);
            alert('Aeropuerto creado exitosamente');
            onAeropuertoAdded(); // Llama a la función para actualizar la lista
        } catch (error) {
            console.error('Error al crear el aeropuerto:', error);
            alert('Hubo un error al crear el aeropuerto');
        }
    };

    return (
        <>
            <h1>Alta Aeropuerto</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                <label htmlFor="numeroPistas">Numero de Pistas</label>
                <input type="number" id="numeroPistas" name="numeroPistas" value={formData.numeroPistas} onChange={handleChange} />
                <label htmlFor="tipoAvion">Tipo de aviones</label>
                <input type="text" id="tipoAvion" name="tipoAvion" value={formData.tipoAvion} onChange={handleChange} />
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default AltaAeropuerto;