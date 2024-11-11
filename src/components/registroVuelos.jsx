import { useState } from 'react';

function RegistroVuelos() {
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
  const [flights, setFlights] = useState([]); // Estado para almacenar los vuelos registrados
  const [showList, setShowList] = useState(false);
  const [showListByAirport, setShowListByAirport] = useState(false); // Estado para manejar el listado por aeropuerto
  const [error, setError] = useState(null); // Estado para almacenar el mensaje de error

  // Opciones de ejemplo para las listas desplegables
  const vehicleOptions = ['Boeing 737', 'Airbus A320', 'Embraer E190'];
  const airportOptions = ['Oaxaca', 'Veracruz', 'Tabasco'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightData({
      ...flightData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlights([...flights, flightData]); // Agregar el vuelo al listado
    setFlightData({ // Limpiar el formulario después de enviar
      claveTerminal: '',
      vehiculoAereo: '',
      origen: '',
      destino: '',
      tripulacion: '',
      duracion: '',
      horaSalida: '',
      horaLlegada: ''
    });
    setError(null); // Limpiar cualquier mensaje de error previo
  };

  const toggleList = () => {
    setShowList(!showList);
    setError(flights.length === 0 ? "Error al obtener los vuelos: Request failed with status code 404" : null);
  };

  const toggleListByAirport = () => {
    setShowListByAirport(!showListByAirport);
    setError(flights.length === 0 ? "Error al obtener los vuelos: Request failed with status code 404" : null);
  };

  // Función para agrupar vuelos por aeropuerto de origen
  const groupFlightsByAirport = () => {
    return flights.reduce((acc, flight) => {
      (acc[flight.origen] = acc[flight.origen] || []).push(flight);
      return acc;
    }, {});
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Registro de Vuelo</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Clave Terminal:
            <input
              type="text"
              name="claveTerminal"
              value={flightData.claveTerminal}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Vehículo Aéreo:
            <select
              name="vehiculoAereo"
              value={flightData.vehiculoAereo}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Selecciona un vehículo aéreo</option>
              {vehicleOptions.map((vehicle, index) => (
                <option key={index} value={vehicle}>
                  {vehicle}
                </option>
              ))}
            </select>
          </label>
          <label style={styles.label}>
            Origen:
            <select
              name="origen"
              value={flightData.origen}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Selecciona un aeropuerto de origen</option>
              {airportOptions.map((airport, index) => (
                <option key={index} value={airport}>
                  {airport}
                </option>
              ))}
            </select>
          </label>
          <label style={styles.label}>
            Destino:
            <select
              name="destino"
              value={flightData.destino}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Selecciona un aeropuerto de destino</option>
              {airportOptions.map((airport, index) => (
                <option key={index} value={airport}>
                  {airport}
                </option>
              ))}
            </select>
          </label>
          <label style={styles.label}>
            Tripulación:
            <input
              type="text"
              name="tripulacion"
              value={flightData.tripulacion}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Duración:
            <input
              type="text"
              name="duracion"
              value={flightData.duracion}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Hora Salida:
            <input
              type="time"
              name="horaSalida"
              value={flightData.horaSalida}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Hora Llegada:
            <input
              type="time"
              name="horaLlegada"
              value={flightData.horaLlegada}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>Registrar</button>
            <button type="button" onClick={toggleList} style={styles.buttonSecondary}>
              {showList ? 'Ocultar Listado' : 'Ver Listado'}
            </button>
            <button type="button" onClick={toggleListByAirport} style={styles.buttonSecondary}>
              {showListByAirport ? 'Ocultar por Aeropuerto' : 'Listar por Aeropuerto'}
            </button>
          </div>
        </form>
      </div>
      
      {showList && (
        <div style={styles.listContainer}>
          <h3>Lista de Vuelos</h3>
          {error ? (
            <p style={styles.error}>{error}</p>
          ) : (
            <ul style={styles.list}>
              {flights.length === 0 ? (
                <li style={styles.listItem}>No hay vuelos registrados</li>
              ) : (
                flights.map((flight, index) => (
                  <li key={index} style={styles.listItem}>
                    <strong>Clave Terminal:</strong> {flight.claveTerminal} | 
                    <strong> Vehículo Aéreo:</strong> {flight.vehiculoAereo} | 
                    <strong> Origen:</strong> {flight.origen} | 
                    <strong> Destino:</strong> {flight.destino} | 
                    <strong> Tripulación:</strong> {flight.tripulacion} | 
                    <strong> Duración:</strong> {flight.duracion} | 
                    <strong> Hora Salida:</strong> {flight.horaSalida} | 
                    <strong> Hora Llegada:</strong> {flight.horaLlegada}
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      )}

      {showListByAirport && (
        <div style={styles.listContainer}>
          <h3>Vuelos por Aeropuerto (Origen)</h3>
          {error ? (
            <p style={styles.error}>{error}</p>
          ) : (
            <ul style={styles.list}>
              {Object.entries(groupFlightsByAirport()).map(([origen, flights]) => (
                <li key={origen} style={styles.listItem}>
                  <h4>{origen}</h4>
                  <ul>
                    {flights.map((flight, index) => (
                      <li key={index} style={styles.listItem}>
                        <strong>Clave Terminal:</strong> {flight.claveTerminal} | 
                        <strong> Vehículo Aéreo:</strong> {flight.vehiculoAereo} | 
                        <strong> Destino:</strong> {flight.destino} | 
                        <strong> Tripulación:</strong> {flight.tripulacion} | 
                        <strong> Duración:</strong> {flight.duracion} | 
                        <strong> Hora Salida:</strong> {flight.horaSalida} | 
                        <strong> Hora Llegada:</strong> {flight.horaLlegada}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    padding: '40px',
  },
  formContainer: {
    flex: 1,
    maxWidth: '500px',
    marginRight: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonSecondary: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#007bff',
    backgroundColor: '#fff',
    border: '1px solid #007bff',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  listContainer: {
    flex: 1,
    maxWidth: '400px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginLeft: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  }
};

export default RegistroVuelos;
