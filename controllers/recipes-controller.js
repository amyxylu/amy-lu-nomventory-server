import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

async function getAllRecipes(_req, res) {
  try {
    const data = await knex("recipes");
    res.json(data);
  } catch (err) {
    console.log("Error getting all recipes:", err);
    res.status(500).send("Error getting all recipes");
  }
}

async function getRecipeById(req, res) {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid recipe ID" });
    }

    const recipe = await knex("recipes").where("id", id).first();

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json(recipe);
  } catch (err) {
    console.error("Error fetching recipe:", err);
    res.status(500).json({ error: "Error fetching recipe" });
  }
}

export { getAllRecipes, getRecipeById };
