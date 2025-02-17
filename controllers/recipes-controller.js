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

export { getAllRecipes };
