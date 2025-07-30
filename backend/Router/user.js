import express from 'express';
import { login_data, register_data } from '../controller/user.js';

export const router = express.Router();

//registation 
// @api des : user registration 
// @api method : post
// @api endpoint : /api/user/register
router.post("/register",register_data);

//log in  
// @api des : user log in 
// @api method : post
// @api endpoint : /api/user/login
router.post("/login",login_data);

export default router ;
