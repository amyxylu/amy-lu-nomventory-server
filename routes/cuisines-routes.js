import express from "express";
const router = express.Router();

import {
  getCuisines,
  getRecipesByCuisine,
  getCuisineById,
} from "../controllers/cuisines-controller.js";

router.route("/").get(getCuisines);

router.route("/:id").get(getCuisineById);

router.route("/:id/recipes").get(getRecipesByCuisine);

export default router;
