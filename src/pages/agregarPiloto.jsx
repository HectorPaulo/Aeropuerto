import { useState } from "react";
import TripulacionService from "../services/TripulacionService";
import './agregarPiloto.css';

export const AgregarPiloto = () => {
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
        tipoAeronaves: "",
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
        e.preventDefault();
  
        for (let key in piloto) {
            if (piloto[key] === "" || piloto[key] === null) {
                alert("Por favor, completa todos los campos.");
                return;
            }
        }
  
        try {
            const response = await TripulacionService.createPiloto(piloto);
            console.log("Piloto creado con éxito:", response);
            alert("Piloto creado exitosamente");
        } catch (error) {
            console.error("Error al crear piloto:", error);
            alert("Hubo un error al crear el piloto");
        }
    };

    return (
        <div className="container">
            <header className="header">
            </header>
            
            <form className="form" onSubmit={handleSubmit}>
                {/* Sección Datos Personales */}
                <h1>Agregar Piloto</h1>

                <h2>Datos Personales</h2>
                <div className="form-group">
                    <div>
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
                    </div>

                    <div>
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
                    </div>

                    <div>
                        <label>Género:</label>
                        <select name="genero" value={piloto.genero} onChange={handleChange}>
                            <option value="">Seleccione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>

                    <div>
                        <label>Fecha de nacimiento:</label>
                        <input
                            type="date"
                            name="fechaNac"
                            value={piloto.fechaNac}
                            onChange={handleChange}
                            min="1900-01-01"
                        />
                    </div>
                </div>

                {/* Sección Datos Laborales */}
                <h2>Datos Laborales</h2>
                <div className="form-group">
                    <div>
                        <label>Tipos Aeronaves:</label>
                        <input
                            type="text"
                            name="tipoAeronaves"
                            value={piloto.tipoAeronaves}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Salud Mental:</label>
                        <input
                            type="text"
                            name="saludMental"
                            value={piloto.saludMental}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Rango:</label>
                        <input
                            type="text"
                            name="rango"
                            value={piloto.rango}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Licencia:</label>
                        <input
                            type="text"
                            name="licencia"
                            value={piloto.licencia}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Antigüedad (años):</label>
                        <input
                            type="number"
                            name="antiguedad"
                            value={piloto.antiguedad}
                            onChange={handleChange}
                            min="0"
                        />
                    </div>

                    <div>
                        <label>Horas de vuelo:</label>
                        <input
                            type="number"
                            name="horasVuelo"
                            value={piloto.horasVuelo}
                            onChange={handleChange}
                            min="0"
                        />
                    </div>

                    <div>
                        <label>Turno:</label>
                        <select name="turno" value={piloto.turno} onChange={handleChange}>
                            <option value="">Seleccione</option>
                            <option value="Masculino">Matutino</option>
                            <option value="Femenino">Vespertino</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="submit-button">Agregar Piloto</button>
            </form>
        </div>
    );
};
