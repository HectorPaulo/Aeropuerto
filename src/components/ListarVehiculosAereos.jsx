import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListarVehiculosAereos.css';
const ListaVehiculosAereos = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [loading, setLoading] = useState(true);

  // URL de la API
  const url = 'https://aeropuertolasalle-f1af9eaa4f6d.herokuapp.com/api/vehiculoAereo';

  // Función para obtener los datos de la API
  const obtenerVehiculos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/all`);
      setVehiculos(response.data);
    } catch (error) {
      console.error('Error al obtener los vehículos aéreos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Llamar a la función obtenerVehiculos cuando se monta el componente
  useEffect(() => {
    obtenerVehiculos();
  }, []);

  return (
    <div>
      <h2>Lista de Vehículos Aéreos</h2>
      <button onClick={obtenerVehiculos} disabled={loading}>
        {loading ? 'Cargando...' : 'Recargar Lista'}
      </button>
      {vehiculos.length > 0 ? (
        <table border="1" style={{ marginTop: '10px', width: '100%' }}>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Modelo</th>
              <th>Capacidad</th>
              <th>Color</th>
              <th>Antigüedad</th>
              <th>Estado</th>
              {/* Agrega más columnas según sea necesario */}
            </tr>
          </thead>
          <tbody>
            {vehiculos.map((vehiculo) => (
              <tr key={vehiculo.id}>
                <td>{vehiculo.matricula}</td>
                <td>{vehiculo.model}</td>
                <td>{vehiculo.capacidad}</td>
                <td>{vehiculo.color}</td>
                <td>{vehiculo.antiguedad}</td>
                <td>{vehiculo.estado}</td>
                {/* Agrega más celdas si hay más información */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>{loading ? 'Cargando vehículos...' : 'No se encontraron vehículos aéreos.'}</p>
      )}
    </div>
  );
};

export default ListaVehiculosAereos;
