import express from "express";
const router = express.Router();

import { getCuisines } from "../controllers/cuisines-controller.js";

router.route("/").get(getCuisines);

export default router;
