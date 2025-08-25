import express from 'express';
import { getAllScheduleData, scheduleData } from '../controller/shcedule.js';

export const router = express.Router();

//@api
//@api methos: POST
//@api des : schedule
//@api url : /api/schedule/
router.post("/", scheduleData);

//@api
//@api methos: GET
//@api des : ALL schedule
//@api url : /api/schedule/all
router.get("/all", getAllScheduleData);

export default router;