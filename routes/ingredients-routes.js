import express from "express";
const router = express.Router();

import { getIngredients } from "../controllers/ingredients-controllers.js";

router.route("/").get(getIngredients);

export default router;
