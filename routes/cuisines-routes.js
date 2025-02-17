import express from "express";
const router = express.Router();

import { getCuisines } from "../controllers/cuisines-controllers.js";

router.route("/").get(getCuisines);

export default router;
