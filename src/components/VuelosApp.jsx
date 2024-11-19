import { useState } from 'react';
import EquipajePasajero from './equipajePasajero';
import EquipajeAdmin from './equipajeAdmin';

function VuelosApp() {
  const [activeComponent, setActiveComponent] = useState('menu'); // Estado para manejar la navegación

  // Ejemplo de pasajeros
  const [passengers] = useState([
    { id: 'P001', nombre: 'Juan Pérez' },
    { id: 'P002', nombre: 'María López' },
    { id: 'P003', nombre: 'Carlos Sánchez' },
  ]);

  return (
    <div style={styles.container}>
      {activeComponent === 'menu' && (
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
      {activeComponent === 'equipajePasajero' && (
        <div>
          <button
            style={styles.backButton}
            onClick={() => setActiveComponent('menu')}
          >
            ⬅ Regresar
          </button>
          <EquipajePasajero passengers={passengers} />
        </div>
      )}
      {activeComponent === 'equipajeAdmin' && (
        <div>
          <button
            style={styles.backButton}
            onClick={() => setActiveComponent('menu')}
          >
            ⬅ Regresar
          </button>
          <EquipajeAdmin passengers={passengers} />
        </div>
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
  backButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#6c757d',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
};

export default VuelosApp;
