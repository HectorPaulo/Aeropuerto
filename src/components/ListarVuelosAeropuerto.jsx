import { useEffect, useState } from "react";
import { getVuelos } from "../services/ApiVuelo";

const ListarVuelosAeropuerto = () => {
    const [vuelosPorTerminal, setVuelosPorTerminal] = useState({});
    const [error, setError] = useState(null);

    const fetchVuelos = async () => {
        try {
            const response = await getVuelos();

            // Organiza los vuelos por terminal
            const vuelosAgrupados = response.data.reduce((acc, vuelo) => {
                const terminal = vuelo.terminal; // Suponiendo que cada vuelo tiene una propiedad 'terminal'
                if (!acc[terminal]) {
                    acc[terminal] = [];
                }
                acc[terminal].push(vuelo);
                return acc;
            }, {});

            setVuelosPorTerminal(vuelosAgrupados);
        } catch (error) {
            setError(error);
            console.error('Error al obtener los vuelos', error);
        }
    };

    useEffect(() => {
        fetchVuelos();
    }, []);

    return (
        <div>
            <h1>Lista de Vuelos por Terminal</h1>
            {error ? (
                <p>Error al obtener los vuelos: {error.message}</p>
            ) : (
                Object.keys(vuelosPorTerminal).map((terminal) => (
                    <div key={terminal}>
                        <h2>Terminal: {terminal}</h2>
                        <ul>
                            {vuelosPorTerminal[terminal].map((vuelo) => (
                                <div key={vuelo.id}>
                                    <li>Origen: {vuelo.origen}</li>
                                    <li>Destino: {vuelo.destino}</li>
                                    <li>Duración: {vuelo.duracion}</li>
                                    <li>Hora de Salida: {vuelo.horaSalida}</li>
                                    <li>Hora de Llegada: {vuelo.horaLlegada}</li>
                                    <br />
                                </div>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
};

export default ListarVuelosAeropuerto;