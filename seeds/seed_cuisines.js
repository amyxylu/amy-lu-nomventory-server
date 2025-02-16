/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    { id: 1, cuisine: "Italian" },
    { id: 2, cuisine: "American" },
    { id: 3, cuisine: "Greek" },
    { id: 4, cuisine: "Chinese" },
    { id: 5, cuisine: "Korean" },
    { id: 6, cuisine: "Japanese" },
  ]);
};
