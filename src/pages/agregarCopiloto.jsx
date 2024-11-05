import React, { useState } from 'react';
import TripulacionService from '../services/TripulacionService';
import './agregarCopiloto.css';
export const AgregarCopiloto= () => {
    const [copiloto, setCopiloto] = useState({
        antiguedad: "",
        turno: "",
        horasVuelo: "",
        nombre: "",
        apellido: "",
        fechaNac: "",
        genero: "",
        rango: "",
        tiempoRestantePiloto:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCopiloto((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita la recarga de página al enviar el formulario
        console.log("Formulario enviado:", copiloto); // Log para verificar el envío

        try {
            const response = await TripulacionService.createCopiloto(copiloto);
            console.log("copiloto creado con éxito:", response);
            alert("copiloto creado exitosamente"); // Mensaje de éxito
        } catch (error) {
            console.error("Error al crear copiloto:", error);
            alert("Hubo un error al crear el copiloto"); // Mensaje de error
        }
    };

    return (
      <div className="container">
        <header className="header">
        </header>
        <h1>Agregar copiloto</h1>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Datos Personales</h2>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={copiloto.nombre}
              onChange={handleChange}
              onKeyPress={(e) => {
                if (/\d/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              value={copiloto.apellido}
              onChange={handleChange}
              onKeyPress={(e) => {
                if (/\d/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            <label>Género:</label>
            <select name="genero" value={copiloto.genero} onChange={handleChange}>
              <option value="">Seleccione</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
            <label>Fecha de nacimiento:</label>
            <input
              type="date"
              name="fechaNac"
              value={copiloto.fechaNac}
              onChange={handleChange}
              min="1900-01-01"
            />
          </div>
    
          <h2>Datos Laborales</h2>
          <div className="form-group">
            <label>Rango:</label>
            <input type="text" name="rango" value={copiloto.rango} onChange={handleChange} />
            <label>Antigüedad (Años):</label>
            <input type="number" name="antiguedad" value={copiloto.antiguedad} onChange={handleChange} />
            <label>Horas de vuelo:</label>
            <input type="number" name="horasVuelo" value={copiloto.horasVuelo} onChange={handleChange} />
            <label>Turno:</label>
            <input type="text" name="turno" value={copiloto.turno} onChange={handleChange} />
            <label>Tiempo Restante (años):</label>
            <input type="number" name="tiempoRestantePiloto" value={copiloto.tiempoRestantePiloto} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-button">Agregar copiloto</button>
        </form>
      </div>
    );
};
