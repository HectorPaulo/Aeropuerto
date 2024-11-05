import { useEffect, useState } from "react";
import { getVuelos } from "../services/ApiVuelo";

const ListarVuelosAeropuerto = () => {
    const [vuelosAeropuerto, setVuelosAeropuerto] = useState({});
    const [error, setError] = useState(null);

    const fetchVuelos = async () => {
        try {
            const response = await getVuelos();

            // Verifica que response.data es un array y organiza los vuelos por terminal
            const vuelosAgrupados = Array.isArray(response.data)
                ? response.data.reduce((acc, vuelo) => {
                      const terminal = vuelo.terminal; // Suponiendo que cada vuelo tiene una propiedad 'terminal'
                      if (!acc[terminal]) {
                          acc[terminal] = [];
                      }
                      acc[terminal].push(vuelo);
                      return acc;
                  }, {})
                : {};

            setVuelosAeropuerto(vuelosAgrupados);
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
            <h1>Lista de Vuelos por Aeropuerto</h1>
            {error ? (
                <p>Error al obtener los vuelos: {error.message}</p>
            ) : (
                Object.keys(vuelosAeropuerto).length > 0 ? (
                    Object.keys(vuelosAeropuerto).map((terminal) => (
                        <div key={terminal}>
                            <h2>Terminal: {terminal}</h2>
                            <ul>
                                {vuelosAeropuerto[terminal].map((vuelo) => (
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
