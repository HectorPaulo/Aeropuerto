import React, { useState } from 'react';

function RegistroVuelos() {
    const [flightData, setFlightData] = useState({
        idVuelo: '',
        claveTerminal: '',
        vehiculoAereo: '',
        origen: '',
        destino: '',
        tripulacion: '',
        duracion: '',
        horaSalida: '',
        horaLlegada: ''
    });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightData({
        ...flightData,
        [name]: value
        });
    };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Flight Data:', flightData);
    // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a una API
    };

return (
    <div>
        <h2>Registro de Vuelo</h2>
        <form onSubmit={handleSubmit}>
        <label>
            ID Vuelo:
            <input type="text" name="idVuelo" value={flightData.idVuelo} onChange={handleChange} />
        </label>
        <label>
            Clave Terminal:
            <input type="text" name="claveTerminal" value={flightData.claveTerminal} onChange={handleChange} />
        </label>
        <label>
            Vehículo Aéreo:
            <input type="text" name="vehiculoAereo" value={flightData.vehiculoAereo} onChange={handleChange} />
        </label>
        <label>
            Origen:
            <input type="text" name="origen" value={flightData.origen} onChange={handleChange} />
        </label>
        <label>
            Destino:
            <input type="text" name="destino" value={flightData.destino} onChange={handleChange} />
        </label>
        <label>
            Tripulación:
            <input type="text" name="tripulacion" value={flightData.tripulacion} onChange={handleChange} />
        </label>
        <label>
            Duración:
            <input type="text" name="duracion" value={flightData.duracion} onChange={handleChange} />
        </label>
        <label>
            Hora Salida:
            <input type="time" name="horaSalida" value={flightData.horaSalida} onChange={handleChange} />
        </label>
        <label>
            Hora Llegada:
            <input type="time" name="horaLlegada" value={flightData.horaLlegada} onChange={handleChange} />
        </label>
        <button type="submit">Registrar</button>
        </form>
    </div>
    );
}

export default RegistroVuelos;
