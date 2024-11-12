import axios from 'axios';

// URL de la API
const url = 'https://aeropuertolasalle-f1af9eaa4f6d.herokuapp.com/api/vehiculoAereo';

// Función para obtener los datos de la API
axios.get(url+'/all')
  .then(response => {
    console.log('Datos de vehiculos aéreos:', response.data);
    // Puedes procesar los datos aquí
  })
  .catch(error => {
    console.error('Error al consumir la API:', error);
  });

axios.post(url+'/create/avion', datos)
  .then(response => {
    console.log('Vehículo registrado:', response.data);
  })
  .catch(error => {
    console.error('Error al registrar el vehículo:', error);
  });

  axios.post(url+'/create/helicoptero', datos)
  .then(response => {
    console.log('Vehículo registrado:', response.data);
  })
  .catch(error => {
    console.error('Error al registrar el vehículo:', error);
  });
  
  axios.post(url+'/create/avioneta', datos)
  .then(response => {
    console.log('Vehículo registrado:', response.data);
  })
  .catch(error => {
    console.error('Error al registrar el vehículo:', error);
  });

