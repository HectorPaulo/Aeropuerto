import { useState } from 'react';
import RegistroVuelos from './registroVuelos';
import ListarVuelosPorTerminal from './ListarVuelosPorTerminal';
import ListarVuelosPorAeropuerto from './ListarVuelosPorAeropuerto';

function VuelosApp() {
  const [activeComponent, setActiveComponent] = useState('registro');
  const [flights, setFlights] = useState([]); // Estado para almacenar los vuelos registrados

  const addFlight = (flightData) => {
    setFlights([...flights, flightData]); // Añadir un nuevo vuelo a la lista de vuelos
  };

  return (
    <div>
      {activeComponent === 'registro' && (
        <RegistroVuelos 
          addFlight={addFlight} 
          setActiveComponent={setActiveComponent} 
        />
      )}
      {activeComponent === 'listarPorTerminal' && (
        <ListarVuelosPorTerminal 
          flights={flights} 
          setActiveComponent={setActiveComponent} 
        />
      )}
      {activeComponent === 'listarPorAeropuerto' && (
        <ListarVuelosPorAeropuerto 
          flights={flights} 
          setActiveComponent={setActiveComponent} 
        />
      )}
    </div>
  );
}

export default VuelosApp;
