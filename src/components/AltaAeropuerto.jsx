import React, { useState } from 'react';
import { createAeropuerto } from '../services/http.aeropuerto';
import './Styles.css';

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
        <div className="container">
            <h1>Alta Aeropuerto</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numeroPistas">Número de Pistas</label>
                    <input
                        type="number"
                        id="numeroPistas"
                        name="numeroPistas"
                        value={formData.numeroPistas}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tipoAvion">Tipo de Aviones</label>
                    <input
                        type="text"
                        id="tipoAvion"
                        name="tipoAvion"
                        value={formData.tipoAvion}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn">Enviar</button>
            </form>
        </div>
    );
};

export default AltaAeropuerto;