import axios from "axios";

const URL = 'https://aeropuertolasalle-f1af9eaa4f6d.herokuapp.com/api/vuelo';

function getVuelos(){
    return axios.get(`${URL}/all`);
}

function getVueloById(id){
    return axios.get(`${URL}/${id}`);
}

function createVuelo(data){
    return axios.post(`${URL}/create`, data);
}

function deleteVuelo(id){
    return axios.delete(`${URL}/delete/${id}`);
}

export {
    getVuelos,
    getVueloById,
    createVuelo,
    deleteVuelo
}