import express from "express";
const router = express.Router();

import {
  getAllRecipes,
  getRecipeById,
  getIngredientsByRecipeId,
} from "../controllers/recipes-controller.js";

router.route("/").get(getAllRecipes);

router.route("/:id").get(getRecipeById);

router.route("/:id/ingredients").get(getIngredientsByRecipeId);

export default router;
