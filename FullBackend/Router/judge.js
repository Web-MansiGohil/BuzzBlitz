import express from 'express';
import { getIdJudges, getJudges, judge_data } from '../controller/judge.js';
import { isAuth } from "./../Middleware/isAuth.js"

export const judgeRouter = express.Router();

//@api judge
//@api description : judges api
//@api method : POST
// @api path : /api/judge
judgeRouter.post("/judge", judge_data);

//@api judge
//@api description : all judges data
//@api method : GET
// @api path : /api/judge/
judgeRouter.get("/", getJudges);

//@api judge
//@api description : all judges data by id
//@api method : GET
// @api path : /api/judge/:id
judgeRouter.get("/:id", getIdJudges);

export default judgeRouter;
