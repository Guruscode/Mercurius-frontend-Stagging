import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const getProductsLimited = async () => {
  try {
    const response = await api.get("/products?limit=9");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getSingleProduct = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`); // Use productId parameter in the URL
    return response.data;
  } catch (error) {
    console.error("Error fetching single product:", error);
    throw error;
  }
};
export const getCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Add more API methods as needed

export default api;
