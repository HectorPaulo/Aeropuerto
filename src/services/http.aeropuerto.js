import axios from 'axios';
const URL = 'https://aeropuertolasalle-f1af9eaa4f6d.herokuapp.com/api/aeropuerto'

function getAllAeropuertos (){
    return axios.get(`${URL}/all`);
}

function getAeropuertoById (id){
    return axios.get(`${URL}/${id}`);
}

function createAeropuerto (aeropuerto){
    return axios.post(`${URL}/create`, aeropuerto);
}

function updateAeropuerto (aeropuerto){
    return axios.put(`${URL}${aeropuerto.id}`, aeropuerto);
}

function deleteAeropuerto (id){
    return axios.delete(`${URL}${id}`);
}

export {
    getAllAeropuertos,
    getAeropuertoById,
    createAeropuerto,
    updateAeropuerto,
    deleteAeropuerto
}