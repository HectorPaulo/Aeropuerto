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
const [error, setError] = useState(null); // Estado para almacenar el mensaje de error

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
        // Ejemplo de simulación de error de obtención de datos
        if (flights.length === 0) {
        setError("Error al obtener los vuelos: Request failed with status code 404");
        } else {
        setError(null); // Limpiar el mensaje de error si hay vuelos
        }
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
                <input
                type="text"
                name="vehiculoAereo"
                value={flightData.vehiculoAereo}
                onChange={handleChange}
                style={styles.input}
                />
            </label>
            <label style={styles.label}>
                Origen:
                <input
                type="text"
                name="origen"
                value={flightData.origen}
                onChange={handleChange}
                style={styles.input}
                />
            </label>
            <label style={styles.label}>
                Destino:
                <input
                type="text"
                name="destino"
                value={flightData.destino}
                onChange={handleChange}
                style={styles.input}
                />
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
