// routes/categoryRoutes.js
import express from 'express';
import * as categoryController from '../controllers/categoryController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.post('/', verifyToken, categoryController.createCategory);

export default router;
