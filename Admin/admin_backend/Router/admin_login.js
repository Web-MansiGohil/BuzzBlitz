import express from 'express';
import { adminData } from '../controller/adminLogin.js';

export const router = express.Router();

// Admin login route
// @api des : Admin login
// @api method : POST
// @api : /api/admin/login
router.post('/login', adminData);

export default router;