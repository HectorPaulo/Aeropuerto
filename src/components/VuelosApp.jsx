import { useState } from 'react';
import RegistroVuelos from './registroVuelos';
import ListarVuelosPorTerminal from './ListarVuelosPorTerminal';
import ListarVuelosPorAeropuerto from './ListarVuelosPorAeropuerto';
import EquipajePasajero from './equipajePasajero';
import EquipajeAdmin from './equipajeAdmin';

function VuelosApp() {
  const [activeComponent, setActiveComponent] = useState('registro');
  const [flights, setFlights] = useState([]); // Estado para almacenar los vuelos registrados

  const addFlight = (flightData) => {
    setFlights([...flights, flightData]); // Añadir un nuevo vuelo a la lista de vuelos
  };

  return (
    <div style={styles.container}>
      {activeComponent === 'registro' && (
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => setActiveComponent('equipajePasajero')}
          >
            Equipaje Pasajero
          </button>
          <button
            style={styles.button}
            onClick={() => setActiveComponent('equipajeAdmin')}
          >
            Equipaje Administrativo
          </button>
        </div>
      )}

      {activeComponent === 'registro' && (
        <RegistroVuelos addFlight={addFlight} setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === 'listarPorTerminal' && (
        <ListarVuelosPorTerminal flights={flights} setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === 'listarPorAeropuerto' && (
        <ListarVuelosPorAeropuerto flights={flights} setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === 'equipajePasajero' && (
        <EquipajePasajero />
      )}
      {activeComponent === 'equipajeAdmin' && (
        <EquipajeAdmin />
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
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
};

export default VuelosApp;
