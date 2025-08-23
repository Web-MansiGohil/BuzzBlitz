import express from 'express';
import { getLastUserData, getRegisterData, getRegisterDataById, login_data, register_data } from '../controller/user.js';
import { isAuth } from '../Middleware/isAuth.js';


export const router = express.Router();

//registation 
// @api des : user registration 
// @api method : post
// @api endpoint : /api/user/register
router.post("/register", isAuth, register_data);

//register data
// @api des : get user registration data 
// @api method : get
// @api endpoint : /api/user/register
router.get("/register/", getRegisterData);

//register data
// @api des : get user registration data 
// @api method : get
// @api endpoint : /api/user/
router.get("/:id", getRegisterDataById);

//register data
// @api des : get user registration data of last user
// @api method : get
// @api endpoint : /api/user/register/last
router.get("/register/last", getLastUserData);

//log in  
// @api des : user log in 
// @api method : post
// @api endpoint : /api/user/login
router.post("/login", login_data);

export default router;
