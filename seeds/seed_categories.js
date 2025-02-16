/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("categories").del();
  await knex("categories").insert([
    { id: 1, name: "Meat & Poultry" },
    { id: 2, name: "Seafood" },
    { id: 3, name: "Dairy & Eggs" },
    { id: 4, name: "Legumes" },
    { id: 5, name: "Vegetables" },
    { id: 6, name: "Fruits" },
    { id: 7, name: "Pantry" },
    { id: 8, name: "Seasoning & Spices" },
    { id: 9, name: "Sauces & Condiments" },
    { id: 10, name: "Oils & Fats" },
  ]);
}
