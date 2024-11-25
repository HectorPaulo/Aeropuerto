import { useState, useEffect } from 'react';
import { getById, save } from '../API/Salidaservice';
import '../pages/hora.css';

const HoraSalida = () => {
    const [flightData, setFlightData] = useState({
        claveTerminal: '',
        vehiculoAereo: '',
        origen: '',
        destino: '',
        tripulacion: '',
        duracion: '',
        horaSalida: '',
        horaLlegada: ''
    });
    const [flightId, setFlightId] = useState('');

    useEffect(() => {
        if (flightId) {
            getById(flightId).then(data => {
                setFlightData(data);
            }).catch(error => {
                console.error("Error fetching flight data:", error);
            });
        }
    }, [flightId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFlightData({
            ...flightData,
            [name]: value
        });
    };

    const handleSave = () => {
        save(flightData).then(data => {
            console.log("Flight data saved:", data);
        }).catch(error => {
            console.error("Error saving flight data:", error);
        });
    };

    return (
        <div className="container">
            <h1>ADMINISTRAR HORA DE SALIDA</h1>
            <div className="card">
                <label htmlFor="flightId" className="form-label"><strong>ID DE VUELO:  </strong></label>
                <input
                    id="flightId"
                    className="input"
                    type="text"
                    placeholder="INGRESE EL ID"
                    value={flightId}
                    onChange={(e) => setFlightId(e.target.value)}
                />
                <button className="btn" onClick={() => getById(flightId)}>CARGAR DATOS</button>
            </div>
            <br></br>
            <div className="card hora-salida-card">
                <label htmlFor="horaSalida" className="form-label"><strong>HORA DE SALIDA: </strong></label>
                <input
                    id="horaSalida"
                    className="input"
                    type="text"
                    name="horaSalida"
                    value={flightData.horaSalida}
                    onChange={handleInputChange}
                />
                <button className="btn" onClick={handleSave}>GUARDAR</button>
            </div>
        </div>
    );
};

export default HoraSalida;
