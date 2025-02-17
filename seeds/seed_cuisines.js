/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("cuisines").del();
  await knex("cuisines").insert([
    { id: 1, cuisine_name: "Italian" },
    { id: 2, cuisine_name: "American" },
    { id: 3, cuisine_name: "Mexican" },
    { id: 4, cuisine_name: "Chinese" },
    { id: 5, cuisine_name: "Korean" },
    { id: 6, cuisine_name: "Japanese" },
  ]);
}
