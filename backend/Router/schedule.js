import express from 'express';
import { scheduleData } from '../controller/shcedule.js';
import { isAuth } from '../Middleware/isAuth.js';

export const router = express.Router();

//@api
//@api methos: POST
//@api des : schedule
//@api url : /api/schedule/
router.post("/", isAuth, scheduleData);

export default router;