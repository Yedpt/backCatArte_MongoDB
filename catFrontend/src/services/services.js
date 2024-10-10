import axios from "axios";

const BaseUrl = "http://localhost:3000/api/memes"; // Cambia por la URL de tu API si es necesario

// GET Obtener todos los memes
export const getMemes = async () => {
  try {
    // Agregamos un parámetro de consulta aleatorio a la URL
    const response = await axios.get(BaseUrl + "?_=" + new Date().getTime());
    return response.data;
  } catch (error) {
    console.error("Error al obtener los memes:", error);
    throw error;
  }
};

// Obtener un meme por ID
export const getMemeById = async (id) => {
  try {
    const response = await axios.get(`${BaseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el meme:", error);
    throw error;
  }
};

// Obtener memes por categoría
export const getMemeByCategory = async (category) => {
  try {
    const response = await axios.get(
      `${BaseUrl}?category=${encodeURIComponent(category)}`
    );
    console.log("Respuesta de la API por categoría:", response.data); // Verifica la respuesta
    return response.data;
  } catch (error) {
    console.error("Error al obtener memes por categoría:", error);
    throw error;
  }
};

// POST Crear un nuevo meme
export const createMeme = async (memeData) => {
  try {
    const response = await axios.post(BaseUrl, memeData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el meme:", error);
    throw error;
  }
};

// Actualizar un meme existente por ID
export const updateMeme = async (id, updatedMemeData) => {
  try {
    const response = await axios.put(`${BaseUrl}/${id}`, updatedMemeData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el meme:", error);
    throw error;
  }
};

// Eliminar un meme por ID
export const deleteMeme = async (id) => {
  try {
    await axios.delete(`${BaseUrl}/${id}`);
  } catch (error) {
    console.error("Error al eliminar el meme:", error);
    throw error;
  }
};
