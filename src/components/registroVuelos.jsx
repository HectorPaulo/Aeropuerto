import  { useState, useEffect } from 'react';
// import { terminales } from './TerminalComponent'; // Comentado para evitar error mientras el archivo no existe

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
const [availableTerminals, setAvailableTerminals] = useState([
    // Ejemplos de terminales para pruebas
    { id: 1, nombre: 'Terminal 1' },
    { id: 2, nombre: 'Terminal 2' },
    { id: 3, nombre: 'Terminal 3' }
    ]);

  // useEffect(() => {
  //   // Aquí puedes cargar las terminales si vienen de una API o componente
  //   setAvailableTerminals(terminales);
  // }, []);

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
            <input
                type="text"
                name="idVuelo"
                value={flightData.idVuelo}
                onChange={handleChange}
            />
            </label>
            <label>
            Clave Terminal:
            <input
                type="text"
                name="claveTerminal"
                value={flightData.claveTerminal}
                onChange={handleChange}
            />
            </label>
            <label>
            Vehículo Aéreo:
            <input
                type="text"
                name="vehiculoAereo"
                value={flightData.vehiculoAereo}
                onChange={handleChange}
            />
            </label>
            <label>
            Origen:
            <select
                name="origen"
                value={flightData.origen}
                onChange={handleChange}
            >
                <option value="">Selecciona una terminal de origen</option>
                {availableTerminals.map((terminal) => (
                <option key={terminal.id} value={terminal.nombre}>
                    {terminal.nombre}
                </option>
                ))}
            </select>
            </label>
            <label>
            Destino:
            <select
                name="destino"
                value={flightData.destino}
                onChange={handleChange}
            >
                <option value="">Selecciona una terminal de destino</option>
                {availableTerminals.map((terminal) => (
                <option key={terminal.id} value={terminal.nombre}>
                    {terminal.nombre}
                </option>
                ))}
            </select>
            </label>
            <label>
            Tripulación:
            <input
                type="text"
                name="tripulacion"
                value={flightData.tripulacion}
                onChange={handleChange}
            />
            </label>
            <label>
            Duración:
            <input
                type="text"
                name="duracion"
                value={flightData.duracion}
                onChange={handleChange}
            />
            </label>
            <label>
            Hora Salida:
            <input
                type="time"
                name="horaSalida"
                value={flightData.horaSalida}
                onChange={handleChange}
            />
            </label>
            <label>
            Hora Llegada:
            <input
                type="time"
                name="horaLlegada"
                value={flightData.horaLlegada}
                onChange={handleChange}
            />
            </label>
            <button type="submit">Registrar</button>
        </form>
    </div>
    );
}

export default RegistroVuelos;
