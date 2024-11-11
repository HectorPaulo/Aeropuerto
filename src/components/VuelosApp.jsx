import { useState } from 'react';
import RegistroVuelos from './registroVuelos';
import ListarVuelos from './ListarVuelos';
import ListarVuelosAeropuerto from './ListarVuelosAeropuerto';

function VuelosApp() {
  const [activeComponent, setActiveComponent] = useState('registro');

  return (
    <div>
      <nav>
        <button onClick={() => setActiveComponent('registro')}>Registrar Vuelo</button>
        <button onClick={() => setActiveComponent('listar')}>Ver Listado de Vuelos</button>
        <button onClick={() => setActiveComponent('listarPorAeropuerto')}>Listar por Aeropuerto</button>
      </nav>

      {activeComponent === 'registro' && <RegistroVuelos />}
      {activeComponent === 'listar' && <ListarVuelos />}
      {activeComponent === 'listarPorAeropuerto' && <ListarVuelosAeropuerto />}
    </div>
  );
}

export default VuelosApp;
