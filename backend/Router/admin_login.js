import express from 'express';
import { adminData, deleteUserData, getLastUserData, getUserData, getUserDataById, registerUser, updateLastUserData, updateUserData } from '../controller/adminLogin.js';
import { isAuth } from '../Middleware/isAuth.js';

export const router = express.Router();

// Admin login route
// @api des : Admin login
// @api method : POST
// @api : /api/admin/login
router.post('/login', isAuth, adminData);

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
// @api des : Admin access user data by id
// @api method : get
// @api : /api/admin/register/:id
router.get('/register/:id', getUserDataById);

// Admin login route
// @api des : Admin though user last data
// @api method : get
// @api : /api/admin/last
router.get('/last', getLastUserData);

// Admin login route
// @api des : Admin though update user data
// @api method : pull
// @api : /api/admin/update/:id
router.put('/update/:id', updateUserData);

// Admin login route
// @api des : Admin though delete user data
// @api method : delete
// @api : /api/admin/delete/:id
router.delete('/delete/:id', deleteUserData);


export default router;