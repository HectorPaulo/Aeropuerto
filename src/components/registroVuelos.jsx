import { useState } from 'react';

function RegistroVuelos({ addFlight, setActiveComponent }) {
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

  // Opciones de ejemplo para las listas desplegables
  const vehicleOptions = ['Jona777', 'ZeusA320', 'CuervoE190'];
  const airportOptions = ['Aeropuerto Oaxaca 1', 'Aeropuerto Veracruz 1', 'Aeropuerto Istmo 1'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightData({
      ...flightData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFlight(flightData); // Guardamos el vuelo utilizando la función addFlight
    setFlightData({ // Limpiamos el formulario después de guardar
      claveTerminal: '',
      vehiculoAereo: '',
      origen: '',
      destino: '',
      tripulacion: '',
      duracion: '',
      horaSalida: '',
      horaLlegada: ''
    });
  };

  return (
    <div style={styles.container}>
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
          <button type="button" onClick={() => setActiveComponent('listarPorTerminal')} style={styles.buttonSecondary}>
            Ver Listado de Vuelos por Terminal
          </button>
          <button type="button" onClick={() => setActiveComponent('listarPorAeropuerto')} style={styles.buttonSecondary}>
            Ver Listado de Vuelos por Aeropuerto
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    padding: '40px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    width: '100%',
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
  }
};

export default RegistroVuelos;
