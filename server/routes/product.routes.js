import express from "express";

import { getAllProducts } from '../controllers/product.controllers.js';

const router = express.Router();

// http://localhost:5000/products

// router.get('/', getAllProduct); for a single http method less efficient for bigger projects.
router.route('/').get(getAllProducts);

export default router;