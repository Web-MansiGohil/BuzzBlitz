import express from 'express';
import { scheduleData } from '../controller/shcedule.js';

export const router = express.Router();

//@api
//@api methos: POST
//@api des : schedule
//@api url : /api/schedule/
router.post("/", scheduleData);

export default router;