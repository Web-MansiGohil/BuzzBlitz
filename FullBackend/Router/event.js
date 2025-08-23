import express from 'express';
import { getAllEvent, newEvent } from '../controller/event.js';


export const router = express.Router();

//@api
//@api methos: POST
//@api des : new Event
//@api url : /api/event/it
router.post("/it", newEvent);
//@api
//@api methos: GET
//@api des : Event all dat
//@api url : /api/event/it/
router.get("/it/", getAllEvent);

export default router;