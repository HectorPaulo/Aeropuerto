import React, { useState } from 'react';
import TripulacionService from '../services/TripulacionService';
import './agregarCopiloto.css';
export const AgregarCopiloto= () => {
    const [copiloto, setCocopiloto] = useState({
        antiguedad: 2,
        turno: "matutino",
        horasVuelo: 12,
        nombre: "",
        apellido: "",
        fechaNac: "",
        genero: "hombre",
        rango: "maximo",
        licencia: "",
        tipoAeronaves: "avion",
        saludMental: "buena"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCocopiloto((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita la recarga de página al enviar el formulario
        console.log("Formulario enviado:", copiloto); // Log para verificar el envío

        try {
            const response = await TripulacionService.createcopiloto(copiloto);
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
              <input type="text" name="nombre" value={copiloto.nombre} onChange={handleChange} />
              <label>Apellido:</label>
              <input type="text" name="apellido" value={copiloto.apellido} onChange={handleChange} />
              <label>Género:</label>
              <input type="text" name="genero" value={copiloto.genero} onChange={handleChange} />
              <label>Fecha de nacimiento:</label>
              <input type="date" name="fechaNacimiento" value={copiloto.fechaNacimiento} onChange={handleChange} />
            </div>
    
            <h2>Datos Laborales</h2>
            <div className="form-group">
              <label>Tipos Aeronaves:</label>
              <input type="text" name="tiposAeronaves" value={copiloto.tipoAeronaves} onChange={handleChange} />
              <label>Salud Mental:</label>
              <input type="text" name="saludMental" value={copiloto.saludMental} onChange={handleChange} />
              <label>Rango:</label>
              <input type="text" name="rango" value={copiloto.rango} onChange={handleChange} />
              <label>Licencia:</label>
              <input type="text" name="licencia" value={copiloto.licencia} onChange={handleChange} />
              <label>Antigüedad:</label>
              <input type="text" name="antiguedad" value={copiloto.antiguedad} onChange={handleChange} />
              <label>Horas de vuelo:</label>
              <input type="text" name="horasVuelo" value={copiloto.horasVuelo} onChange={handleChange} />
              <label>Turno:</label>
              <input type="text" name="turno" value={copiloto.turno} onChange={handleChange} />
            </div>
    
            <button type="submit" className="submit-button">Agregar Sobrecargo</button>
          </form>
        </div>
      );
};
