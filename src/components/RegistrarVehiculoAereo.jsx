

import React, { useState } from 'react';
import axios from 'axios';
import './RegistrarVehiculoAereo.css';

const RegistroVehiculoAereo = () => {
  const url = 'https://aeropuertolasalle-f1af9eaa4f6d.herokuapp.com/api/vehiculoAereo';
  
  const [tipoVehiculo, setTipoVehiculo] = useState('avion'); // Tipo de vehículo (avión, avioneta, etc.)
  const [datos, setDatos] = useState({
    model: '',
    serie: '',
    capacidad: 0,
    color: '',
    estado: '',
    antiguedad: '',
    llantas: 0,
    tanque: '',
    distancia: 0,
    aerolinea: '',
    tipoMotor: '',
    puertas: 0,
    tipo: '',
    numeroMotores: 0,
    tipoPista: '',
    clasificacion: '',
    tipoCombustion: '',
    helices: '',
    tipo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({  
      ...datos,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
const handleSubmit = async (e) => {
    e.preventDefault();
  
    let endpoint;
  
    // Determina el endpoint en función del tipo de vehículo
    if (tipoVehiculo === 'avion') {
      endpoint = `${url}/create/avion`;
    } else if (tipoVehiculo === 'avioneta') {
      endpoint = `${url}/create/avioneta`;
    } else if (tipoVehiculo === 'helicoptero') {
      endpoint = `${url}/create/helicoptero`;
    }
  
    try {
      const response = await axios.post(endpoint, datos);
      console.log('Vehículo registrado:', response.data);
      // Realiza cualquier acción adicional después de un registro exitoso, como limpiar el formulario
    } catch (error) {
      console.error('Error al registrar el vehículo:', error);
      if (error.response) {
        // Muestra más información del error si está disponible en la respuesta
        console.error('Detalles del error:', error.response.data);
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Vehículo Aéreo</h2>

      {/* Seleccionar el tipo de vehículo */}
      <label>
        Tipo de Vehículo:
        <select name="tipoVehiculo" value={tipoVehiculo} onChange={(e) => setTipoVehiculo(e.target.value)}>
          <option value="avion">Avión</option>
          <option value="avioneta">Avioneta</option>
          <option value="helicoptero">Helicóptero</option>
        </select>
      </label>

      {/* Campos generales para todos los tipos de vehículos */}
      <div className="form-group">
      <label>Modelo: <input type="text" name="model" value={datos.model} onChange={handleChange} required/></label>
      <label>Serie: <input type="text" name="serie" value={datos.serie} onChange={handleChange} required/></label>
      <label>Capacidad: <input type="number" name="capacidad" value={datos.capacidad} onChange={handleChange} required/></label>
      <label>Color: <input type="text" name="color" value={datos.color} onChange={handleChange} required/></label>
      <label>Estado: <input type="text" name="estado" value={datos.estado} onChange={handleChange} required/></label>
      <label>Antigüedad: <input type="text" name="antiguedad" value={datos.antiguedad} onChange={handleChange} required/></label>
      <label>Llantas: <input type="number" name="llantas" value={datos.llantas} onChange={handleChange} required/></label>
      <label>Tanque: <input type="text" name="tanque" value={datos.tanque} onChange={handleChange} required/></label>
      <label>Distancia: <input type="number" name="distancia" value={datos.distancia} onChange={handleChange} required/></label>

      {/* Campos específicos para Avión */}
      {tipoVehiculo === 'avion' && (
        <>
          <label>Aerolínea: <input type="text" name="aerolinea" value={datos.aerolinea} onChange={handleChange} required/></label>
          <label>Tipo de Motor: <input type="text" name="tipoMotor" value={datos.tipoMotor} onChange={handleChange} required/></label>
          <label>Puertas: <input type="number" name="puertas" value={datos.puertas} onChange={handleChange} required/></label>
          <label>Tipo: <input type="text" name="tipo" value={datos.tipo} onChange={handleChange} required/></label>
        </>
      )}

      {/* Campos específicos para Avioneta */}
      {tipoVehiculo === 'avioneta' && (
        <>
          <label>Número de Motores: <input type="number" name="numeroMotores" value={datos.numeroMotores} onChange={handleChange} required/></label>
          <label>Tipo de Pista: <input type="text" name="tipoPista" value={datos.tipoPista} onChange={handleChange} required/></label>
          <label>Clasificación: <input type="text" name="clasificacion" value={datos.clasificacion} onChange={handleChange} required/></label>
          <label>Tipo de Combustión: <input type="text" name="tipoCombustion" value={datos.tipoCombustion} onChange={handleChange} required/></label>
        </>
      )}

      {/* Campos específicos para Helicóptero */}
      {tipoVehiculo === 'helicoptero' && (
        <>
          <label>Helices: <input type="text" name="tipoRotor" value={datos.helices} onChange={handleChange} required/></label>
          <label>Tipo: <input type="text" name="capacidadAscenso" value={datos.tipo} onChange={handleChange} required/></label>
        </>
      )}
      </div>

      <button type="submit">Registrar Vehículo Aéreo</button>
    </form>
  );
};

export default RegistroVehiculoAereo;
