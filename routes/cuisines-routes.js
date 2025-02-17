import express from "express";
const router = express.Router();

import {
  getCuisines,
  getRecipesByCuisine,
} from "../controllers/cuisines-controller.js";

router.route("/").get(getCuisines);

router.route("/:id/recipes").get(getRecipesByCuisine);

export default router;
