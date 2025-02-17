import express from "express";
const router = express.Router();

import { getAllRecipes } from "../controllers/recipes-controller.js";

router.route("/").get(getAllRecipes);

export default router;
