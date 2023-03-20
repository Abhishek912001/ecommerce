import axios from "axios";

const url = 'http://localhost:5000/api/v1/products';

export const fetchProducts = () => axios.get(url);

