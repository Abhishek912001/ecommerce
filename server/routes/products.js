import express from "express";

import { getProducts } from '../controllers/products.js'

const router = express.Router();

// http://localhost:5000/products

router.get('/', getProducts);

export default router;