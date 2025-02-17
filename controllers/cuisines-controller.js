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

export { getCuisines };
