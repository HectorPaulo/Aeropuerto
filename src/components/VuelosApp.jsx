import  { useState } from 'react';
import RegistroVuelos from './registroVuelos';
import ListarVuelos from './ListarVuelos';
import ListarVuelosAeropuerto from './ListarVuelosAeropuerto';

const VuelosApp = () => {
    const [updateList, setUpdateList] = useState(false);

    const handleVueloAdded = () => {
        setUpdateList(!updateList);
    };

    return (
        <div>
            <RegistroVuelos onAeropuertoAdded={handleVueloAdded} />
            <ListarVuelos key={updateList}/>
            <ListarVuelosAeropuerto key={updateList}/>
        </div>
    );
};

export default VuelosApp;