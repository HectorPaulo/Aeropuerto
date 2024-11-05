import { useEffect, useState } from "react";
import { getVuelos } from "../services/ApiVuelo";

const ListarVuelos = () => {
    const [vuelos, setVuelos] = useState([]);
    const [error, setError] = useState(null);

    const fetchVuelos = async () => {
        try {
            const response = await getVuelos();
            setVuelos(response.data);
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
            <h1>Lista de Vuelos</h1>
            {error ? (
                <p>Error al obtener los vuelos: {error.message}</p>
            ) : (
                <ul>
                    {Array.isArray(vuelos) && vuelos.map((vuelo) => (
                        <div key={vuelo.id}>
                            <li>{vuelo.origen}</li>
                            <li>{vuelo.destino}</li>
                            <li>{vuelo.duracion}</li>
                            <li>{vuelo.horaSalida}</li>
                            <li>{vuelo.horaLlegada}</li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListarVuelos;