import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const fetchProducts = () => axios.get(`${url}/products`);

