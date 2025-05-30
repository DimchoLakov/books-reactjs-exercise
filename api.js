import axios from "axios"

const baseUrl = 'http://localhost:3001/books';

export const getAllBooks = async () => {
    const response = await axios.get(baseUrl);

    return response.data;
}

export const getBookById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);

    return response.data;
}

export const createBook = async (title) => {
    const response = await axios.post(baseUrl, {
        title
    });

    return response.data;
}

export const updateBook = async (id, title) => {
    const response = await axios.put(`${baseUrl}/${id}`, {
        title
    });

    return response.data;
}

export const deleteBook = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);

    return response.data;
}