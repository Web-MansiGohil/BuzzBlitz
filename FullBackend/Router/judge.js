import express from 'express';
import { getIdJudges, getJudges, judge_data } from '../controller/judge.js';

export const judgeRouter = express.Router();

//@api judge
//@api description : judges api
//@api method : POST
// @api path : /api/judges/new
judgeRouter.post("/new", judge_data);

//@api judge
//@api description : all judges data
//@api method : GET
// @api path : /api/judges/
judgeRouter.get("/", getJudges);

//@api judge
//@api description : all judges data by id
//@api method : GET
// @api path : /api/judges/:id
judgeRouter.get("/:id", getIdJudges);

export default judgeRouter;
