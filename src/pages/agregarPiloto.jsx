import React, { useState } from "react";
import TripulacionService from "../services/TripulacionService";
import './agregarPiloto.css';

export const AgregarPiloto = () => {
    const [piloto, setPiloto] = useState({
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
              <input type="text" name="nombre" value={piloto.nombre} onChange={handleChange} />
              <label>Apellido:</label>
              <input type="text" name="apellido" value={piloto.apellido} onChange={handleChange} />
              <label>Género:</label>
              <input type="text" name="genero" value={piloto.genero} onChange={handleChange} />
              <label>Fecha de nacimiento:</label>
              <input type="date" name="fechaNacimiento" value={piloto.fechaNacimiento} onChange={handleChange} />
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
              <label>Antigüedad:</label>
              <input type="text" name="antiguedad" value={piloto.antiguedad} onChange={handleChange} />
              <label>Horas de vuelo:</label>
              <input type="text" name="horasVuelo" value={piloto.horasVuelo} onChange={handleChange} />
              <label>Turno:</label>
              <input type="text" name="turno" value={piloto.turno} onChange={handleChange} />
            </div>
    
            <button type="submit" className="submit-button">Agregar Sobrecargo</button>
          </form>
        </div>
      );
};
