import express from "express";
const router = express.Router();

import { filterRecipes } from "../controllers/filters-controller.js";

router.post("/recipes", filterRecipes);

export default router;
