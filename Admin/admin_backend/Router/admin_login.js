import express from 'express';
import { adminData, getLastUserData, getUserData, registerUser, updateUserData } from '../controller/adminLogin.js';

export const router = express.Router();

// Admin login route
// @api des : Admin login
// @api method : POST
// @api : /api/admin/login
router.post('/login', adminData);

// Admin login route
// @api des : Admin add user data
// @api method : post
// @api : /api/admin/register
router.post('/register', registerUser);

// Admin login route
// @api des : Admin access user data
// @api method : get
// @api : /api/admin/register/
router.get('/register/', getUserData);


// Admin login route
// @api des : Admin though user last data
// @api method : get
// @api : /api/admin/login
router.get('/last', getLastUserData);

// Admin login route
// @api des : Admin though update user data
// @api method : pull
// @api : /api/admin/
router.put('/update/:id', updateUserData);


export default router;