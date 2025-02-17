import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

async function filterRecipes(req, res) {
  try {
    const { ingredients } = req.body;

    if (!Array.isArray(ingredients) || ingredients.length === 0) {
      return res
        .status(400)
        .json({ error: "Invalid or empty ingredients array" });
    }
    const matchedRecipes = await knex("recipes")
      .join(
        "recipes_ingredients",
        "recipes.id",
        "recipes_ingredients.recipe_id"
      )
      .whereIn("recipes_ingredients.ingredient_id", ingredients)
      .groupBy("recipes.id")
      .select("recipes.*")
      .countDistinct("recipes_ingredients.ingredient_id as match_count")
      .orderBy("match_count", "desc");

    res.json(matchedRecipes);
  } catch (err) {
    console.error("Error filtering recipes:", err);
    res.status(500).json({ error: "Error filtering recipes" });
  }
}
export { filterRecipes };
