import React, { useState } from "react";
import TripulacionService from "../services/TripulacionService";
import './agregarSobrecargo.css';

export const AgregarSobrecargo = () => {
    const [piloto, setPiloto] = useState({
      antiguedad: "",
      turno: "",
      horasVuelo: "",
      nombre: "",
      apellido: "",
      fechaNac: "",
      genero: "",
      rango: "",
      licencia: "",
      tipoAeronaves: "avion",
      saludMental: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPiloto((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita la recarga de página al enviar el formulario
        console.log("Formulario enviado:", piloto); // Log para verificar el envío

        try {
            const response = await TripulacionService.createPiloto(piloto);
            console.log("Piloto creado con éxito:", response);
            alert("Piloto creado exitosamente"); // Mensaje de éxito
        } catch (error) {
            console.error("Error al crear piloto:", error);
            alert("Hubo un error al crear el piloto"); // Mensaje de error
        }
    };

    return (
      <div className="container">
        <header className="header">
        </header>
        <h1>Agregar Piloto</h1>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Datos Personales</h2>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={piloto.nombre}
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
              value={piloto.apellido}
              onChange={handleChange}
              onKeyPress={(e) => {
                if (/\d/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            <label>Género:</label>
            <select name="genero" value={piloto.genero} onChange={handleChange}>
              <option value="">Seleccione</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
            <label>Fecha de nacimiento:</label>
            <input
              type="date"
              name="fechaNac"
              value={piloto.fechaNac}
              onChange={handleChange}
              min="1900-01-01"

            />
          </div>
    
          <h2>Datos Laborales</h2>
          <div className="form-group">
            <label>Tipos Aeronaves:</label>
            <input type="text" name="tiposAeronaves" value={piloto.tipoAeronaves} onChange={handleChange} />
            <label>Salud Mental:</label>
            <input type="text" name="saludMental" value={piloto.saludMental} onChange={handleChange} />
            <label>Rango:</label>
            <input type="text" name="rango" value={piloto.rango} onChange={handleChange} />
            <label>Licencia:</label>
            <input type="text" name="licencia" value={piloto.licencia} onChange={handleChange} />
            <label>Antigüedad (años):</label>
            <input type="number" name="antiguedad" value={piloto.antiguedad} onChange={handleChange} />
            <label>Horas de vuelo:</label>
            <input type="number" name="horasVuelo" value={piloto.horasVuelo} onChange={handleChange} />
            <label>Turno:</label>
            <input type="text" name="turno" value={piloto.turno} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-button">Agregar Piloto</button>
        </form>
      </div>
    );
};
