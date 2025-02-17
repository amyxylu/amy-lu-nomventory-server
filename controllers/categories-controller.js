import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

async function getCategories(_req, res) {
  try {
    const data = await knex("categories");
    res.json(data);
  } catch (err) {
    console.log("Error getting ingredient categories:", err);
    res.status(500).send("Error getting ingredient categories");
  }
}

export { getCategories };
