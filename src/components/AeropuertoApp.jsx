import React, { useState } from 'react';
import AltaAeropuerto from './AltaAeropuerto';
import ListaAeropuertos from './ListaAeropuertos';

const AeropuertoApp = () => {
    const [updateList, setUpdateList] = useState(false);

    const handleAeropuertoAdded = () => {
        setUpdateList(!updateList);
    };

    return (
        <div>
            <AltaAeropuerto onAeropuertoAdded={handleAeropuertoAdded} />
            <ListaAeropuertos key={updateList} />
        </div>
    );
};

export default AeropuertoApp;