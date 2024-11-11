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
                console.log('Datos recibidos:', tripulacionData);

                // Filtramos según propiedades únicas de cada clase
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

    return (
        <div className="container">
            <h1>Tripulación</h1>

            <h2>Pilotos</h2>
            <table className="tripulacion-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rango</th>
                        <th>Horas de Vuelo</th>
                        <th>Turno</th>
                    </tr>
                </thead>
                <tbody>
                    {tripulacion.pilotos.map((piloto, index) => (
                        <tr key={index}>
                            <td>{piloto.nombre}</td>
                            <td>{piloto.apellido}</td>
                            <td>{piloto.rango}</td>
                            <td>{piloto.horasVuelo}</td>
                            <td>{piloto.turno}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Copilotos</h2>
            <table className="tripulacion-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rango</th>
                        <th>Horas de Vuelo</th>
                        <th>Turno</th>
                    </tr>
                </thead>
                <tbody>
                    {tripulacion.copilotos.map((copiloto, index) => (
                        <tr key={index}>
                            <td>{copiloto.nombre}</td>
                            <td>{copiloto.apellido}</td>
                            <td>{copiloto.rango}</td>
                            <td>{copiloto.horasVuelo}</td>
                            <td>{copiloto.turno}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Sobrecargos</h2>
            <table className="tripulacion-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Idiomas</th>
                        <th>Certificados</th>
                        <th>Turno</th>
                    </tr>
                </thead>
                <tbody>
                    {tripulacion.sobrecargos.map((sobrecargo, index) => (
                        <tr key={index}>
                            <td>{sobrecargo.nombre}</td>
                            <td>{sobrecargo.apellido}</td>
                            <td>{sobrecargo.idiomas?.join(", ")}</td>
                            <td>{sobrecargo.certificados?.join(", ")}</td>
                            <td>{sobrecargo.turno}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
