import axios from "axios";

const baseUrl = "http://localhost:8081/api/vuelo";

export const getAll = async () => {
    try {
        const response = await axios.get(`${baseUrl}/all`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const getById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data with id ${id}:`, error);
        throw error;
    }
};

export const create = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/create`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating data:", error);
        throw error;
    }
};

export const save = async (data) => {
    try {
        const response = await axios.put(`${baseUrl}/save`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error saving data:", error);
        throw error;
    }
};
