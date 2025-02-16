/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("cuisines").del();
  await knex("cuisines").insert([
    { id: 1, name: "Italian" },
    { id: 2, name: "American" },
    { id: 3, name: "Greek" },
    { id: 4, name: "Chinese" },
    { id: 5, name: "Korean" },
    { id: 6, name: "Japanese" },
  ]);
}
