import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

async function filterRecipes(req, res) {
  try {
    const { ingredients, excludeIngredients } = req.body;

    if (!Array.isArray(ingredients) || ingredients.length === 0) {
      return res
        .status(400)
        .json({ error: "Invalid or empty ingredients array" });
    }

    let query = knex("recipes")
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

    if (Array.isArray(excludeIngredients) && excludeIngredients.length > 0) {
      query = query.whereNotExists(function () {
        this.select("*")
          .from("recipes_ingredients")
          .join(
            "ingredients",
            "recipes_ingredients.ingredient_id",
            "ingredients.id"
          )
          .whereRaw("recipes_ingredients.recipe_id = recipes.id")
          .whereIn("ingredients.id", excludeIngredients);
      });
    }

    const matchedRecipes = await query;

    const recipeIds = matchedRecipes.map((recipe) => recipe.id);
    const totalIngredients = await knex("recipes_ingredients")
      .whereIn("recipe_id", recipeIds)
      .groupBy("recipe_id")
      .select("recipe_id")
      .countDistinct("ingredient_id as total_ingredients");

    const recipesWithMatchPercentage = matchedRecipes.map((recipe) => {
      const total =
        totalIngredients.find((t) => t.recipe_id === recipe.id)
          ?.total_ingredients || 1;
      return {
        ...recipe,
        match_percentage: Math.round((recipe.match_count / total) * 100), // Calculate percentage
      };
    });

    res.json(recipesWithMatchPercentage);
  } catch (err) {
    console.error("Error filtering recipes:", err);
    res.status(500).json({ error: "Error filtering recipes" });
  }
}

export { filterRecipes };
