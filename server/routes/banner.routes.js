import express from "express";
import { getBannerData } from '../controllers/banner.controllers.js';

const router = express.Router();

router.route('/').get(getBannerData);

export default router;