import express from "express";
const router = express.Router();

import {
  getAllRecipes,
  getRecipeById,
} from "../controllers/recipes-controller.js";

router.route("/").get(getAllRecipes);

router.route("/:id").get(getRecipeById);

export default router;
