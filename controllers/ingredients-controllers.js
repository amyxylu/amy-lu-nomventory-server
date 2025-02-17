import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

async function getIngredients(_req, res) {
  try {
    const data = await knex("ingredients");
    res.json(data);
  } catch (err) {
    console.log("Error getting ingredients:", err);
    res.status(500).send("Error getting ingredients");
  }
}

export { getIngredients };
