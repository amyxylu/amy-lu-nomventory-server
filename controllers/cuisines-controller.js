import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

async function getCuisines(_req, res) {
  try {
    const data = await knex("cuisines");
    res.json(data);
  } catch (err) {
    console.log("Error getting cuisines:", err);
    res.status(500).send("Error getting cuisines");
  }
}

async function getCuisineById(req, res) {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid cuisine ID" });
    }

    const cuisine = await knex("cuisines").where("id", id).first();

    if (!cuisine) {
      return res.status(404).json({ error: "Cuisine not found" });
    }

    res.json(cuisine);
  } catch (err) {
    console.error("Error fetching cuisine:", err);
    res.status(500).json({ error: "Error fetching cuisine" });
  }
}

async function getRecipesByCuisine(req, res) {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid Cuisine ID" });
    }

    const recipes = await knex("recipes").where("cuisine_id", id).select("*");

    res.json(recipes);
  } catch (err) {
    console.error("Error fetching recipes by cuisine:", err);
    res.status(500).json({ error: "Error fetching recipes" });
  }
}

export { getCuisines, getCuisineById, getRecipesByCuisine };
