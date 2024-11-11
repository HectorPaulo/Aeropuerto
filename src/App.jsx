import React from 'react';
import AltaAeropuerto from './components/AltaAeropuerto';
import ListaAeropuertos from './components/ListaAeropuertos';
import './components/Styles.css';

const App = () => {
    return (
        <div className="main-container">
            <AltaAeropuerto />
            <ListaAeropuertos />
        </div>
    );
};

export default App;