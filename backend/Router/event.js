import express from 'express';
import { newEvent } from '../controller/event.js';


export const router = express.Router();

//@api
//@api methos: POST
//@api des : new Event
//@api url : /api/event/new
router.post("/new",newEvent);

export default router;