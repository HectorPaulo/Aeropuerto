import React, { useState } from "react";
import TripulacionService from "../services/TripulacionService";

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
        <form onSubmit={handleSubmit}>
            <input type="number" name="antiguedad" value={piloto.antiguedad} onChange={handleChange} placeholder="Antigüedad" />
            <input type="text" name="turno" value={piloto.turno} onChange={handleChange} placeholder="Turno" />
            <input type="number" name="horasVuelo" value={piloto.horasVuelo} onChange={handleChange} placeholder="Horas de Vuelo" />
            <input type="text" name="nombre" value={piloto.nombre} onChange={handleChange} placeholder="Nombre" />
            <input type="text" name="apellido" value={piloto.apellido} onChange={handleChange} placeholder="Apellido" />
            <input type="date" name="fechaNac" value={piloto.fechaNac} onChange={handleChange} placeholder="Fecha de Nacimiento" />
            <input type="text" name="genero" value={piloto.genero} onChange={handleChange} placeholder="Género" />
            <input type="text" name="rango" value={piloto.rango} onChange={handleChange} placeholder="Rango" />
            <input type="text" name="licencia" value={piloto.licencia} onChange={handleChange} placeholder="Licencia" />
            <input type="text" name="tipoAeronaves" value={piloto.tipoAeronaves} onChange={handleChange} placeholder="Tipo de Aeronaves" />
            <input type="text" name="saludMental" value={piloto.saludMental} onChange={handleChange} placeholder="Salud Mental" />
            <button type="submit">Agregar Piloto</button>
        </form>
    );
};
