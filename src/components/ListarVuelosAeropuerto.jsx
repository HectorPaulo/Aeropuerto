import { useEffect, useState } from "react";
import { getVuelos } from "../services/ApiVuelo";

const ListarVuelosAeropuerto = () => {
    const [vuelosAeropuerto, setVuelosAeropuerto] = useState({});
    const [error, setError] = useState(null);

    const fetchVuelos = async () => {
        try {
            const response = await getVuelos();

            // Verifica que response.data es un array y organiza los vuelos por terminal
            if (!Array.isArray(response.data) || response.data.length === 0) {
                // Si no hay vuelos, establece un mensaje de error
                throw new Error("No se encontraron vuelos registrados.");
            }

            const vuelosAgrupados = response.data.reduce((acc, vuelo) => {
                const terminal = vuelo.claveTerminal; // Suponiendo que cada vuelo tiene una propiedad 'claveTerminal'
                if (!acc[terminal]) {
                    acc[terminal] = [];
                }
                acc[terminal].push(vuelo);
                return acc;
            }, {});

            setVuelosAeropuerto(vuelosAgrupados);
            setError(null); // Asegura que no haya mensajes de error si los datos son válidos
        } catch (error) {
            setError(error);
            console.error("Error al obtener los vuelos", error);
        }
    };

    useEffect(() => {
        fetchVuelos();
    }, []);

    return (
        <div>
            <h1>Lista de Vuelos por Aeropuerto</h1>
            {error ? (
                <p>Error al obtener los vuelos: {error.message}</p>
            ) : (
                Object.keys(vuelosAeropuerto).length > 0 ? (
                    Object.keys(vuelosAeropuerto).map((claveTerminal) => (
                        <div key={claveTerminal}>
                            <h2>Terminal: {claveTerminal}</h2>
                            <ul>
                                {vuelosAeropuerto[claveTerminal].map((vuelo) => (
                                    <li key={vuelo.id}>
                                        <p>Origen: {vuelo.origen}</p>
                                        <p>Destino: {vuelo.destino}</p>
                                        <p>Duración: {vuelo.duracion}</p>
                                        <p>Hora de Salida: {vuelo.horaSalida}</p>
                                        <p>Hora de Llegada: {vuelo.horaLlegada}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron vuelos.</p>
                )
            )}
        </div>
    );
};

export default ListarVuelosAeropuerto;
