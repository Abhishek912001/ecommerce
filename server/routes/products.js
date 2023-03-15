import express from "express";

import { getAllProduct } from '../controllers/products.js'

const router = express.Router();

// http://localhost:5000/products

// router.get('/', getAllProduct); for a single http method less efficient for bigger projects.
router.route('/').get(getAllProduct);

export default router;