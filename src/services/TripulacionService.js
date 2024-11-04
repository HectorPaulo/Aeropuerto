import axios from "axios";

const API_URL = "https://aeropuertolasalle-f1af9eaa4f6d.herokuapp.com/api/tripulacion";

const TripulacionService={
    createPiloto:async (piloto) => {
        try {
            const response = await axios.post(`${API_URL}/create/piloto`, piloto);
            return response.data;
          } catch (error) {
            console.error('Error creating piloto:', error);
            throw error;
          }
    },
    createCopiloto:async (copiloto) => {
        try {
            const response = await axios.post(`${API_URL}/create/copiloto`, copiloto);
            return response.data;
          } catch (error) {
            console.error('Error creating copiloto:', error);
            throw error;
          }
    },
    createSobrecargo:async (sobrecargo) => {
        try {
            const response = await axios.post(`${API_URL}/create/sobrecargo`, sobrecargo);
            return response.data;
          } catch (error) {
            console.error('Error creating sobrecargo:', error);
            throw error;
          }
    },
    mostrarTripulacion:async () => {
        try {
            const response = await axios.get(`${API_URL }/all`);
            return response.data;
          } catch (error) {
            console.error('Error fetching clientes:', error);
            throw error;
          }
    }
};
export default TripulacionService;

