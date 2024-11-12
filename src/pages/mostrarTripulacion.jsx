import { useState, useEffect } from "react";
import TripulacionService from "../services/TripulacionService";
import './mostrarTripulacion.css';

export const MostrarTripulacion = () => {
    const [tripulacion, setTripulacion] = useState({
        pilotos: [],
        copilotos: [],
        sobrecargos: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tripulacionData = await TripulacionService.mostrarTripulacion();

                // Filtrar datos según propiedades únicas de cada clase
                const pilotos = tripulacionData.filter(member => member.licencia !== undefined);
                const copilotos = tripulacionData.filter(member => member.tiempoRestantePiloto !== undefined);
                const sobrecargos = tripulacionData.filter(member => member.idiomas !== undefined);

                setTripulacion({
                    pilotos,
                    copilotos,
                    sobrecargos
                });
            } catch (error) {
                console.error("Error fetching tripulacion data:", error);
                alert("Hubo un error al obtener la tripulación");
            }
        };

        fetchData();
    }, []);

    const Card = ({ miembro, tipo }) => (
        <div className="card">
            <h3>{miembro.nombre} {miembro.apellido}</h3>
            <p><strong>Género:</strong> {miembro.genero || "No especificado"}</p>
            <p><strong>Fecha de nacimiento:</strong> {miembro.fechaNacimiento || "No especificada"}</p>
            <h4>Datos laborales</h4>
            {tipo === "sobrecargo" && (
                <>
                    <p><strong>Idiomas:</strong> {miembro.idiomas?.join(", ")}</p>
                    <p><strong>Certificados:</strong> {miembro.certificados?.join(", ")}</p>
                    <p><strong>Antigüedad:</strong> {miembro.antiguedad} años</p>
                </>
            )}
            {tipo !== "sobrecargo" && (
                <>
                    <p><strong>Rango:</strong> {miembro.rango}</p>
                    <p><strong>Horas de vuelo:</strong> {miembro.horasVuelo}</p>
                </>
            )}
            <p><strong>Turno:</strong> {miembro.turno}</p>
            <div className="buttons">
                <button className="btn btn-update">Actualizar</button>
                <button className="btn btn-delete">Eliminar</button>
            </div>
        </div>
    );

    return (
        <div className="container">
            <h1>Lista de Tripulación</h1>
            
            <h2>Pilotos</h2>
            <div className="grid-container">
                {tripulacion.pilotos.map((piloto, index) => (
                    <Card key={index} miembro={piloto} tipo="piloto" />
                ))}
            </div>

            <h2>Copilotos</h2>
            <div className="grid-container">
                {tripulacion.copilotos.map((copiloto, index) => (
                    <Card key={index} miembro={copiloto} tipo="copiloto" />
                ))}
            </div>

            <h2>Sobrecargos</h2>
            <div className="grid-container">
                {tripulacion.sobrecargos.map((sobrecargo, index) => (
                    <Card key={index} miembro={sobrecargo} tipo="sobrecargo" />
                ))}
            </div>
        </div>
    );
};
